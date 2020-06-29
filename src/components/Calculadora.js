import React, { Component } from 'react'

import BodyCalc from './BodyCalc'

import { Container } from './stylesCalculadora'

export default class Calc extends Component {

    state = {
        calculo: '',
        resultado: '',
    };
  

  addNumberInput = e => {
     this.setState({ calculo: e.target.value})
  }

  addNumberButton = e =>{

      this.setState({ calculo: this.state.calculo + e})
      let input = document.querySelector('input')
      input.value =  input.value + e
  }

  igual = () =>{
    //eu sei que não precisa, fiz por roleplay ;-;
        // eslint-disable-next-line no-eval
        let r = eval(this.state.calculo)
        this.setState({ resultado: r})
  }

  clear = () =>{
      this.setState({calculo: ''})
      document.querySelector('input').value = ''
        
  }

  componentDidUpdate(_,prevState){
    if(prevState.calculo !== this.state.calculo ){
      
        if(this.state.calculo === ''){
          this.setState({resultado: ''})

          return 0;
        }
        
        //pega o ulimo character 
        let numero = this.state.calculo.substr(-1)

        if(numero === "0" || numero === "1" || numero === "2" || numero === "3" || numero ==="4" || numero ==="5" || numero === "6" || numero === "7" || numero === "8" || numero === "9" || numero ===")"){
          try{
                // eslint-disable-next-line no-eval
                let r = eval(this.state.calculo)
                this.setState({ resultado: r})
 
          }catch(err){
                this.setState({resultado: 'Algo de errado '})
          }
          
        }

        else {
          return 0
        }
    }
  }
   
    render(){
        return(

            <Container >
                <BodyCalc key ={this.key}
                          addNumberInput={this.addNumberInput}
                          state={this.state} 
                          addNumberButton={this.addNumberButton} 
                          igual={this.igual} 
                          clear={this.clear}/>
            </Container>       
        )
    }
}