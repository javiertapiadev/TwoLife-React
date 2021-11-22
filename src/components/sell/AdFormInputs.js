import Grid from '@mui/material/Grid';

import VideogameInput from './VideogameInput'
import PriceInput from './PriceInput'
import ConditionInput from './ConditionInput'
import PlatformInput from './PlatformInput'
import DescriptionInput from './DescriptionInput'

export default function AdFormInputs({isDisabled, register, errors, platformList, videogameData, setIdVideogame, setVideogameTitle}) {
    return (
        <>
            <VideogameInput 
                isDisabled={isDisabled}
                register={register}
                errors={errors}
                videogameData={videogameData}
                setIdVideogame={setIdVideogame}
                setVideogameTitle={setVideogameTitle} />

            <Grid
                container
                alignItems="center"
                justifyContent="space-around"
                direction={{ xs: "column", sm: "row" }}
                sx={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto", marginTop: "15px" }}>
                    <PriceInput isDisabled={isDisabled} register={register} errors={errors}/>
                    <ConditionInput isDisabled={isDisabled} register={register} errors={errors}/>
                    <PlatformInput isDisabled={isDisabled} register={register} errors={errors} platformList={platformList}/>
            </Grid>

            <DescriptionInput isDisabled={isDisabled} register={register} errors={errors}/>
        </>
    )
}