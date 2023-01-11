import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/userActions/UserActions";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import UserNavbar from "../UserNavbar/UserNavbar";

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.UserReducer.productsList);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const addToCart = (productId, userId) => {
    let a = `${productId} ${userId}`;
    alert(a + " " + "Yet to develop");
  };

  return (
    <div>
      <UserNavbar />
      <h2 style={{ textAlign: "center" }}>Available Products</h2>
      <br />
      <div className="container col-md-12">
        <div className="row">
          {productsList.map((product) => (
            <div className="col-md-3">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={product.image_name}
                  title={product.image_name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.product_name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    endIcon={<AddShoppingCartIcon />}
                    onClick={() => addToCart(product.product_id, "USER")}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
