import React, { Component, useState } from 'react';
import { Container } from "@mui/material";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

function FiltroGeneros() {
  return (
    <FormGroup>
      <FormControlLabel label="Sala de juegos y plataformas" control={<Checkbox/>}/>
      <FormControlLabel label="Deporte" control={<Checkbox/>}/>
      <FormControlLabel label="Simulación" control={<Checkbox/>}/>
      <FormControlLabel label="Juegos de rompecabezas y mentales" control={<Checkbox/>}/>
      <FormControlLabel label="Disparos" control={<Checkbox/>}/>
      <FormControlLabel label="Carreras" control={<Checkbox/>}/>
      <FormControlLabel label="General" control={<Checkbox/>}/>
      <FormControlLabel label="Educativo" control={<Checkbox/>}/>
      <FormControlLabel label="Acción y aventura" control={<Checkbox/>}/>
      <FormControlLabel label="Terror" control={<Checkbox/>}/>
      <div>
          {/* <div className="checkbox">
          <h1>{props.data.Plataforms}
          </h1>
          </div> */}
      </div>

    </FormGroup>
  );
}

function FiltroPlataformas() {
    return (
      <FormGroup>
            <FormControlLabel label="Xbox 360" control={<Checkbox/>}/>
            <FormControlLabel label="Wii control"control={<Checkbox/>}/>
            <FormControlLabel label="Playstation 2" control={<Checkbox/>}/>
            <FormControlLabel label="Nintendo DS" control={<Checkbox/>}/>
            <FormControlLabel label="Playstation 3" control={<Checkbox/>}/>
            <FormControlLabel label="Xbox One" control={<Checkbox/>}/>
            <FormControlLabel label="Playstation 4" control={<Checkbox/>}/>
            <FormControlLabel label="Xbox" control={<Checkbox/>}/>
            <FormControlLabel label="Playstation" control={<Checkbox/>}/>
            <FormControlLabel label="PSP" control={<Checkbox/>}/>
            <FormControlLabel label="Nintendo 3DS" control={<Checkbox/>}/>
            <FormControlLabel label="Wii U" control={<Checkbox/>}/>
            <FormControlLabel label="Nintendo Switch" control={<Checkbox/>}/>
            <FormControlLabel label="Dreamcast" control={<Checkbox/>}/>
            <FormControlLabel label="PS Vita" control={<Checkbox/>}/>
            <FormControlLabel label="Nintendo Gamecube" control={<Checkbox/>}/>
        </FormGroup>
    );
  }

function valuetext(value) {
    return `${value}°$`;
  }
  
    function RangeSlider() {
    const [value, setValue] = useState([0,80]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: 200 }}>
        <Slider
          getAriaLabel={() => 'Rango de Precio'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
    );
  }

function RowRadioButtonsGroup() {
  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="usado" control={<Radio />} label="Nuevo" />
        <FormControlLabel value="nuevo" control={<Radio />} label="Usado" />
      </RadioGroup>
    </FormControl>
  );
}

class Filtros extends Component {
    render() {
        return (
            <Container>
                <h3>Condición</h3>
                <RowRadioButtonsGroup/>
                <br></br>
                <br></br>
                <h3>Rango de precio</h3>
                <RangeSlider/>
                <br></br>
                <h3>Género</h3>
                <FiltroGeneros/>
                <br></br>
                <h3>Plataformas</h3>
                <FiltroPlataformas/>
            </Container>
        );
    }
}

export default Filtros;