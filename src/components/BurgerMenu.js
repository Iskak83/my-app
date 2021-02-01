import React from 'react'

const BurgerMenu = ({setBurger, burger}) => (
<div id="burger-container">
    <button onClick={() => setBurger(!burger)} id={burger ? "burger" : "x"}>

        <div id="lineOne"></div>
        <div id="lineTwo"></div>
        <div id="lineThree"></div>
    </button>
</div>)

export default BurgerMenu