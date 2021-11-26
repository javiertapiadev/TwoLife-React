import Input from '@mui/material/Input';

export default function SubmitButton({isDisabled, value, style}) {
    return (
        <Input
            type="submit"
            value={value}
            className="submit-button"
            style={{...style}}
            disabled={isDisabled}/>
    )
}