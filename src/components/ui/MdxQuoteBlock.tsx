export type MdxQuoteBlockProps = {
  content: string;
  source: string;
};

export const MdxQuoteBlock = ({ content, source }: MdxQuoteBlockProps) => {
  return (
    <div className="border-l-4 border-instillGrey90 px-4 py-1 dark:border-instillGrey50">
      <div className="font-sans text-lg">{content}</div>
      <div className="text-right font-sans text-lg">
        <span>&mdash; From </span>
        <span className="font-sans text-lg underline underline-offset-2">
          {source}
        </span>
      </div>
    </div>
  );
};
