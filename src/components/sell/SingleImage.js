import ErrorMessage from '../ErrorMessage';
import ImagePreview from './ImagePreview';

export default function SingleImage({isDisabled, register, errors, mainImg, handleFileChoosed}) {
    return(
        <div style={{ marginBottom: "15px", textAlign: "center" }}>
            <div style={{ width: "250px", marginBottom: "16px", marginLeft: "auto", marginRight: "auto", marginTop: "16px" }}>
                <ImagePreview src={mainImg} styles={{paddingTop: "100%"}}/>
            </div>

            <input
                type="file"
                accept="image/*"
                className="img-picker"
                id="main-img-picker"
                disabled={isDisabled}
                onChange={(e) => handleFileChoosed(e)}
                // {...register("mainImg", {
                //     required: true,
                //     onChange: (e) => handleFileChoosed(e)
                // })}
            />

            <label
                htmlFor="main-img-picker"
                className="img-picker-label">
                Escoger imagen
            </label>

            {/* {errors.mainImg && <ErrorMessage message="Debes escoger una imagen principal" small />} */}
        </div>
    )
}