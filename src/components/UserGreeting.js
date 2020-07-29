import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {

        // Ternary conditional operator approach simple and readable
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Terry, punk</div> :
        //     <div>Welcome jerk Guest</div>
        // )

        // Short circuit operator approach
        return this.state.isLoggedIn && <div>Welcome Terry, Punk</div>

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Terry, Punk
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div>
        //             Welcome, Guest, punk
        //         </div>
        //     )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Terry, punk</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
        
        // return (
        //     <div>
        //         <div>Welcome, Terry my friend!</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )

    }
}

export default UserGreeting
