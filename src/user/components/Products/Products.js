import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  add_ToCart,
} from "../../redux/userActions/UserActions";

import UserNavbar from "../UserNavbar/UserNavbar";
import { fetchBrands } from "../../../admin/redux/AdminActions/AdminActions";
import Skeleton from "../../../utils/Skeleton";
import AlertMessage from "../../../admin/Alert/Alert";

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.UserReducer.productsList);
  const {isAddToCartLoading, cartItemsofPerson } =useSelector((state) => state.UserReducer.cart);
  const isLoading = useSelector((state) => state.UserReducer.cart.isLoading);


  const user_id=sessionStorage.getItem("userId");

  useEffect(() => {
    dispatch(fetchAllProducts());
    // dispatch(fetchBrands());
  }, [dispatch]);

  const isAlreadyInCart = (product) => {
    return (
      cartItemsofPerson.length &&
      cartItemsofPerson
        .map((data) => data?.product_id)
        .includes(product?.product_id)
    );
  };

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
      <div className="container col-md-12">
        <h2 style={{ textAlign: "center" }}>Available Products</h2>
        {isAddToCartLoading ? (
          AlertMessage("info", "Adding to cart. Please Wait..!")
        ) : (
          <>
            <br />
            <div className="row">
              {isLoading && <Skeleton />}
              {productsList.map((product, index) => (
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
                      <>
                        {isAlreadyInCart(product) ? (
                          <button className="btn btn-warning" disabled>
                            Added to cart
                          </button>
                        ) : (
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              addToCart(product.product_id, user_id, "1")
                            }
                          >
                            Add to cart
                          </button>
                        )}
                      </>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
