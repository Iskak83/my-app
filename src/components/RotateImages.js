import  React, {useState, useEffect} from 'react'

const RotateImages = (props) =>{
    
    const [image, setImage] = useState('')
    const [imgInfo, setImgInfo] = useState('')
    const [classImg, setClassImg] = useState('fade-in-out')
    const [classTxt, setClassTxt] = useState('slide-in')

    useEffect(() => {
        let i = 0;
        let j = 0;
        let t;
        let speed = 1000;
        const  rotateImages = () => {
            const newImg = props.images[i]
            const info = props.imgInfo[i]
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

            if(i === props.images.length) i = 0
            
            t = setTimeout(() => rotateImages()
            , speed)
             
          }
          
      rotateImages()
       
    return () => clearTimeout(t)

    }, [props])

   

    return(
        <div id="fade-img">
            <img src={image} alt='' className={classImg}/>
            <div className={classTxt}>{imgInfo}</div>
        </div>
    )
   
}

export default RotateImages