import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Ordenar() {
  const [ordenar, setOrdenar] = useState('');

  const handleChange = (event) => {
    setOrdenar(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 3, minWidth: 240 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Ordenar por:</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={ordenar}
          onChange={handleChange}
          autoWidth
          label="ordenar por"
        >
          <MenuItem value="">
            <em>Recientes primero</em>
          </MenuItem>
          <MenuItem>Antiguos primero</MenuItem>
          <MenuItem>Precio más alto</MenuItem>
          <MenuItem>Precio más bajo</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
