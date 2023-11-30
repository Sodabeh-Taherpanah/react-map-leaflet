import { FC } from "react";
import { DirectoryCategory } from "../../utils/common.type";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { updateProduct } from "../../store/user/user.reducer";
import { useDispatch } from "react-redux";

type DirectoryItemProps = {
  categoryItem: DirectoryCategory;
};

const Item: FC<DirectoryItemProps> = ({ categoryItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          <Button
            variant="secondary"
            onClick={() => {
              dispatch(
                updateProduct({
                  title: title,
                  price: price,
                  image: images[0],
                })
              );
              navigate("/modal");
            }}
          >
            Buy
          </Button>
          {/* <Link className="btn btn-outline-dark" to="/modal">
            Buy
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Item;
