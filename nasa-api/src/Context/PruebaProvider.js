import React from 'react'

//Prueba de context api 


export const PruebaContext  = React.createContext()

const PruebaProvider = (props) => {

//data 
    //data inicial de mi hook 
    const colors = {
        background: "#DAD9D9",
        color: "#F5F4F4"
    }

    const [colorN, colorNSet] = React.useState(colors)

    return (
        <PruebaContext.Provider value = {{colorN, colorNSet}}>
            {props.children}
        </PruebaContext.Provider>
    )
}

export default PruebaProvider
