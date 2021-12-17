import React, {useEffect, useState } from 'react';
import axios from 'axios'

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

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
    </FormGroup>
  );
}

export function FiltroPlataformas(props) {
  const [platformsList, setPlatformsList] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/platforms`)
        .then(response => setPlatformsList(response.data))
        .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    console.log(platformsList)
  }, [platformsList])

  const PlatformsCheckBoxes = () => {
    return (
      <>
        { platformsList.map(platform => (
          <FormControlLabel 
            label={platform.platform} 
            control={<Checkbox />}
            onChange={props.handlerPlatform}
            value={platform._id} />
        ))}
      </>
    )
  }

    return (
      <FormGroup>
            <PlatformsCheckBoxes/>
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
        <FormControlLabel value="" control={<Radio onClick={props.handlerGameState}/>} label="Todos" />
        <FormControlLabel value="Nuevo" control={<Radio onClick={props.handlerGameState}/>} label="Nuevo" />
        <FormControlLabel value="Usado" control={<Radio onClick={props.handlerGameState}/>} label="Usado" />
      </RadioGroup>
    </FormControl>
  );
}