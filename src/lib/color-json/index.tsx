import cn from "clsx";

export type SetJson = {
  bracketColor: string;
  indent: string;
  children?: any[];
};

export const setColorJson = ({ bracketColor, indent, children }: SetJson) => {
  return (
    <div className="flex flex-col">
      <div className={bracketColor}>{`{`}</div>
      <div className={cn("flex flex-col", indent)}>{children}</div>
      <div className={bracketColor}>{`}`}</div>
    </div>
  );
};

export type SetString = {
  value: string;
  valueColor: string;
  quoteColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
};

export const setString = ({
  value,
  valueColor,
  quoteColor,
  trailingComma,
  trailingCommaColor,
}: SetString) => {
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

export type SetNumber = {
  value: number;
  valueColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
};

export const setNumber = ({
  value,
  valueColor,
  trailingComma,
  trailingCommaColor,
}: SetNumber) => {
  return (
    <>
      <span className={valueColor}>{`${value}`}</span>
      {trailingComma ? (
        <span className={trailingCommaColor}>{`, `}</span>
      ) : null}
    </>
  );
};

export type SetStringProp = {
  key: string;
  keyColor: string;
  value: string;
  valueColor: string;
  quoteColor: string;
  colonColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
};

export const setStringProp = ({
  key,
  keyColor,
  value,
  valueColor,
  quoteColor,
  colonColor,
  trailingComma,
  trailingCommaColor,
}: SetStringProp) => {
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

export type SetObjectProp = {
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

export const setObjectProp = ({
  key,
  keyColor,
  quoteColor,
  colonColor,
  bracketColor,
  trailingComma,
  trailingCommaColor,
  indent,
  children,
}: SetObjectProp) => {
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

export type SetArrayProp = {
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

export const setArrayProp = ({
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
}: SetArrayProp) => {
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
