import {
  setColorJson,
  setStringProp,
  setObjectProp,
  setArrayProp,
  setNumber,
} from ".";

export default {
  title: "Components/ColorJson",
};

const Template = () => {
  return setColorJson({
    bracketColor: "text-black",
    indent: "pl-8",
    children: [
      setStringProp({
        key: "id",
        keyColor: "text-instillBlue",
        value: "det-pipeline",
        valueColor: "text-black",
        quoteColor: "text-black",
        colonColor: "text-black",
        trailingComma: true,
        trailingCommaColor: "text-black",
      }),
      setObjectProp({
        key: "recipe",
        keyColor: "text-instillBlue",
        quoteColor: "text-black",
        colonColor: "text-black",
        bracketColor: "text-black",
        trailingComma: true,
        trailingCommaColor: "text-black",
        indent: "pl-8",
        children: [
          setStringProp({
            key: "source",
            keyColor: "text-instillGreen",
            value: "source-connectors/source-http",
            valueColor: "text-black",
            quoteColor: "text-black",
            colonColor: "text-black",
            trailingComma: true,
            trailingCommaColor: "text-black",
          }),
          setArrayProp({
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
              setNumber({
                value: 10,
                valueColor: "text-instillYellow",
                trailingComma: true,
                trailingCommaColor: "text-black",
              }),
              setNumber({
                value: 1220,
                valueColor: "text-instillYellow",
                trailingComma: false,
                trailingCommaColor: "text-black",
              }),
            ],
          }),
          setStringProp({
            key: "destination",
            keyColor: "text-instillGreen",
            value: "destination-connectors/destination-http",
            valueColor: "text-black",
            quoteColor: "text-black",
            colonColor: "text-black",
            trailingComma: true,
            trailingCommaColor: "text-black",
          }),
        ],
      }),
    ],
  });
};

export const Playground = Template.bind({});
