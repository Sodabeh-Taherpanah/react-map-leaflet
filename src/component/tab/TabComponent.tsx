import { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Product from "../product/product";
import ProductsJson from "../../utils/products.json";
import MapWrapper from "../map/location-button";

function TabComponent() {
  const [activityOptions, setactivityOptions] = useState<string[]>([]);
  const [product, setProduct] = useState(ProductsJson);
  const [key, setKey] = useState("products");
  useEffect(() => {
    let activityOptions_: string[] = [];
    if (activityOptions.length === 0) {
      activityOptions_.push("All");
      ProductsJson.forEach((e) => {
        if (!activityOptions_.find((item) => item === e.category.name)) {
          activityOptions_.push(e.category.name);
        }
      });
      setactivityOptions(activityOptions_);
    }
  }, product);

  const Item = ({ key, category }: { category: any; key: string }) => {
    function onSelfClick() {
      setProduct(
        ProductsJson.filter(
          (e) => e.category.name === category || category === "All"
        )
      );
    }

    return (
      <li
        className="list-group-item"
        // className={active ? "active-stock-item" : "stock-item" }
        onClick={onSelfClick}
      >
        {category}
      </li>
    );
  };
  return (
    <div>
      <Tabs
        id="controlled-tab-example "
        activeKey={key}
        onSelect={(k: any) => setKey(k)}
        className="mb-3 pt-4 "
      >
        <Tab eventKey="products" title="Products">
          <div className=" bg-white">
            <div className="row w-full">
              <div className="col-2 px-4">
                <ul className="list-group list-group-flush">
                  {activityOptions.map((category: any, index: number) => (
                    <Item key={index.toString()} category={category} />
                  ))}
                </ul>
              </div>
              <div className="col text-black">
                <Product product={product} />
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="user" title="User">
          <div className=" bg-white">
            <h3 className="text-black">status: {"lastMessage" || "-"}</h3>
            {/* <button onClick={() => {}}>Say hello!</button> */}
            <main>
              <MapWrapper />
            </main>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabComponent;
