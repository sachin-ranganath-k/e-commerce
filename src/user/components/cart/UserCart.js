import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import UserNavbar from "../UserNavbar/UserNavbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart } from "../../redux/userActions/UserActions";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItemsofPerson } = useSelector((state) => state.UserReducer.cart);

  const deleteItem = (cartId) => {
   dispatch(deleteItemFromCart(cartId))
  };

  return (
    <>
      <UserNavbar />
      <List>
        {cartItemsofPerson.length > 0
          ? cartItemsofPerson.map((item, index) => (
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <ListItem alignItems="flex-start" key={index}>
                      <ListItemAvatar>
                        <Avatar
                          alt={item?.product_name}
                          src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item?.product_name}
                        secondary={
                          <>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {item?.brand_name}
                            </Typography>

                            <p> {item?.category_name}</p>
                          </>
                        }
                      />
                    </ListItem>
                  </div>
                  <div className="col-md-3">
                    <div style={{ marginTop: "1%" }}>
                      Quantity
                      <input
                        type="number"
                        className="form-control"
                        style={{ width: "20%" }}
                        min="1"
                        defaultValue="1"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div style={{ marginTop: "5%" }}>
                      <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={()=>deleteItem(item?.cart_id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>

                <Divider variant="inset" component="li" />
              </div>
            ))
          : <h2 style={{textAlign:"center", marginTop:"5%"}}>Cart is empty..!</h2>}
      </List>
    </>
  );
};

export default Cart;
