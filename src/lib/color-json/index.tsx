import cn from "clsx";

export type GetJson = {
  bracketColor: string;
  indent: string;
  children?: any[];
};

export const getColorJson = ({ bracketColor, indent, children }: GetJson) => {
  return (
    <div className="flex flex-col">
      <div className={bracketColor}>{`{`}</div>
      <div className={cn("flex flex-col", indent)}>{children}</div>
      <div className={bracketColor}>{`}`}</div>
    </div>
  );
};

export type GetString = {
  value: string;
  valueColor: string;
  quoteColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
};

export const getString = ({
  value,
  valueColor,
  quoteColor,
  trailingComma,
  trailingCommaColor,
}: GetString) => {
  return (
    <pre>
      <span className={quoteColor}>{`"`}</span>
      <span className={valueColor}>{`${value}`}</span>
      <span className={quoteColor}>{`"`}</span>
      {trailingComma ? (
        <span className={trailingCommaColor}>{`, `}</span>
      ) : null}
    </pre>
  );
};

export type GetNumber = {
  value: number;
  valueColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
};

export const getNumber = ({
  value,
  valueColor,
  trailingComma,
  trailingCommaColor,
}: GetNumber) => {
  return (
    <>
      <span className={valueColor}>{`${value}`}</span>
      {trailingComma ? (
        <span className={trailingCommaColor}>{`, `}</span>
      ) : null}
    </>
  );
};

export type GetStringProp = {
  key: string;
  keyColor: string;
  value: string;
  valueColor: string;
  quoteColor: string;
  colonColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
};

export const getStringProp = ({
  key,
  keyColor,
  value,
  valueColor,
  quoteColor,
  colonColor,
  trailingComma,
  trailingCommaColor,
}: GetStringProp) => {
  return (
    <pre>
      <span className={quoteColor}>{`"`}</span>
      <span className={keyColor}>{key}</span>
      <span className={quoteColor}>{`"`}</span>
      <span className={colonColor}>{`: `}</span>
      <span className={quoteColor}>{`"`}</span>
      <span className={valueColor}>{value}</span>
      <span className={quoteColor}>{`"`}</span>
      {trailingComma ? (
        <span className={trailingCommaColor}>{`, `}</span>
      ) : null}
    </pre>
  );
};

export type GetObjectProp = {
  key: string;
  keyColor: string;
  quoteColor: string;
  colonColor: string;
  bracketColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
  indent: string;
  children: any[];
};

export const getObjectProp = ({
  key,
  keyColor,
  quoteColor,
  colonColor,
  bracketColor,
  trailingComma,
  trailingCommaColor,
  indent,
  children,
}: GetObjectProp) => {
  return (
    <pre>
      <span className={quoteColor}>{`"`}</span>
      <span className={keyColor}>{key}</span>
      <span className={quoteColor}>{`"`}</span>
      <span className={colonColor}>{`: `}</span>
      <span className={bracketColor}>{`{`}</span>
      {children.length > 0 ? (
        <div className={cn("flex flex-col", indent)}>{children}</div>
      ) : null}
      <span className={bracketColor}>{`}`}</span>
      {trailingComma ? (
        <span className={trailingCommaColor}>{`, `}</span>
      ) : null}
    </pre>
  );
};

export type GetArrayProp = {
  key: string;
  keyColor: string;
  quoteColor: string;
  colonColor: string;
  bracketColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
  indent: string;
  children: any;
  breakLine: boolean;
};

export const getArrayProp = ({
  key,
  keyColor,
  quoteColor,
  colonColor,
  bracketColor,
  trailingComma,
  trailingCommaColor,
  indent,
  children,
  breakLine,
}: GetArrayProp) => {
  return (
    <pre>
      <span className={quoteColor}>{`"`}</span>
      <span className={keyColor}>{key}</span>
      <span className={quoteColor}>{`"`}</span>
      <span className={colonColor}>{`: `}</span>
      <span className={bracketColor}>{`[ `}</span>
      {children.length > 0 ? (
        breakLine ? (
          <div className={cn("flex flex-col", indent)}>{children}</div>
        ) : (
          children
        )
      ) : null}
      <span className={bracketColor}>{breakLine ? `]` : ` ]`}</span>
      {trailingComma ? (
        <span className={trailingCommaColor}>{`, `}</span>
      ) : null}
    </pre>
  );
};
