// import React, { Component } from 'react';
// import Button from "../Button/index.js"

// export default class List extends Component {
//     constructor(props){
//         super(props);
//         debugger
//         this.state ={}
//     }
   
//   render() {
//     return (
//       <ul>
//         {this.props.listValues.map((val , index)=> <li>{val}
//         <Button data={this.props.listValues}/>
//         </li>
//         )}
//         </ul>
        
//     )
//   }
// }




import React, { Component } from 'react'

export default class List extends Component {
    constructor(props){
        super(props);
        debugger
        this.state ={
          isEdit: false,
          addEdit: '',
          afterEdit: ''
        }
    }
    handleDelete = (index) =>{

      const task = this.props.listValues
      task.splice(index, 1)
      this.setState({task})
    }

    handleEdit = (e) =>{
      this.setState({ isEdit : !this.state.isEdit })
    }

    editOnchange = (event) => {
      console.log('editing after: ', event.target.value)
      this.setState({afterEdit: event.target.value})
    }
  render() {
    return (
      <ul>
        {this.props.listValues.map((val , index)=> 
        <li>{val}
         <button onClick={this.handleEdit}>Edit</button>
         <button onClick={this.handleDelete}>Delete</button>
         {this.state.isEdit ?  <form>
           <input 
         type="text" 
         placeholder="edit" 
         value={val}
         onChange={this.editOnchange}>
         </input> 
         <button>Save</button>
         </form>: 
         <button>Save</button>}
        </li>)}
        
        </ul>
    )
  }
}
