import React, {useState, useEffect} from 'react'

const TypeWriter = ({texts, speed, endSpeed, className}) => {
    
    const [text, setText] = useState('')
  
    useEffect(() => {  
        let i = 0;
        let isDeleting  = false;
        let txt = '';
        let t;
        setText('')
        
        const  rotateText = () => {
            clearTimeout(t)
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
                isDeleting = false
                newSpeed = speed*3
                i++
                if(i === texts.length) i = 0

            }else if(isDeleting && txt === texts[i]){
                newSpeed = speed / 2
            }
          t =  setTimeout(() => rotateText(), newSpeed)
          return () => clearTimeout(t)
        }
        clearTimeout(t)
        t = setTimeout(() => rotateText(), 1000)
        
        return () => clearTimeout(t)
    }, [texts, speed, endSpeed])
   
    return(
            <div className={className}>{text}</div>
    )
}

export default TypeWriter

