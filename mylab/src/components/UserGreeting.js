import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    // short circuit operator
      return this.state.isLoggedIn && <div>Welcome Joshua</div>



    //conditional rendering (ternary conditional operator)
    // return this.state.isLoggedIn ? (
    //     <div>Welcome Joshua</div>
    // ) : (
    //     <div>Welcome Guest</div>
    // )
// types of coditional rendering (ELEMENT VARIABLES)
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Joshua</div>
    // }else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
    

    // conditional rendering (if/else)
    // if (this.state.isLoggedIn){
    //     return(
    //     <div>
    //        Welcome Joshua
    //     </div>
    //     )
    // }else{
    //    return(
    //      <div>
    //         Welcome Guest
    //      </div>
    //    )
    // }
    // return (
    //   <div>
    //     <div>Welcome Joshua</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
