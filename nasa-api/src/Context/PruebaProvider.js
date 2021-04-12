import React from 'react'

//Prueba de context api 


export const PruebaContext  = React.createContext()

const PruebaProvider = (props) => {

//data 
    //data inicial de mi hook 
    const colors = {
        background: "#000",
        color: "#fff"
    }

    const [colorN, colorNSet] = React.useState(colors)

    return (
        <PruebaContext.Provider value = {{colorN, colorNSet}}>
            {props.children}
        </PruebaContext.Provider>
    )
}

export default PruebaProvider
