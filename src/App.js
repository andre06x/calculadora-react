import React from 'react'

import Calc from './components/Calculadora'

// eslint-disable-next-line no-unused-vars
import AppCss from './App.css'

import StylesGlobal from './styles/global'

function App(){
    return(
        <>
            <StylesGlobal />
            <Calc />
        </>
    )
}


export default App