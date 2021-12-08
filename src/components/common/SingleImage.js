import ValidationError from './ValidationError';
import ImagePreview from './ImagePreview';
import './styles.css'

export default function SingleImage({ image, form, styles }) {
    let handleFileChoosed;

    if (form) {
        handleFileChoosed = (e) => {
            const file = e.target.files[0]
            const fileReader = new FileReader();
            
            fileReader.readAsDataURL(file);
            
            fileReader.onloadend = () => {
                form.setImg(fileReader.result)
            }
        }
    }

    return (
        <div className="single-image">
            <div className="imgprev-container">
                <ImagePreview src={image} styles={{ ...styles }} />
            </div>

            {
                form && <>
                    <input
                        type="file"
                        accept="image/*"
                        className="img-picker"
                        id="main-img-picker"
                        disabled={form.isDisabled}
                        {...form.register(form.field, {
                            required: true,
                            onChange: (e) => handleFileChoosed(e)
                        })}
                    />

                    <label
                        htmlFor="main-img-picker"
                        className="img-picker-label">
                        Escoger imagen
                    </label>

                    {form.errors.mainImg && <ValidationError message="Debes escoger una imagen principal" small />}
                </>
            }

        </div>
    )
}