import React from 'react'
import './Container.css'

class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="topBar">
                    <div className="title">{this.props.title} </div>
                </div>
                <div className="content"> {this.props.children}</div>
            </div>
        )
    }
}

export default Container
