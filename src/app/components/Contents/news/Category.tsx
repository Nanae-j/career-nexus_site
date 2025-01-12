import { CategoryType } from "@/app/_libs/microcms";

interface Props {
  category: CategoryType;
}

const Category = ({ category }: Props) => {
  return (
    <span className="rounded-md bg-main-green p-3 font-kintoSans font-kintoSans-medium text-main-black">
      {category.name}
    </span>
  );
};

export default Category;
