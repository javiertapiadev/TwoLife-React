import ValidationError from './ValidationError';
import ImagePreview from './ImagePreview';
import './styles.css'

export default function SingleImage({isDisabled, register, field, errors, image, setImg, styles}) {
    
    const handleFileChoosed = (e) => {
        const file = e.target.files[0]
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onloadend = () => {
            setImg(fileReader.result)
        }
    }
    
    return(
        <div className="single-image">
            <div className="imgprev-container">
                <ImagePreview src={image} styles={{...styles}}/>
            </div>

            <input
                type="file"
                accept="image/*"
                className="img-picker"
                id="main-img-picker"
                disabled={isDisabled}
                {...register(field, {
                    required: true,
                    onChange: (e) => handleFileChoosed(e)
                })}
            />

            <label
                htmlFor="main-img-picker"
                className="img-picker-label">
                Escoger imagen
            </label>

            {errors.mainImg && <ValidationError message="Debes escoger una imagen principal" small />}
        </div>
    )
}