import React, {useState, useEffect} from 'react'

const TypeWriter = ({texts, speed, endSpeed, className}) => {
    const [text, setText] = useState('')

  useEffect(() => {
      
        let i = 0;
        let isDeleting  = false;
        let txt = '';

        const  rotateText = () => {
          
           let string = texts[i]
           let newSpeed = speed
            if(isDeleting){
                txt = string.slice(0, txt.length - 1)
                setText(txt)   
         
            }else{
                txt = string.slice(0, txt.length + 1)
                setText(txt) 
             
            }

            if(!isDeleting && txt === texts[i]){
                newSpeed = endSpeed
                isDeleting = true
               
            }else if(isDeleting && txt === ''){
                console.log('<<<<<<',i, txt)
                isDeleting = false
                newSpeed = speed*3
                i++
                if(i === texts.length) i = 0
            }else if(isDeleting && txt === texts[i]){
                newSpeed = speed / 2
            }

            setTimeout(() => rotateText(), newSpeed)
        }
     rotateText()

    }, [texts, speed, endSpeed])
   

    return(
        <div className={className}>{text}</div>
    )
}
export default TypeWriter