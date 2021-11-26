import ValidationError from '../common/ValidationError';
import ImagePreview from './ImagePreview';

export default function SingleImage({isDisabled, register, field, errors, image, handleFileChoosed, styles}) {
    
    return(
        <div style={{ marginBottom: "15px", textAlign: "center", maxWidth: "100%" }}>
            <div style={{ width: "250px", marginBottom: "16px", marginLeft: "auto", marginRight: "auto", maxWidth: "100%" }}>
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