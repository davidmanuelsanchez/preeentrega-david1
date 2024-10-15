import PropTypes from "prop-types";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = ({ itemCount }) => {
  return (
    <IconButton color="inherit">
      <Badge badgeContent={itemCount} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

// Validación de las props
CartWidget.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default CartWidget;
