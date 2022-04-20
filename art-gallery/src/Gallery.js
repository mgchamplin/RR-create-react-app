

function Gallery(props){
    return (
        <div style={{'width': '100%'}}>
            <p>{props.artist}</p>
            <img src={props.objectImg} alt={props.title} />
        </div>
    )
}


export default Gallery