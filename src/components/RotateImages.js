import  React, {useState, useEffect} from 'react'


const RotateImages = (props) =>{
    
    const [image, setImage] = useState('')
    const [imgInfo, setImgInfo] = useState('')

    useEffect(() => {
        let i = 0
        let t;
        const  rotateImages = () => {
            
                const newImg = props.images[i]
                const info = props.imgInfo[i]
                setImage(newImg)
                setImgInfo(info)
    
               i++
    
               if(i === props.images.length) i = 0
              
              t = setTimeout(() => rotateImages()
              , 6000)
        
              return () => clearTimeout(t)
          }
          
       t = setTimeout( () => rotateImages(), 2000)
       
    return () => clearTimeout(t)

    }, [props])

   

    return(
        <div id="fade-img">
            <img src={image} alt='' className={props.className}/>
            <div id="img-info">{imgInfo}</div>
        </div>
    )
   
}

export default RotateImages