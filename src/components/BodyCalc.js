import React from 'react'

export default function Calcular({addNumberInput, state, addNumberButton, igual, clear }){
    return(
        <table>
           
        <BodyHead addNumberInput={addNumberInput}
                  state={state}
        />
        
        <BodyCall clear={clear} 
                  addNumberButton={addNumberButton} 
                  igual={igual}
        />
        </table>
    )
}


function BodyHead({addNumberInput, state}){
    return (
        <thead>
        <th>
            <input type="text" 
                   onChange={addNumberInput}
            />
            <div className="resultado">
            <span>
                {state.resultado}
            </span>
            </div>
        </th>
    </thead>

    )
}

function BodyCall({clear,addNumberButton,igual}){
    return(
        <tbody>
        <tr>
           <button onClick={()=>addNumberButton(7)} >7</button>
           <button onClick={()=>addNumberButton(8)} >8</button>
           <button onClick={()=>addNumberButton(9)} >9</button>
           <button onClick={clear} >C</button>
        </tr>

        <tr>
           <button onClick={()=>addNumberButton(4)}>4</button>
           <button onClick={()=>addNumberButton(5)} >5</button>
           <button onClick={()=>addNumberButton(6)} >6</button>
           <button onClick={()=>addNumberButton("-")} >-</button>
        </tr>

        <tr>
           <button onClick={()=>addNumberButton(1)} >1</button>
           <button onClick={()=>addNumberButton(2)} >2</button>
           <button onClick={()=>addNumberButton(3)} >3</button>
           <button onClick={()=>addNumberButton("+")} >+</button>
        </tr>
        <tr>
           <button onClick={()=>addNumberButton(0)} >0</button>
           <button onClick={()=>addNumberButton("/")} >/</button>
           <button onClick={()=>addNumberButton("*")} >*</button>
           <button onClick={igual} >=</button>
        </tr>
    </tbody>
    )
}