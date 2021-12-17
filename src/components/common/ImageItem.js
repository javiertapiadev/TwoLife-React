import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import ImagePreview from './ImagePreview';

export default function ImageItem({ image, index, isForm }) {
    return (
        <div style={{ position: "relative" }}>
            <ImagePreview src={image} styles={{borderRadius: "15px"}}/>

            { isForm && image !== "" &&
                <Fade in timeout={700}>
                    <IconButton
                        id={index}
                        aria-label="delete"
                        size="small"
                        style={{ position: "absolute", top: 5, right: 5, color: "#5271ff" }}
                        onClick={(e) => { isForm.handleDeleteImg(e) }} >
                        <DeleteIcon />
                    </IconButton>
                </Fade>
            }
        </div>
    )
}