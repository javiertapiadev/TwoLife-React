import ValidationError from '../common/ValidationError';

export default function ConditionInput({isDisabled, register, errors}) {
    return (
        <div style={{ paddingTop: "15px", minWidth: "150px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <input
                        type="radio"
                        id="nuevo"
                        name="condition"
                        value="Nuevo"
                        disabled={isDisabled}
                        {...register("condition", { required: true })} />
                    <label htmlFor="nuevo" >Nuevo</label>
                </div>

                <div>
                    <input
                        type="radio"
                        id="usado"
                        name="condition"
                        value="Usado"
                        disabled={isDisabled}
                        {...register("condition", { required: true })} />
                    <label htmlFor="usado">Usado</label>
                </div>
            </div>


            {errors.condition && <ValidationError message="Debes escoger un estado" small />}
        </div>
    )
}