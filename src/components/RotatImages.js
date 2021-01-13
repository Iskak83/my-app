import  React, {useState, useEffect} from 'react'


const Images = (props) =>{
    
    const [image, setImage] = useState('')
    const [imgInfo, setImgInfo] = useState('')

    useEffect(() => {
        let index = 0
        const  rotateImages = () => {
            
               setImage(props.images[index])
               setImgInfo(props.imgInfo[index])
    
               index++
    
               if(index === props.images.length) index = 0
              
              setTimeout(function() {
                          rotateImages();
              }, 7000)
          }
          
        rotateImages()}, [props])

   

    return(
        <div id="fade-img">
            <img src={image} alt='' className={props.className}/>
            <div id="img-info">{imgInfo}</div>
        </div>
    )
   
}

export default Images