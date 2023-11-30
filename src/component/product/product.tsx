import { FC } from "react";

import "./directory.styles.css";

import Item from "../productItem/Item";

import { DirectoryCategory } from "../../utils/common.type";

type directoryProp = {
  product: DirectoryCategory[];
};
const Product: FC<directoryProp> = ({ product }) => {
  return (
    <div className="directory-container pb-25 px-lg-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
        {product.map((category: any) => (
          <Item key={category?.id} categoryItem={category} />
        ))}
      </div>
    </div>
  );
};

export default Product;
