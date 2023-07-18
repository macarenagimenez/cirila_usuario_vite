import { Box, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Usuario from "componentes/Usuario";
import "componentes/cargaDeDatos.css";
import { Grid } from "@mui/material";

export default function SolicitudDeDatosUsuario() {
  let formasDepago = ["Transferencia", "tarjeta", "efectivo", "conamor"];
  return (
    <div className="contenedorCargaDeDatos">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {" "}
          <div className="cargaDeDatosUsuario">
            <Usuario />{" "}
          </div>
        </Grid>
        <div className="detallesCompra">
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-select-currency"
                disabled
                select
                label="Formas de pago"
                defaultValue="Transferencia"
              >
                {formasDepago.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Grid>{" "}
        </div>
      </Grid>
    </div>
  );
}
