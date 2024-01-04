import * as React from "react";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CategoriasService from "service/categoriasService";
import { Categorias } from "tipos/Categorias";
import { Box, ClickAwayListener, Fade, Grow, MenuList, Paper, Popper, Typography } from "@mui/material";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

export default function BasicMenu() {
  const [categorias, setCategorias] = useState<Categorias[]>([]);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const navigate = useNavigate(); 

  const categoriasService: CategoriasService = new CategoriasService();

  useEffect(() => {
    categoriasService.buscarCategorias().then((data) => {
      if (data) {
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

  const mostrarCategorias = () : Array<JSX.Element> => {
    let conjuntodeCategorias : Array<JSX.Element>  = [];
    for (let i = 0; i < categorias.length; i++) {
      conjuntodeCategorias.push(
        
          <MenuItem onClick={(e)=>handleClose(e, categorias[i])}>
            {categorias[i].nombre}
          </MenuItem>

      );
    }

    return conjuntodeCategorias;
  };

  const handleClose = (event: Event | React.SyntheticEvent, categoria?: Categorias) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    if (categoria) {
      navigate("/productos", { state: { categoria: categoria }});
    }

    setOpen(false);
  };
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <Typography fontFamily="Montserrat" textAlign="center">
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          sx={{
            textDecorationLine: "none",
            color: "#f4cfc7",
            display: "block",
            padding: "8px",
            marginTop: "7px",
          }}
        >
          Productos
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom"
          transition
          disablePortal

        >
            {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{height: "auto", display: "block"}}>
                <ClickAwayListener onClickAway={(e)=>handleClose(e, undefined)}>

                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                    {mostrarCategorias()}
                </MenuList>
                </ClickAwayListener>
                </Paper>
            </Fade>
            )}
        </Popper>
      </Typography>
    </div>
  );
}
