import React from 'react'
import {PruebaContext} from '../Context/PruebaProvider'


const Navbar = () => {

    const {colorN, colorNSet} = React.useContext(PruebaContext)

    //Mis estados
   // const[colorG, colorGSet] = React.useState('')
   // const[colorT, colorTSet] = React.useState('#000')

    return (
        <div style = {
            {
            background: colorN.background,
            color: colorN.color
            }
        }> 
        <h1>MARS ROVERS PHOTOS</h1>
        <input
            type = "color"
            onChange = { e => colorNSet({...colorN, color: e.target.value})}
        ></input>
        <input
             type = "color"
            onChange = {e => colorNSet({...colorN, background:  e.target.value})}
        ></input>
            
        </div>
    )
}

//prueba para git

export default Navbar
