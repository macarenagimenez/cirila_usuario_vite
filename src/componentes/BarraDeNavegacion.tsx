import { Link } from "react-router-dom";
import * as React from "react";
import { useContext } from "react";
import { CarritoContext } from "contexts/CarritoContexto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./BarraDeNavegacion.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

function BarraDeNavegacion() {
  let { carrito } = useContext(CarritoContext);

  function contadorDeProductos() {
    let contador = 0;
    for (let i = 0; i < carrito.length; i++) {
      contador += carrito[i].cantidad;
    }
    return contador;
  }
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Katibeh",
                fontSize: "32px",
                color: "#174642",
                textDecoration: "none",
              }}
            >
              <img src="imagenes/LogoCirila.png" style={{ maxWidth: "10%" }} />{" "}
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: "#F4CFC7" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {" "}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography fontFamily="Montserrat" textAlign="center">
                    {" "}
                    <Link to="/productos" className="estiloDeBarra">
                      Productos
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography fontFamily="Montserrat" textAlign="center">
                    {" "}
                    <Link to="/" className="estiloDeBarra">
                      Inicio
                    </Link>
                  </Typography>
                </MenuItem>{" "}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                flexGrow: 1,
                fontFamily: "Katibeh",
                fontSize: "32px",

                color: "#F4CFC7",
                textDecoration: "none",
              }}
            >
              <img src="imagenes/LogoCirila.png" style={{ maxWidth: "20%" }} />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "flex-end" },
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Montserrat",
                }}
              >
                <Link to="/" className="estiloDeBarra">
                  Inicio
                </Link>
              </Button>{" "}
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Montserrat",
                }}
              >
                <Link to="/productos" className="estiloDeBarra">
                  Productos
                </Link>
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Tu carrito acá 😙">
                <IconButton sx={{ p: 0 }}>
                  {" "}
                  <div className="carritoDeComprasBarraNavegacion">
                    <Link to="/carritoDeCompras" className="estiloDeBarra">
                      <FontAwesomeIcon icon={faCartShopping} />
                      <span className="cantidadDeProductosBarraNavegacion">
                        {contadorDeProductos()}
                      </span>
                    </Link>{" "}
                  </div>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>{" "}
    </>
  );
}

export default BarraDeNavegacion;
