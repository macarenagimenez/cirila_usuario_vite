import * as React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CategoriasService from "service/categoriasService";
import { Categorias } from "tipos/Categorias";
import { Typography } from "@mui/material";

export default function BasicMenu() {
  const [categorias, setCategorias] = useState<Categorias[]>([]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const categoriasService: CategoriasService = new CategoriasService();

  useEffect(() => {
    categoriasService.buscarCategorias().then((data) => {
      if (data) {
        console.log(data);
        let todos: Categorias = {
          id: "",
          nombre: "Todos los productos",
          subcategorias: [],
        };
        data.push(todos);
        setCategorias(data);
      }
    });
  }, []);

  let mostrarCategorias = () => {
    let conjuntodeCategorias = [];
    for (let i = 0; i < categorias.length; i++) {
      conjuntodeCategorias.push(
        <Link to="/productos">
          <MenuItem onClick={handleClose}>{categorias[i].nombre}</MenuItem>{" "}
        </Link>
      );
    }

    return conjuntodeCategorias;
  };

  return (
    <div>
      <Typography fontFamily="Montserrat" textAlign="center">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Productos
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {mostrarCategorias()}
        </Menu>
      </Typography>
    </div>
  );
}
