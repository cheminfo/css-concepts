import React from 'react'

class Group extends React.Component {
  render() {
    return <div className="group box"> {this.props.children}</div>
  }
}

export default Group