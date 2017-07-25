import React from 'react'


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
            backgroundColor : this.randomColor()
        }
        return (
        <div style={style}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    )
    }
}

export default TestComponent
