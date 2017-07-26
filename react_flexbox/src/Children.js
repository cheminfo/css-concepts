import React from 'react'

class Children extends React.Component {
    render() {
        const style = {
            backgroundColor: this.props.color
        }
        return <div style={style} className="child">This is a child component</div>
  }
}

export default Children
