import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import UserNavbar from "../UserNavbar/UserNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsFromCartOfPerson } from "../../redux/userActions/UserActions";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItemsofPerson } = useSelector((state) => state.UserReducer.cart);

  useEffect(() => {
    dispatch(fetchItemsFromCartOfPerson());
  }, []);

  return (
    <>
      <UserNavbar />
      <List>
        {cartItemsofPerson.length>0 ? cartItemsofPerson.map((item) => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={item.product_name}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                     Brand
                    </Typography>
                    {/* {" — I'll be in your neighborhood doing errands this…"} */}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        )):"No items added"
        }
      </List>
    </>
  );
};

export default Cart;
