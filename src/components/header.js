import * as React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import "./header.scss"

export default function Header({className, state, change}) {
  
  const [burger, setBurger] = React.useState(true)
 
  function onClick(idName){
    if(!burger)setBurger(true)
    if(idName !== '') scrollTo(idName)
  }

  const language = state.language 

  const tongueBttn = language === 'english' ? {en: 'EN', ru: 'RU'} : {en: 'анг', ru: 'рус'}


  const changeLanguge = (language) => {
    change.languageChanged(language)
  }

  const languages = (tongue) => (
    <div  className={tongue}>
        <button type='button' id="top-flag-icon"  onClick={() => changeLanguge('english')}>
          <div>{tongueBttn.en}</div>
          <img alt='' src={`amer-flag.jpg`}/> 
        </button>
      
      <button type='button' id="bottom-flag-icon" onClick={() => changeLanguge('russian')}>
        <div>{tongueBttn.ru}</div>
        <img alt='' src={`russ-flag.jpg`} id="ru-flag-icon"/>
      </button>
    </div>
  )

  const links = language === "english" ? ['Bio', 'Projects', 'Education', 'Hobbies'] : ['Био', 'Проекты', 'Образование', 'Xобби']

  const idNames = [{id: 1, link: '#bio'}, {id: 2, link: '#projects'}, {id: 3, link: '#education'}, {id: 4, link: '#hobby'}]

  console.log('header>>>>>', className)

  return (
      <div id="nav-bar">
        <div id="nav-left">
          <div id="nav-logo">
            <div id="burger-container">
              <button onClick={() => setBurger(!burger)} id={burger ? "burger" : "x"}>
              
                <div id="lineOne"></div>
                <div id="lineTwo"></div>
                <div id="lineThree"></div>
              </button>
            </div>
            
            <button onClick={() => onClick('#home')} id="logo" >im</button>
          </div>
          <div id="divider"/>
        </div>
        <div id={burger ? "nav-links" : "nav-links-mobile"}> 

          {links.map((el, i)=> {
            
            const classname = idNames[i].link === "#" + className ? 'link-offsetTop' : 'nothing'
            
            return <button key={idNames[i].id} type='button' className={classname} onClick={() => onClick(idNames[i].link)}>{el}</button>
          
          })}
        
          {languages('tongue')} 

        </div>

        {languages('mobile-tongue')}

    </div>
  )
}