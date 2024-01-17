import * as React from "react";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CategoriasService from "service/categoriasService";
import { Categorias } from "tipos/Categorias";
import { ClickAwayListener, Fade, MenuList, Popper, Paper, Typography, Box, Divider} from "@mui/material";


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

  const hover = {
    "&:hover": {
      border: "1px solid #efe181",
      color: '#e7a908',
      backgroundColor: '#e2e8eb'
    },
    "&" : {
      fontWeight : 600,
      padding: "5px 15px"
    }
  };

  const mostrarCategorias = () : Array<JSX.Element> => {
    let conjuntodeCategorias : Array<JSX.Element>  = [];
    for (let i = 0; i < categorias.length; i++) {
      conjuntodeCategorias.push(
        <>
          <Box sx={hover} onClick={(e)=>handleClose(e, categorias[i])} >
            {categorias[i].nombre}
          </Box>
          <Divider></Divider>
        </>
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
                  sx={{padding: "0 5px"}}
                  dense
                >
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
