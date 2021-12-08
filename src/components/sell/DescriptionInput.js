import { ValidationError } from '../common';

export default function DescriptionInput({isDisabled, register, errors}) {
    return(
        <div style={{ maxWidth: "100%", paddingTop: "20px" }}>
                <h2 style={{ maxWidth: "90%", marginLeft: "auto", marginRight: "auto" }}>Descripción:</h2>
                {errors.description && <ValidationError message="Debes ingresar una descripción" />}
                <textarea
                    type="text"
                    id="description"
                    name="description"
                    cols={100}
                    rows={7}
                    className="description-section"
                    disabled={isDisabled}
                    {...register("description", { required: true })} />
            </div>
    )
}