import  React, {useState, useEffect} from 'react'

const RotateImages = ({images, imgInfo}) =>{
    
    const [image, setImage] = useState('')
    const [imageInfo, setImgInfo] = useState('')
    const [classImg, setClassImg] = useState('fade-in-out')
    const [classTxt, setClassTxt] = useState('slide-in')

    useEffect(() => {

        let i = 0;
        let j = 0;
        let t;
        let speed = 1000;

        const  rotateImages = () => {
            const newImg = images[i]
            const info = imgInfo[i]
            setImage(newImg)
            setImgInfo(info)

            j++
            
            if(j === 2){ 
                setClassImg('rotate-image')
                setClassTxt('rotate-txt')
                speed = 4000
            }else if(j===3) {
                setClassImg('fade-in-out')
                setClassTxt('slide-out')
                j = 0
                i++
                speed = 1000;
            }else{
                setClassTxt('slide-in')
            }

            if(i === images.length) i = 0
            
            t = setTimeout(() => rotateImages()
            , speed)
             
          }
          
      rotateImages()
       
    return () => clearTimeout(t)

    }, [images, imgInfo])

   

    return(
        <div id="fade-img">
            <img src={image} alt='' className={classImg}/>
            <div className={classTxt}>{imageInfo}</div>
        </div>
    )
   
}

export default RotateImages