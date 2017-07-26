import React from 'react'
import Mediaquery from 'react-responsive'


class TestComponent extends React.Component {
    randomColor() {
        const letters = '0123456789abcdef'
        let color = '#'

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color;
    }
    render() {
        const style = {
            backgroundColor : this.randomColor(),
            flex: 1
        }
        return (
        <div style={style}>
          <Mediaquery query='(min-width: 600px)'>
            {(matches) => {
              if (matches) {
                return <div className="small">Media query matches!</div>;
            } else {
                return <div>Media query does not match!</div>;
            }}}
          </Mediaquery>

        </div>
    )
    }
}

export default TestComponent
