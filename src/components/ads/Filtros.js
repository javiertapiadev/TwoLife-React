import React, {useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
require('dotenv').config();

export function FiltroGeneros(props) {
  return (
    <FormGroup>
      <FormControlLabel label="Sala de juegos y plataformas" control={<Checkbox/>} onChange={props.handlerGenero} value="Sala de juegos y plataformas"/>
      <FormControlLabel label="Deporte" control={<Checkbox/>} onChange={props.handlerGenero} value="Deporte"/>
      <FormControlLabel label="Simulación" control={<Checkbox/>} onChange={props.handlerGenero} value="Simulación"/>
      <FormControlLabel label="Juegos de rompecabezas y mentales" control={<Checkbox/>} onChange={props.handlerGenero} value="Juegos de rompecabezas y mentales"/>
      <FormControlLabel label="Disparos" control={<Checkbox/>} onChange={props.handlerGenero} value="Disparos"/>
      <FormControlLabel label="Carreras" control={<Checkbox/>} onChange={props.handlerGenero} value="Carreras"/>
      <FormControlLabel label="General" control={<Checkbox/>} onChange={props.handlerGenero} value="General"/>
      <FormControlLabel label="Educativo" control={<Checkbox/>} onChange={props.handlerGenero} value="Educativo"/>
      <FormControlLabel label="Acción y aventura" control={<Checkbox/>} onChange={props.handlerGenero} value="Acción y aventura"/>
      <FormControlLabel label="Terror" control={<Checkbox/>} onChange={props.handlerGenero} value="Terror"/>
      <div>
          {/* <div className="checkbox">
          <h1>{props.data.Plataforms}
          </h1>
          </div> */}
      </div>

    </FormGroup>
  );
}

export function FiltroPlataformas(props) {
    return (
      <FormGroup>
            <FormControlLabel label="X-box 360" control={<Checkbox/>} onChange={props.handlerPlatform} value="X-box 360"/>
            <FormControlLabel label="Wii control" control={<Checkbox/>} onChange={props.handlerPlatform} value="Wii control"/>
            <FormControlLabel label="Playstation 2" control={<Checkbox/>} onChange={props.handlerPlatform} value="Playstation 2"/>
            <FormControlLabel label="Nintendo DS" control={<Checkbox/>} onChange={props.handlerPlatform} value="Nintendo DS"/>
            <FormControlLabel label="Playstation 3" control={<Checkbox/>} onChange={props.handlerPlatform} value="Playstation 3"/>
            <FormControlLabel label="Xbox One" control={<Checkbox/>} onChange={props.handlerPlatform} value="Xbox One"/>
            <FormControlLabel label="Playstation 4" control={<Checkbox/>} onChange={props.handlerPlatform} value="Playstation 4" />
            <FormControlLabel label="Xbox" control={<Checkbox/>} onChange={props.handlerPlatform} value="Xbox" />
            <FormControlLabel label="Playstation" control={<Checkbox/>} onChange={props.handlerPlatform} value="Playstation" />
            <FormControlLabel label="PSP" control={<Checkbox/>} onChange={props.handlerPlatform} value="PSP" />
            <FormControlLabel label="Nintendo 3DS" control={<Checkbox/>} onChange={props.handlerPlatform} value="Nintendo 3DS" />
            <FormControlLabel label="Wii U" control={<Checkbox/>} onChange={props.handlerPlatform} value="Wii U" />
            <FormControlLabel label="Nintendo Switch" control={<Checkbox/>} onChange={props.handlerPlatform} value="Nintendo Switch" />
            <FormControlLabel label="Dreamcast" control={<Checkbox/>} onChange={props.handlerPlatform} value="Dreamcast" />
            <FormControlLabel label="PS Vita" control={<Checkbox/>} onChange={props.handlerPlatform} value="PS Vita" />
            <FormControlLabel label="Nintendo Gamecube" control={<Checkbox/>} onChange={props.handlerPlatform} value="Nintendo Gamecube"/>
        </FormGroup>
    );
  }

function valuetext(value) {
    return `${value}°$`;
  }
  
export function RangeSlider() {
    const [value, setValue] = useState([0,100]);
  
    const handleChange = (e, newValue) => {
      setValue(newValue);
      console.log(e.target.value)
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

export function RowRadioButtonsGroup(props) {
  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="todos" control={<Radio onClick={props.handlerGameState}/>} label="Todos" />
        <FormControlLabel value="nuevo" control={<Radio onClick={props.handlerGameState}/>} label="Nuevo" />
        <FormControlLabel value="usado" control={<Radio onClick={props.handlerGameState}/>} label="Usado" />
      </RadioGroup>
    </FormControl>
  );
}