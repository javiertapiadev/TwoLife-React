import Image from 'material-ui-image'

export default function ImagePreview({src, styles}) {
    return (
        <Image
            cover={true}
            color={"gainsboro"}
            disableSpinner
            src={src}
            className="img"
            style={{ ...styles, borderRadius: "15px" }}
            imageStyle={{ borderRadius: "15px" }}
        />
    )
}