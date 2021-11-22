import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import ImagePreview from './ImagePreview';

export default function ImageItem({optionalImgs, index, handleDeleteImg}) {
    return (
        <div style={{ position: "relative" }}>
            <ImagePreview src={optionalImgs[index] || ""} />
            {/* <Image
                                        cover={true}
                                        color={"gainsboro"}
                                        disableSpinner
                                        src={}
                                        style={{ borderRadius: "15px" }}
                                        imageStyle={{ borderRadius: "15px" }} /> */}

            {optionalImgs[index] &&
                <Fade in timeout={700}>
                    <IconButton
                        id={index}
                        aria-label="delete"
                        size="small"
                        style={{ position: "absolute", top: 5, right: 5, color: "#5271ff" }}
                        onClick={(e) => { handleDeleteImg(e) }} >
                        <DeleteIcon />
                    </IconButton>
                </Fade>}
        </div>
    )
}