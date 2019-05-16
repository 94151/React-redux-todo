import React, { Component } from 'react';
import List from "../List/index.js";


export default class Add extends Component {
    constructor(props){
        super(props);
        this.state ={
            addValue: '',
            listValues: []
        }
    }
    addItem =(e) =>{
        e.preventDefault()
        this.setState({
            addValue: '',
            listValues: [...this.state.listValues, this.state.addValue]
        });
    }

    addonChange = (e) => {
        this.setState({addValue: e.target.value})
        console.log(e.target.value);
    }
    render() {
    return (
    
      <div>
      <form>
       <input value={this.state.addValue} text="input" placeholder="enter text" onChange={this.addonChange}/>
       <button onClick={this.addItem}> add</button>
       </form>
       <List listValues={this.state.listValues}/>
      </div>
      
     
    )
  }
}
