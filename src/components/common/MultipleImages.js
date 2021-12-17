import ImageList from '@mui/material/ImageList';
import ImageItem from './ImageItem';

const MultipleImages = ({images, isForm, isSquare, cols}) => {
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

    const square = {
        width: 250, 
        height: 250,
    }

    const custom = {
        width: images.length > cols ? 125 * cols : 125 * images.length,
        height: images.length > cols ? 250 : 125
    }

    const styles = isSquare ? 
        {...square, marginLeft: "auto", marginRight: "auto"} :
        {...custom, marginLeft: "auto", marginRight: "auto"}

    console.log(styles)
    return(
        <ImageList 
            sx={styles}
            cols={images.length < cols ? images.length : cols}
            rowHeight={125}>
                {
                    imageItems.map((imageItem) => imageItem)
                }
        </ImageList>
    )
}

export default MultipleImages;