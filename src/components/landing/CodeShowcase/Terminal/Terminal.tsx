import {
  setArrayKv,
  setColorJson,
  setObjectKv,
  setStringKv,
  setStringValue,
} from "@/lib/color-json";
import { Nullable } from "@/types/instill";
import { ReactNode } from "react";
import { Resource } from "../CodeShowcase";

export type TerminalProps = {
  currectResource: Resource;
};

const Terminal = ({ currectResource }: TerminalProps) => {
  let code: Nullable<ReactNode> = null;
  let indent = "pl-8";
  let tokenColor = "text-white";
  let color = {
    source: "text-instillNeonGreen",
    destination: "text-instillWarmOrange50",
    model: "text-instillYellow50",
    pipeline: "text-instillBlue50",
  };

  switch (currectResource) {
    case "pipeline":
      code = setColorJson({
        bracketColor: tokenColor,
        indent,
        position: "my-auto",
        children: [
          setStringKv({
            key: "id",
            keyColor: color.pipeline,
            value: "det-pipeline",
            valueColor: tokenColor,
            quoteColor: tokenColor,
            colonColor: tokenColor,
            trailingComma: true,
            trailingCommaColor: tokenColor,
          }),
          setObjectKv({
            key: "recipe",
            keyColor: color.pipeline,
            quoteColor: tokenColor,
            colonColor: tokenColor,
            bracketColor: tokenColor,
            trailingComma: true,
            trailingCommaColor: tokenColor,
            indent,
            children: [
              setStringKv({
                key: "source",
                keyColor: color.source,
                value: "source-connectors/source-http",
                valueColor: tokenColor,
                quoteColor: tokenColor,
                colonColor: tokenColor,
                trailingComma: true,
                trailingCommaColor: tokenColor,
              }),
              setArrayKv({
                key: "model_instances",
                keyColor: color.model,
                quoteColor: tokenColor,
                colonColor: tokenColor,
                bracketColor: tokenColor,
                trailingComma: true,
                trailingCommaColor: tokenColor,
                indent,
                breakLine: false,
                children: [
                  setStringValue({
                    value: "models/yolov4/instances/v1.0",
                    valueColor: tokenColor,
                    quoteColor: tokenColor,
                    trailingComma: false,
                    trailingCommaColor: tokenColor,
                    indent,
                  }),
                ],
              }),
              setStringKv({
                key: "destination",
                keyColor: color.destination,
                value: "destination-connectors/destination-http",
                valueColor: tokenColor,
                quoteColor: tokenColor,
                colonColor: tokenColor,
                trailingComma: true,
                trailingCommaColor: tokenColor,
              }),
            ],
          }),
        ],
      });
      break;
    case "source":
      code = setColorJson({
        bracketColor: tokenColor,
        indent,
        position: "my-auto",
        children: [
          setStringKv({
            key: "id",
            keyColor: color.source,
            value: "source-http",
            valueColor: tokenColor,
            quoteColor: tokenColor,
            colonColor: tokenColor,
            trailingComma: true,
            trailingCommaColor: tokenColor,
          }),
          setStringKv({
            key: "source_connector_definition",
            keyColor: color.source,
            value: "source_connector_definitions/source-http",
            valueColor: tokenColor,
            quoteColor: tokenColor,
            colonColor: tokenColor,
            trailingComma: true,
            trailingCommaColor: tokenColor,
          }),
          setObjectKv({
            key: "connector",
            keyColor: color.source,
            quoteColor: tokenColor,
            colonColor: tokenColor,
            bracketColor: tokenColor,
            trailingComma: true,
            trailingCommaColor: tokenColor,
            indent,
            children: [
              setObjectKv({
                key: "connector",
                keyColor: color.source,
                quoteColor: tokenColor,
                colonColor: tokenColor,
                bracketColor: tokenColor,
                trailingComma: true,
                trailingCommaColor: tokenColor,
                indent,
                children: [],
              }),
            ],
          }),
        ],
      });
      break;
    case "model":
      code = setColorJson({
        bracketColor: tokenColor,
        indent,
        position: "my-auto",
        children: [
          setStringKv({
            key: "id",
            keyColor: color.model,
            value: "yolov4",
            valueColor: tokenColor,
            quoteColor: tokenColor,
            colonColor: tokenColor,
            trailingComma: true,
            trailingCommaColor: tokenColor,
          }),
          setStringKv({
            key: "model_definition",
            keyColor: color.model,
            value: "model_definitions/github",
            valueColor: tokenColor,
            quoteColor: tokenColor,
            colonColor: tokenColor,
            trailingComma: true,
            trailingCommaColor: tokenColor,
          }),
          setObjectKv({
            key: "configuration",
            keyColor: color.model,
            quoteColor: tokenColor,
            colonColor: tokenColor,
            bracketColor: tokenColor,
            trailingComma: true,
            trailingCommaColor: tokenColor,
            indent,
            children: [
              setStringKv({
                key: "repository",
                keyColor: color.model,
                value: "instill-ai/model-yolov4",
                valueColor: tokenColor,
                quoteColor: tokenColor,
                colonColor: tokenColor,
                trailingComma: true,
                trailingCommaColor: tokenColor,
              }),
            ],
          }),
        ],
      });
      break;
    default:
      code = setColorJson({
        bracketColor: tokenColor,
        indent,
        position: "my-auto",
        children: [
          setStringKv({
            key: "id",
            keyColor: color.destination,
            value: "destination-http",
            valueColor: tokenColor,
            quoteColor: tokenColor,
            colonColor: tokenColor,
            trailingComma: true,
            trailingCommaColor: tokenColor,
          }),
          setStringKv({
            key: "destination_connector_definition",
            keyColor: color.destination,
            value: "destination_connector_definitions/destination-http",
            valueColor: tokenColor,
            quoteColor: tokenColor,
            colonColor: tokenColor,
            trailingComma: true,
            trailingCommaColor: tokenColor,
          }),
          setObjectKv({
            key: "connector",
            keyColor: color.destination,
            quoteColor: tokenColor,
            colonColor: tokenColor,
            bracketColor: tokenColor,
            trailingComma: true,
            trailingCommaColor: tokenColor,
            indent,
            children: [
              setObjectKv({
                key: "connector",
                keyColor: color.destination,
                quoteColor: tokenColor,
                colonColor: tokenColor,
                bracketColor: tokenColor,
                trailingComma: true,
                trailingCommaColor: tokenColor,
                indent,
                children: [],
              }),
            ],
          }),
        ],
      });
      break;
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-row rounded-tl-[3px] rounded-tr-[3px] bg-instillGrey05 p-2">
        <div className="flex flex-row gap-x-[5px]">
          <div className="my-auto h-2.5 w-2.5 rounded-full bg-instillRed50" />
          <div className="my-auto h-2.5 w-2.5 rounded-full bg-instillYellow50" />
          <div className="my-auto h-2.5 w-2.5 rounded-full bg-instillGreen50" />
        </div>
        <div className="flex flex-1">
          <div className="mx-auto text-sm font-normal text-instillGrey70">{`${currectResource}.json`}</div>
        </div>
      </div>
      <div className="flex flex-1 rounded-br-[3px] rounded-bl-[3px] bg-instillGrey90 p-10">
        {code}
      </div>
    </div>
  );
};

export default Terminal;
