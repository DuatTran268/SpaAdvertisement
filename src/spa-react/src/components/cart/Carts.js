import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Carts = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <>
        <h1 className="text-center mt-5 mb-5">Giỏ hàng của bạn không có gì</h1>
        <div className="text-center">
          <Link to={`/product`}>
            <Button className="btn btn-success mt-5 mb-5 text-center">
              Đi mua sản phẩm thôi
            </Button>
          </Link>
        </div>
      </>
    );

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5 className="text-danger py-3">
            Sản phẩm: ({totalUniqueItems}) Tổng sản phẩm: ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <>
                    <tr>
                      <td>Hình ảnh</td>
                      <td>Tên sản phẩm</td>
                      <td>Giá</td>
                      <td>Số lượng</td>
                      <td></td>
                    </tr>
                    <tr key={index}>
                      <td>
                        <img
                          src={item.image}
                          style={{ height: "6rem" }}
                          alt={item.name}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>Số lượng: ({item.quantity})</td>
                      <td>
                        <Button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -{" "}
                        </Button>
                        <Button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +{" "}
                        </Button>
                        <Button
                          onClick={() => removeItem(item.id)}
                          className="btn btn-danger ms-2"
                        >
                          Xoá
                        </Button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h3 className="text-success mt-2">Tổng tiền: {cartTotal} USD</h3>
        </div>
        <div className="col-auto">
          <Button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Xoá hết giỏ hàng
          </Button>
          <Button>Đặt ngay</Button>
        </div>
      </div>
    </section>
  );
};

export default Carts;
