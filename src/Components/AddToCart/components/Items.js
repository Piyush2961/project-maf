import { Card } from "antd";
import "antd/dist/antd.css";
import { PlusOutlined, DeleteOutlined, MinusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import {
  deccrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../../actions/getGlobalData.js";

const { Meta } = Card;

const Items = ({ _id, brand, type, price, img, quantity }) => {
  const dispatch = useDispatch();

  console.log("proDucr Id", _id);
  return (
    <>
      <Card
        className="card"
        style={{ width: "30%" }}
        cover={
          <img alt="example" src={img} style={{ height: 200, width: 200 }} />
        }
        actions={[
          <PlusOutlined
            onClick={() => {
              dispatch(incrementQuantity(_id));
              // increment(_id);
            }}
            key="setting"
          />,
          <p>{quantity}</p>,
          <MinusOutlined
            onClick={() => {
              dispatch(deccrementQuantity(_id));
            }}
            key="ellipsis"
          />,
          <DeleteOutlined
            onClick={() => {
              dispatch(removeItem(_id));
            }}
          />,
        ]}
      >
        <Meta title={brand} description={type} />
        <Meta description={`Price: ${price} Rs `} />
      </Card>
    </>

    /* <div className="items-info">
        <div className="product-img">
          <img src={img} alt="item" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <RemoveIcon
            className="fas fa-minus"
            style={{ fontSize: "20px" }}
            onClick={() => decrement(id)}
          />
          <input type="text" placeholder={quantity} />
          <AddIcon
            className="fas fa-plus"
            style={{ fontSize: "20px" }}
            onClick={() => increment(id)}
          />
        </div>
        <div className="price">
          <h3>{price}rs</h3>
        </div>
        <div className="remove-item">
          <DeleteIcon
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}
            style={{ fontSize: "20px" }}
          />
        </div>
      </div> */
    /* <hr /> */
  );
};

export default Items;
