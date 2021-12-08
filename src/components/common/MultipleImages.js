import ImageList from '@mui/material/ImageList';
import ImageItem from './ImageItem';

const MultipleImages = ({images, isForm}) => {
    let limit;
    const imageItems = []

    // En el form de anuncio, queremos 4 cuadrados grises siempre
    // En el anuncio ya publicado, sólo queremos las imágenes que hayan (0 - 4)
    if (isForm) limit = 4
    else limit = images.length

    for(let i = 0; i < limit; i++) {
        const image = images[i] || "";
        imageItems.push( <ImageItem image={image} index={i} isForm={isForm} /> )
    }

    return(
        <ImageList 
            sx={{ width: 250, height: 250, marginLeft: "auto", marginRight: "auto" }}
            cols={2}
            rowHeight={125}>
                {
                    imageItems.map((imageItem) => imageItem)
                }
        </ImageList>
    )
}

export default MultipleImages;