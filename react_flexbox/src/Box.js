import React from 'react'

class Box extends React.Component {
  render() {
     const style= {
         backgroundColor: this.props.color
     }
    return <div style={style} className="box">This is a react component</div>
  }
}

export default Box
