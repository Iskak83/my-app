import * as React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import Burger from './Burger'
import './header.scss'


export default function Header({className, language, change}) {

   const debounce =(func) => {
    let timer
    return (...arg) => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        func.apply(this, arg)
      }, 500)
    }
  }
  
  const [burger, setBurger] = React.useState(true)
 
  const onClick = debounce((idName) => {
    if(!burger) setBurger(true)
    if(idName !== '') scrollTo(idName)
  })

  const tongueBttn = language === 'english' ? {en: 'EN', ru: 'RU'} : {en: 'анг', ru: 'рус'}
 
  const changeLanguge = debounce((tongue) => {
    if(tongue !== language) return change.languageChanged(tongue) })

  const languages = (tongue) => (
    <div  className={tongue}>
        <button type='button' id='top-flag-icon'  onClick={() => changeLanguge('english')}>
          <div>{tongueBttn.en}</div>
          <img alt='' src={`amer-flag.jpg`}/> 
        </button>
      
      <button type='button' id='bottom-flag-icon' onClick={() => changeLanguge('russian')}>
        <div>{tongueBttn.ru}</div>
        <img alt='' src={`russ-flag.jpg`} id='ru-flag-icon'/>
      </button>
    </div>
  )

  const links = language === 'english' ? ['Bio', 'Projects', 'Education', 'Hobbies'] : ['Био', 'Проекты', 'Образование', 'Xобби']

  const idNames = [{id: 1, link: '#bio'}, {id: 2, link: '#projects'}, {id: 3, link: '#education'}, {id: 4, link: '#hobby'}]

  return (
      <div id='nav-bar'>
        <div id='nav-left'>
          <div id='nav-logo'>

            <Burger setBurger={setBurger} burger={burger}/>

            <button onClick={() => onClick('#home')} id='logo' >im</button>
          </div>
          <div id='divider'/>
        </div>
        <div id={burger ? 'nav-links' : 'nav-links-mobile'}> 

          {links.map((el, i)=> {
            
            const classN = idNames[i].link === '#' + className ? 'link-offsetTop' : ''
            
            return <button key={idNames[i].id} type='button' className={classN} onClick={() => onClick(idNames[i].link)}>{el}</button>
          
          })}
        
          {languages('tongue')} 

        </div>

        {languages('mobile-tongue')}

    </div>
  )
}