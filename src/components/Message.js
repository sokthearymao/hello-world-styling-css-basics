import React, { Component } from 'react';

// props
// class Welcome extends Component {
//     render() {
//     return <h1>Welcome {this.props.name} a.k.a {this.props.heroName} </h1>
//     }
// }

// state
class Message extends Component {

        constructor() {
            super()
            this.state = {
                message: 'Welcome Visitor, punk!'
            }
        }

        changeMessage() {
            this.setState({
                message: 'Thank you, punk for subscribing'
            })
        }

    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()} >
                    Subscribe, punk!
                </button>
            </div>
        )
    }
}

export default Message;