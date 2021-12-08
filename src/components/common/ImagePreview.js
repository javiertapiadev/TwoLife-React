import Image from 'material-ui-image'

export default function ImagePreview({src, styles}) {
    return (
        <Image
            cover={true}
            color={"gainsboro"}
            disableSpinner
            src={src}
            className="img"
            style={{ ...styles, maxWidth: "100%"}}
            imageStyle={{ ...styles }}
        />
    )
}