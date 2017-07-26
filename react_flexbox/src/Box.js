import React from 'react'

class Box extends React.Component {
  render() {
     const style= {
         backgroundColor: this.props.color
     }
     let classes = "box"
     if(this.props.noMobile) classes += " noMobile"
    return <div style={style} className={classes}>This is a react component</div>
  }
}

export default Box
