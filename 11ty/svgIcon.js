const fs = require('fs')

const SPRITE_FILE = 'public/sprites/sprite.json';

if (!fs.existsSync(SPRITE_FILE)) {
    console.error('Sprite file not found');
    return;
}
const sprite = JSON.parse(fs.readFileSync('public/sprites/sprite.json', 'utf-8'));


function checkIcon(type, name) {
    if (!sprite[type]) {
        return `Type ${type} not found`;
    }
    if (!sprite[type].icons.includes(name)) {
       return `Icon ${name} not found in ${type}`;
    }
    return false
}

module.exports = function (type, name, attrs) {
    const error = checkIcon(type, name)
    if(error){
        return error
    }
    return `<svg class="base-icon" ${attrs}>`
        + `<use xlink:href="/sprites/${type}.svg#${name}"></use>`
        + `</svg>`;


    return {
        sprite,
    }
}