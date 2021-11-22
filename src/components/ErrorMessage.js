import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function ErrorMessage({ message, small }) {
    let list = "error"
    if (small) list = list + " error-small"

    return <p className={list}>
        <small style={{ color: "red", fontSize: "12px" }}>
            <ErrorOutlineIcon style={{ fontSize: "13px", verticalAlign: "-14%" }} /> {message}
        </small>
    </p>
}