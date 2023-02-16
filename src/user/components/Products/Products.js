import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  add_ToCart,
} from "../../redux/userActions/UserActions";

import UserNavbar from "../UserNavbar/UserNavbar";
import { fetchBrands } from "../../../admin/redux/AdminActions/AdminActions";
import Skeleton from "../../../utils/Skeleton";

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.UserReducer.productsList);
  const { addToCartStatus, isAddToCartLoading } = useSelector(
    (state) => state.UserReducer.cart
  );
  const isLoading = useSelector((state) => state.UserReducer.cart.isLoading);

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchBrands());
  }, []);

  const addToCart = (productId, userId, qty) => {
    const cartData = {
      user_id: userId,
      product_id: productId,
      quantity: qty,
    };
    dispatch(add_ToCart(JSON.stringify(cartData)));
  };

  return (
    <div>
      <UserNavbar />

      <h2 style={{ textAlign: "center" }}>Available Products</h2>
      <br />
      <div className="container col-md-12">
        <div className="row">
          {isLoading && <Skeleton />}
          {productsList.map((product) => (
            <div className="col-md-3">
              <div className="card" style={{ maxWidth: "100%" }}>
                <img
                  className="card-img-top"
                  src={product?.image_name}
                  alt="Card image"
                  height="200px"
                  width="50px"
                />
                <div className="card-body">
                  <h5 className="card-title">{product?.product_name}</h5>
                  <br />
                  {addToCartStatus ? (
                    <button className="btn btn-warning" disabled>
                      Added to cart
                    </button>
                  ) : isAddToCartLoading ? (
                    <button className="btn btn-success" disabled>
                      Adding to cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        addToCart(product.product_id, "lL8rb1c7", "10")
                      }
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
