import { Meta } from "@storybook/react";
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
} as Meta;

const Template = () => {
  return setColorJson({
    id: "color-json-test",
    bracketColor: "text-black",
    trailingComma: false,
    indent: "pl-8",
    children: [
      setStringKv({
        id: "id",
        key: "id",
        indent: "pl-8",
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
        id: "recipe",
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
            id: "recipe_source",
            key: "source",
            indent: "pl-8",
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
            id: "recipe_model_instances",
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
                id: "model_instances_10",
                value: 10,
                valueColor: "text-instillYellow",
                trailingComma: true,
                trailingCommaColor: "text-black",
              }),
              setNumberValue({
                id: "model_instances_1220",
                value: 1220,
                valueColor: "text-instillYellow",
                trailingComma: false,
                trailingCommaColor: "text-black",
              }),
            ],
          }),
          setStringKv({
            id: "recipe_destination",
            indent: "pl-8",
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
            id: "recipe_destination_number",
            indent: "pl-8",
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
