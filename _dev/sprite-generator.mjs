// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import fs from 'fs/promises';
import path from 'path';
import {createHash}  from "node:crypto";

// eslint-disable-next-line import/no-extraneous-dependencies
import SVGSpriter from 'svg-sprite';

const SOURCE_DIR = 'src/resources/icons';
const OUTPUT_DIR = 'public/sprites/';


await fs.mkdir(OUTPUT_DIR, {
    recursive: true,
});

async function isDir(fileName) {
    const stat = await fs.stat(fileName)
    return stat.isDirectory()
}

async function getDirs(dir) {
    const entities = (await fs.readdir(dir)).map((entity) => path.join(dir, entity))
    const stats = await Promise.all(entities.map(isDir))

    return entities.filter((_, index) => stats[index])
}

async function getSvgFiles(dir) {
    const entities = await fs.readdir(dir)

    return entities
        .filter((fileName) => fileName.endsWith('.svg'))
        .map((fileName) => path.join(dir, fileName));
}

const config = {
    mode: {
        symbol: true,
    },
};

async function makeSvg(dir) {
    const spriter = new SVGSpriter(config);
    const files = await getSvgFiles(dir)

    if (files.length === 0) {
        return null
    }

    for (const file of files) {
        spriter.add(file, null, await fs.readFile(file, 'utf-8'));
    }


    const {result} = await spriter.compileAsync();
    const svgFile = result.symbol.sprite;

    return svgFile.contents
}


const dirs = await getDirs(SOURCE_DIR)

const spriteDeclaration = {}

for (const dir of dirs) {
    const svg = await makeSvg(dir)
    spriteDeclaration[path.basename(dir)] = createHash('md5').update(svg).digest('hex')
    await fs.writeFile(path.join(OUTPUT_DIR, path.basename(dir) + '.svg'), svg);
}

await fs.writeFile(path.join(OUTPUT_DIR,'sprite.json'), JSON.stringify(spriteDeclaration, null, 2));
