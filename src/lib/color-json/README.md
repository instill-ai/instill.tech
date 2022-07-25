# About Color Json

The reason we have this lib is because we have lots of design meterial which have custom color for every JSON property. This won't work if we simplily use Syntax Highlighting tool like prism.

# About the structure

There are 5 supported primitives function

- getString

```js
const example = getString({
  value: "hi",
  valueColor: "text-black",
  quoteColor: "text-black",
  trailingComma: true,
  trailingCommaColor: "text-black",
})

console.log(example) // "hi"
```


- getNumber

```js
const example = getNumber({
  value: 100,
  valueColor: "text-black",
  quoteColor: "text-black",
  trailingComma: true,
  trailingCommaColor: "text-black",
})

console.log(example) // 100
```

- getStringProp

```js
const example = getStringProp({
  key: "id",
  keyColor: "text-instillBlue",
  value: "det-pipeline",
  valueColor: "text-black",
  quoteColor: "text-black",
  colonColor: "text-black",
  trailingComma: true,
  trailingCommaColor: "text-black",
}),

console.log(example) // "id": "det-pipeline"
```

- getArrayProp
  - `breakLine=true` will force line break
  - `breakLine=true` will force not line break and have additional space before the end bracker ` ]`

```js
const example = getArrayProp({
  key: "model_instances",
  keyColor: "text-instillYellow",
  quoteColor: "text-black",
  colonColor: "text-black",
  bracketColor: "text-black",
  trailingComma: true,
  trailingCommaColor: "text-black",
  indent: "pl-8",
  breakLine: false, 
  children: [
    getNumber({
      value: 10,
      valueColor: "text-instillYellow",
      trailingComma: true,
      trailingCommaColor: "text-black",
    }),
    getNumber({
      value: 1220,
      valueColor: "text-instillYellow",
      trailingComma: false,
      trailingCommaColor: "text-black",
    }),
  ],
}),

console.log(example) // [ 10, 1220 ]
```


- getObjectProp

```js
const example = getObjectProp({
  key: "recipe",
  keyColor: "text-instillBlue",
  quoteColor: "text-black",
  colonColor: "text-black",
  bracketColor: "text-black",
  trailingComma: true,
  trailingCommaColor: "text-black",
  indent: "pl-8",
  children: [
    getStringProp({
      key: "source",
      keyColor: "text-instillGreen",
      value: "source-connectors/source-http",
      valueColor: "text-black",
      quoteColor: "text-black",
      colonColor: "text-black",
      trailingComma: true,
      trailingCommaColor: "text-black",
    }),
  ]
})

console.log(example) 
// "recipe": {
//   "source": "source-connectors/source-http",
// }

```