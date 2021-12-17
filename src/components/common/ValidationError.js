import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import './styles.css'

export default function ValidationError({ message, small }) {
    let list = "error"
    if (small) list = list + " error-small"

    return <p className={list}>
        <small style={{ color: "red"}}>
            <ErrorOutlineIcon style={{ fontSize: "19px", verticalAlign: "-15%" }} /> {message}
        </small>
    </p>
}