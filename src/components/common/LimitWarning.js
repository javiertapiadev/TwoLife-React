import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';

export default function LimitWarning({isOverLimit, setIsOverLimit}) {
    return (
        <Collapse in={isOverLimit}>
            {isOverLimit &&
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => { setIsOverLimit(false) }} >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    variant="outlined"
                    severity="warning"
                    sx={{ fontSize: "12px", marginBottom: "15px" }} >
                    Máximo 4 imágenes extra
                </Alert>
            }
        </Collapse>
    )
}