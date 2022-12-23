import cn from "clsx";
import { Dispatch, SetStateAction } from "react";
import { BlogCategory } from "../../../../content.config";

export type CategoryButtonProps = {
  category: BlogCategory;
  selectedCategory: BlogCategory;
  setSelectedCategory: Dispatch<SetStateAction<BlogCategory>>;
};

export const CategoryButton = ({
  category,
  selectedCategory,
  setSelectedCategory,
}: CategoryButtonProps) => {
  return (
    <button
      onClick={() => setSelectedCategory(category)}
      className="my-auto flex"
    >
      <p
        className={cn(
          "my-auto flex border-b border-instillGrey70 text-lg text-instillGrey90 transition-all duration-300 hover:border-opacity-100",
          selectedCategory === category
            ? "border-opacity-100"
            : "border-opacity-0"
        )}
      >
        {category}
      </p>
    </button>
  );
};
