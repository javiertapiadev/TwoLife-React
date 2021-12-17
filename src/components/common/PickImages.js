import { useState } from 'react';

import LimitWarning from './LimitWarning';
import MultipleImages from './MultipleImages';

export default function PickImages({ images, setOptionalImgs, isDisabled}) {
    const [isOverLimit, setIsOverLimit] = useState(false);

    const handleMultipleFiles = (e) => {
        const fileList = e.target.files
        const files = [...fileList]

        if (files.length + images.length <= 4) {
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
        const aux = [...images]

        aux.splice(index, 1)
        setOptionalImgs(aux)
    }

    return (
        <div style={{ marginBottom: "15px", textAlign: "center" }}>
            <MultipleImages images={images} isForm={{ handleDeleteImg }} isSquare/>

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