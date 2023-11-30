import { FC } from "react";
import { DirectoryCategory } from "../../utils/common.type";
import { Link } from "react-router-dom";

type DirectoryItemProps = {
  categoryItem: DirectoryCategory;
};

const Item: FC<DirectoryItemProps> = ({ categoryItem }) => {
  const { images, title, category, price } = categoryItem;

  return (
    <div className="col">
      <div className="card shadow-sm pb-3 pt-2 px-3">
        <img
          className="card-img-top bg-dark cover mt-2"
          height="300"
          width="100"
          alt=""
          src={images[0] as string}
        />

        <label className="card-title text-center">{title}</label>
        <label className="card-subtitle text-center">{price}</label>

        <div className="d-grid gap-2 mt-2">
          <Link className="btn btn-outline-dark" to="/modal">
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
