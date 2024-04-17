import cn from "clsx";

export type ArticleImagePlaceholderProps = {
  width: string;
  height: string;
  color: string;
};

export const ArticleImagePlaceholder = ({
  width,
  height,
  color,
}: ArticleImagePlaceholderProps) => {
  return <div className={cn("block", width, height, color)} />;
};
