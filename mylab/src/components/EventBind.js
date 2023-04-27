import React, { Component } from 'react'

class EventBind extends Component {
constructor(props) {
  super(props)

  this.state = {
     message: 'Hello'
  }
  //type3
//   this.clickHandler = this.clickHandler.bind(this)
}
// clickHandler(){
//     this.setState({
//         message: 'Goodbye!'
//     })
//     console.log(this)
// }
clickHandler = () =>{
    this.setState({
        message: 'Goodbye!'
    })
}
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
     {/* type1   <button onClick={this.clickHandler.bind(this)}>click</button> */}
       {/* type2 <button onClick={()=> this.clickHandler()}>click</button> */}
        <button onClick={this.clickHandler}>click</button>
      </div>
      
    )
  }
}

export default EventBind

// BINDING IN RENDER
//ARROW IN RENDER
// BINDING IN THE CLASS CONSTRUCTOR
// CLASS PROPERTY AS ARROE FUNCTIONS