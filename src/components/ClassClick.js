import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
        console.log('Clicked the button, punk')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler} >Click me,punk</button>
            </div>
        )
    }
}

export default ClassClick
