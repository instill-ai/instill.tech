import cn from "clsx";

export type SetColorJson = {
  id: string;
  bracketColor: string;
  indent: string;
  children?: any[];
  position?: string;
  trailingComma: boolean;
  trailingCommaColor?: string;
};

export const setColorJson = ({
  id,
  bracketColor,
  indent,
  children,
  position,
  trailingComma,
  trailingCommaColor,
}: SetColorJson) => {
  return (
    <div key={id} className={cn("flex w-full flex-col", position, indent)}>
      <div className={bracketColor}>{`{`}</div>
      <div className={cn("flex w-full flex-col")}>{children}</div>
      <div>
        <span className={bracketColor}>{`}`}</span>
        {trailingComma ? (
          <span className={trailingCommaColor}>{`, `}</span>
        ) : null}
      </div>
    </div>
  );
};

export type SetStringValueProps = {
  id: string;
  value: string;
  valueColor: string;
  quoteColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
  indent?: string;
  wrap: boolean;
};

export const setStringValue = ({
  id,
  value,
  valueColor,
  quoteColor,
  trailingComma,
  trailingCommaColor,
  indent,
  wrap,
}: SetStringValueProps) => {
  return (
    <pre
      key={id}
      className={cn(wrap ? "whitespace-pre-line break-all" : "", indent)}
    >
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
  id: string;
  value: number;
  valueColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
  indent?: string;
};

export const setNumberValue = ({
  id,
  value,
  valueColor,
  trailingComma,
  trailingCommaColor,
  indent,
}: SetNumberValueProps) => {
  return (
    <div key={id}>
      <span className={cn(valueColor, indent)}>{`${value}`}</span>
      {trailingComma ? (
        <span className={trailingCommaColor}>{`, `}</span>
      ) : null}
    </div>
  );
};

export type SetStringKvProps = {
  id: string;
  key: string;
  indent: string;
  keyColor: string;
  hyperlink?: string;
  value: string;
  valueColor: string;
  quoteColor: string;
  colonColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
  wrap: boolean;
};

export const setStringKv = ({
  id,
  key,
  keyColor,
  hyperlink,
  value,
  indent,
  valueColor,
  quoteColor,
  colonColor,
  trailingComma,
  trailingCommaColor,
  wrap,
}: SetStringKvProps) => {
  return (
    <pre
      key={id}
      className={cn(wrap ? "whitespace-pre-line break-all" : "", indent)}
    >
      <span className={quoteColor}>{`"`}</span>
      <span className={keyColor}>{key}</span>
      <span className={quoteColor}>{`"`}</span>
      <span className={colonColor}>{`: `}</span>
      <span className={quoteColor}>{`"`}</span>
      {hyperlink ? (
        <a href={hyperlink}>
          <span className={cn("underline", valueColor)}>{value}</span>
        </a>
      ) : (
        <span className={valueColor}>{value}</span>
      )}

      <span className={quoteColor}>{`"`}</span>
      {trailingComma ? (
        <span className={trailingCommaColor}>{`, `}</span>
      ) : null}
    </pre>
  );
};

export type SetNumberKvProps = {
  id: string;
  key: string;
  indent: string;
  keyColor: string;
  value: number;
  valueColor: string;
  quoteColor: string;
  colonColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
  wrap: boolean;
};

export const setNumberKv = ({
  id,
  key,
  keyColor,
  indent,
  value,
  valueColor,
  quoteColor,
  colonColor,
  trailingComma,
  trailingCommaColor,
  wrap,
}: SetNumberKvProps) => {
  return (
    <pre
      key={id}
      className={cn(wrap ? "whitespace-pre-line break-all" : "", indent)}
    >
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
  id: string;
  key: string;
  keyColor: string;
  quoteColor: string;
  colonColor: string;
  bracketColor: string;
  trailingComma: boolean;
  trailingCommaColor: string;
  indent: string;
  children: any[];
  wrap: boolean;
};

export const setObjectKv = ({
  id,
  key,
  keyColor,
  quoteColor,
  colonColor,
  bracketColor,
  trailingComma,
  trailingCommaColor,
  indent,
  children,
  wrap,
}: SetObjectKvProps) => {
  return (
    <pre
      key={id}
      className={cn(wrap ? "whitespace-pre-line break-all" : "", indent)}
    >
      <span className={quoteColor}>{`"`}</span>
      <span className={keyColor}>{key}</span>
      <span className={quoteColor}>{`"`}</span>
      <span className={colonColor}>{`: `}</span>
      <span className={bracketColor}>{`{`}</span>
      {children.length > 0 ? (
        <div className="flex flex-col">{children}</div>
      ) : null}
      <span className={bracketColor}>{`}`}</span>
      {trailingComma ? (
        <span className={trailingCommaColor}>{`, `}</span>
      ) : null}
    </pre>
  );
};

export type SetArrayKvProps = {
  id: string;
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
  wrap: boolean;
};

export const setArrayKv = ({
  id,
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
  wrap,
}: SetArrayKvProps) => {
  return (
    <pre
      key={id}
      className={cn(wrap ? "whitespace-pre-line break-all" : "", indent)}
    >
      <span className={quoteColor}>{`"`}</span>
      <span className={keyColor}>{key}</span>
      <span className={quoteColor}>{`"`}</span>
      <span className={colonColor}>{`: `}</span>
      <span className={bracketColor}>{`[ `}</span>
      {children.length > 0 ? (
        breakLine ? (
          <div className="flex flex-col">{children}</div>
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
