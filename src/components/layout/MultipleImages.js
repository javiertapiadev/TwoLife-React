import { useState } from 'react';

import ImageList from '@mui/material/ImageList';

import ImageItem from '../sell/ImageItem';
import LimitWarning from '../sell/LimitWarning';

export default function MultipleImages({optionalImgs, setOptionalImgs, isDisabled}) {
    const [isOverLimit, setIsOverLimit] = useState(false);
    const imageItems = []

    const handleMultipleFiles = (e) => {
        const fileList = e.target.files
        const files = [...fileList]

        if (files.length + optionalImgs.length <= 4) {
            setIsOverLimit(false)

            files.forEach(file => {
                const fileReader = new FileReader();

                fileReader.readAsDataURL(file);

                fileReader.onloadend = () => {
                    setOptionalImgs(prevImgs => [...prevImgs, fileReader.result])
                }
            })
        } else {
            setIsOverLimit(true)
        }
    }

    const handleDeleteImg = (e) => {
        let index = e.currentTarget.id
        const aux = [...optionalImgs]

        aux.splice(index, 1)
        setOptionalImgs(aux)
    }

    for(let i = 0; i < 4; i++) {
        imageItems.push(
            <ImageItem 
            optionalImgs={optionalImgs}
            index={i}
            handleDeleteImg={handleDeleteImg} />
        )
    }

    return (
        <div style={{ marginBottom: "15px", textAlign: "center" }}>
            <ImageList 
                sx={{ width: 250, height: 250, marginLeft: "auto", marginRight: "auto" }}
                cols={2}
                rowHeight={125}>
                    {
                        imageItems.map((imageItem) => imageItem)
                    }
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