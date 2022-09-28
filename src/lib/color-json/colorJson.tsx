import cn from "clsx";

export type SetColorJson = {
  bracketColor: string;
  indent: string;
  children?: any[];
  position?: string;
};

export const setColorJson = ({
  bracketColor,
  indent,
  children,
  position,
}: SetColorJson) => {
  return (
    <div className={cn("flex flex-col", position)}>
      <div className={bracketColor}>{`{`}</div>
      <div className={cn("flex flex-col", indent)}>{children}</div>
      <div className={bracketColor}>{`}`}</div>
    </div>
  );
};

export type SetStringValueProps = {
  value: string;
  valueColor: string;
  quoteColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
  indent?: string;
};

export const setStringValue = ({
  value,
  valueColor,
  quoteColor,
  trailingComma,
  trailingCommaColor,
  indent,
}: SetStringValueProps) => {
  return (
    <pre className={indent}>
      <span className={quoteColor}>{`"`}</span>
      <span className={valueColor}>{`${value}`}</span>
      <span className={quoteColor}>{`"`}</span>
      {trailingComma ? (
        <span className={trailingCommaColor}>{`, `}</span>
      ) : null}
    </pre>
  );
};

export type SetNumberValueProps = {
  value: number;
  valueColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
  indent?: string;
};

export const setNumberValue = ({
  value,
  valueColor,
  trailingComma,
  trailingCommaColor,
  indent,
}: SetNumberValueProps) => {
  return (
    <>
      <span className={cn(valueColor, indent)}>{`${value}`}</span>
      {trailingComma ? (
        <span className={trailingCommaColor}>{`, `}</span>
      ) : null}
    </>
  );
};

export type SetStringKvProps = {
  key: string;
  keyColor: string;
  value: string;
  valueColor: string;
  quoteColor: string;
  colonColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
};

export const setStringKv = ({
  key,
  keyColor,
  value,
  valueColor,
  quoteColor,
  colonColor,
  trailingComma,
  trailingCommaColor,
}: SetStringKvProps) => {
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

export type SetNumberKvProps = {
  key: string;
  keyColor: string;
  value: number;
  valueColor: string;
  quoteColor: string;
  colonColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
};

export const setNumberKv = ({
  key,
  keyColor,
  value,
  valueColor,
  quoteColor,
  colonColor,
  trailingComma,
  trailingCommaColor,
}: SetNumberKvProps) => {
  return (
    <pre>
      <span className={quoteColor}>{`"`}</span>
      <span className={keyColor}>{key}</span>
      <span className={quoteColor}>{`"`}</span>
      <span className={colonColor}>{`: `}</span>
      <span className={valueColor}>{value}</span>
      {trailingComma ? (
        <span className={trailingCommaColor}>{`, `}</span>
      ) : null}
    </pre>
  );
};

export type SetObjectKvProps = {
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

export const setObjectKv = ({
  key,
  keyColor,
  quoteColor,
  colonColor,
  bracketColor,
  trailingComma,
  trailingCommaColor,
  indent,
  children,
}: SetObjectKvProps) => {
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

export type SetArrayKvProps = {
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

export const setArrayKv = ({
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
}: SetArrayKvProps) => {
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
