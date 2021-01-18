import React, { useContext, useState } from "react"
import "./header.scss"
import scrollTo from 'gatsby-plugin-smoothscroll';
import {LanguageContext}  from '../pages/index'

export default function Header() {

  const [burger, setBurger] = useState(true)

  function onClick(idName){
    if(!burger)setBurger(true)
    if(idName !== '') scrollTo(idName)
  }

  const {state, change} = useContext(LanguageContext)

  const language = state.language 

  const tongueBttn = state.language === 'english' ? {en: 'eng', ru: 'rus'} : {en: 'анг', ru: 'рус'}


  const changeLanguge = (language) => {
    change.languageChanged(language)
    console.log('after', state)
  }

  const languages = (tonge) => <div  className={tonge}>
      <button type='button' onClick={() => changeLanguge('english')}>{tongueBttn.en}</button>
     <button type='button' onClick={() => changeLanguge('russian')}>{tongueBttn.ru}</button>
  </div>

  const links = language === "english" ? ['Bio', 'Projects', 'Education', 'Hobbies'] : ['Био', 'Проекты', 'Образование', 'Xобби']

  const idNames = [{id: 1, link: '#bio'}, {id: 2, link: '#projects'}, {id: 3, link: '#education'}, {id: 4, link: '#hobbies'}]

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

      {links.map((el, i)=> <button key={idNames[i].id} type='button' onClick={() => onClick(idNames[i].link)}>{el}</button>)}
    
      {languages('tonge')} 

    </div>

    {languages('mobile-tonge')}

</div>
  )
}