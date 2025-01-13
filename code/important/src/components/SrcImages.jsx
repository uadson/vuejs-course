import Image2 from '../assets/image2.jpg';

const SrcImages = () => {
    let width = 700
    let height = 400

    return (
        <div>
            <h1>Src Images</h1>
            
            <img src={Image2} alt="Image 2" width={width} height={height}/>
        </div>
    )
}

export default SrcImages
