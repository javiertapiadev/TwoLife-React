import ValidationError from '../common/ValidationError';

export default function PlatformInput({isDisabled, register, errors, platformList}) {
    return (
        <div style={{ paddingTop: "20px" }}>
            <select
                defaultValue="Plataforma"
                name="platform"
                id="platform"
                disabled={isDisabled}
                {...register("idPlatform", {
                    required: true,
                    pattern: /\b(?!Plataforma\b)\w+/
                })}>

                <option disabled hidden>Plataforma</option>

                {platformList.length === 0 && <option disabled>Cargando opciones...</option>}
                {platformList.map(item => <option value={item._id} key={item.platform} > {item.platform} </option>)}
            </select>
            
            {errors.idPlatform && <ValidationError message="Debes escoger una consola" small />}
        </div>
    )
}