import ImageList from '@mui/material/ImageList';

import ImageItem from './ImageItem';
import LimitWarning from './LimitWarning';

export default function MultipleImages({optionalImgs, handleDeleteImg, handleMultipleFiles, isDisabled, isOverLimit, setIsOverLimit}) {
    return (
        <div style={{ marginBottom: "15px", textAlign: "center" }}>
            <ImageList 
                sx={{ width: 250, height: 250, marginTop: "16px", marginLeft: "auto", marginRight: "auto" }}
                cols={2}
                rowHeight={125} >
                    <ImageItem optionalImgs={optionalImgs} index={0} handleDeleteImg={handleDeleteImg} />
                    <ImageItem optionalImgs={optionalImgs} index={1} handleDeleteImg={handleDeleteImg} />
                    <ImageItem optionalImgs={optionalImgs} index={2} handleDeleteImg={handleDeleteImg} />
                    <ImageItem optionalImgs={optionalImgs} index={3} handleDeleteImg={handleDeleteImg} />
            </ImageList>

            <input
                type="file"
                accept="image/*"
                onChange={(e) => handleMultipleFiles(e)}
                className="img-picker"
                id="album-picker"
                multiple
                disabled={isDisabled}
            />

            <LimitWarning isOverLimit={isOverLimit} setIsOverLimit={setIsOverLimit}/>

            <label
                htmlFor="album-picker"
                className="img-picker-label">
                Escoger imágenes
            </label>
        </div>
    )
}