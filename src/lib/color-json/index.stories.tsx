import {
  setColorJson,
  setStringKv,
  setObjectKv,
  setArrayKv,
  setNumberValue,
  setNumberKv,
} from "./colorJson";

export default {
  title: "Components/ColorJson",
};

const Template = () => {
  return setColorJson({
    bracketColor: "text-black",
    indent: "pl-8",
    children: [
      setStringKv({
        key: "id",
        keyColor: "text-instillBlue",
        value: "det-pipeline",
        valueColor: "text-black",
        quoteColor: "text-black",
        colonColor: "text-black",
        trailingComma: true,
        trailingCommaColor: "text-black",
        wrap: false,
      }),
      setObjectKv({
        key: "recipe",
        keyColor: "text-instillBlue",
        quoteColor: "text-black",
        colonColor: "text-black",
        bracketColor: "text-black",
        trailingComma: true,
        trailingCommaColor: "text-black",
        indent: "pl-8",
        wrap: false,
        children: [
          setStringKv({
            key: "source",
            keyColor: "text-instillGreen",
            value: "source-connectors/source-http",
            valueColor: "text-black",
            quoteColor: "text-black",
            colonColor: "text-black",
            trailingComma: true,
            trailingCommaColor: "text-black",
            wrap: false,
          }),
          setArrayKv({
            key: "model_instances",
            keyColor: "text-instillYellow",
            quoteColor: "text-black",
            colonColor: "text-black",
            bracketColor: "text-black",
            trailingComma: true,
            trailingCommaColor: "text-black",
            indent: "pl-8",
            breakLine: false,
            wrap: false,
            children: [
              setNumberValue({
                key: "model_instances_10",
                value: 10,
                valueColor: "text-instillYellow",
                trailingComma: true,
                trailingCommaColor: "text-black",
              }),
              setNumberValue({
                key: "model_instances_1220",
                value: 1220,
                valueColor: "text-instillYellow",
                trailingComma: false,
                trailingCommaColor: "text-black",
              }),
            ],
          }),
          setStringKv({
            key: "destination",
            keyColor: "text-instillGreen",
            value: "destination-connectors/destination-http",
            valueColor: "text-black",
            quoteColor: "text-black",
            colonColor: "text-black",
            trailingComma: true,
            trailingCommaColor: "text-black",
            wrap: false,
          }),
          setNumberKv({
            key: "number",
            keyColor: "text-instillGreen",
            value: 2456,
            valueColor: "text-instillYellow",
            quoteColor: "text-black",
            colonColor: "text-black",
            trailingComma: true,
            trailingCommaColor: "text-black",
            wrap: false,
          }),
        ],
      }),
    ],
  });
};

export const Playground = Template.bind({});
