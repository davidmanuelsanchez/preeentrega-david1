import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#ff6f61" }}>
      <Toolbar>
        <Typography
          variant="h4"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#fff" }}
        >
          David Pastelería
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#ff6f61",
              fontWeight: "bold",
            }}
          >
            Tortas Casamiento
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#ff6f61",
              fontWeight: "bold",
            }}
          >
            Tortas Cumpleaños
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#ff6f61",
              fontWeight: "bold",
            }}
          >
            Tortas de estación
          </Button>
        </Box>
        <CartWidget itemCount={5} />{" "}
        {/* Cambia 5 por el conteo real de items */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
