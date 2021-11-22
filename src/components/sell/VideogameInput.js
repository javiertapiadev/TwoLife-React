import { createFilterOptions } from '@mui/material/Autocomplete';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import ErrorMessage from '../ErrorMessage';

const filter = createFilterOptions();

export default function VideogameInput({isDisabled, register, errors, videogameData, setIdVideogame, setVideogameTitle}) {
    return (
        <>
            <Autocomplete
                id="free-solo-demo"
                disablePortal
                freeSolo
                selectOnFocus
                clearOnBlur
                options={videogameData}

                // Lo que pone en el TextField al seleccionar una opción
                getOptionLabel={(option) => {
                    if (typeof option === 'string') return option   // Si da enter al input, es una cadena
                    if (option.inputValue) return option.inputValue // Si selecciona "Añadir...", tiene inputValue
                    return option.title                             // Si selecciona una opción existente, tiene un title
                }}

                // Lo que muestra en la lista de opciones
                renderOption={(props, option) => <li {...props}>{option.title}</li>}

                onChange={(e, newValue) => {
                    if (newValue) {
                        if (typeof newValue === 'string') {
                            setIdVideogame("");
                            setVideogameTitle(newValue)
                        }
                        else if (newValue.inputValue) {
                            setIdVideogame("");
                            setVideogameTitle(newValue.inputValue)
                        }
                        else {
                            setIdVideogame(newValue.id);
                            setVideogameTitle("")
                        }
                    }
                }}

                filterOptions={(options, params) => {
                    const filtered = filter(options, params);
                    const { inputValue } = params;

                    const isExisting = options.some((option) => inputValue === option.title);

                    if (inputValue !== '' && !isExisting) {
                        filtered.push({
                            inputValue,
                            title: `Añadir "${inputValue}"`,
                        });
                    }

                    return filtered;
                }}

                renderInput={(params) =>
                    <TextField {...params}
                        disabled={isDisabled}
                        label="Videojuego"
                        {...register("videogame", { required: true })} />
                }
            />

            {errors.videogame && <ErrorMessage message="Debes ingresar un videojuego" />}
        </>
    )
}