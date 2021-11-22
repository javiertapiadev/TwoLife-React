import Input from '@mui/material/Input';

export default function AdFormButton({isDisabled}) {
    return (
        <Input
            type="submit"
            value="Crear anuncio"
            className="submit-button"
            style={{ color: "white" }}
            disabled={isDisabled} />
    )
}