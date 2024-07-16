# Сборка

## Копирование шаблона и первый запуск

```bash
npx degit upline-studio/11ty-template NAME_OF_YOUR_PROJECT
cd NAME_OF_YOUR_PROJECT
npm i
npm run build:sprite
npm run start
```

Запуск:

```bash
npm start
```

Сборка в продакшн:

```bash
npm run build
```

## Работа с SVG-иконками

Иконки лежат в подпапках папки `src/resources/icons/`.
Для добавления новой иконки, нужно положить её в одну из подпапок и запустить сборку спрайта:

```bash
npm run build:sprite
```

На каждую из подпапок команда генерирует свой спрайт. Использовать спрайт в коде можно через макрос svg:

```njk
{% import "sprite.njk" as sprite %}
{{ sprite.svg('main', 'user', 200, 200) }}
```

Тут:

- main &mdash; название папки,
- user &mdash; название иконки;
- 200, 200 &mdash; ширина и высота.

## Данные для шаблонов

Данные для шаблонов лежат в папке `src/views/data/`.

Данные из этих файлов потом можно испольовать в шаблоне pages через переменную `НАЗВАНИЕ_ФАЙЛА.НАЗВАНИЕ_ПЕРЕМЕННОЙ`.

Файлы с данными описываем в TypeScript-ом. В каждом файле должны быть описаны типы данных, которые он содержит.
У каждой экспортируемой переменной должен быть тип:

```ts
type NameOfType = {
  someProperties: string
  // ...
};

export const nameOfVariable: NameOfType = {
  // ...
};
```
