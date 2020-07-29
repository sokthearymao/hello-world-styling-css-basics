import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'hello, punk'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye jerk'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click meng!</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click meng!</button> */}
                <button onClick={this.clickHandler}>Click meng!</button>
            </div>
        )
    }
}

export default EventBind
