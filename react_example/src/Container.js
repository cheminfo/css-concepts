import React from 'react'
import Mediaquery from 'react-responsive'

class Container extends React.Component {
    render() {
        /*
        console.log(this.props.children.length)
        let children
        let rows = 0
        this.props.children.map((x, i) => {
            if(i % 2 === 0) {
                rows++
            }
            children[rows].push(x)
        })
        */
        return (

            <div>
                <Mediaquery query='(min-width: 600px)'>
                    {this.mediumRender()}
                </Mediaquery>
                <Mediaquery query='(max-width: 599px)'>
                    <div className="container">
                        {this.mobileRender()}
                    </div>
                </Mediaquery>
            </div>
        )

    }

    mobileRender() {
        return (
            <div className="inlineContainer">
                {this.props.children}
            </div>
        )
    }

    mediumRender() {
        let rendered = []
        let children = this.props.children
        let length = children.length
        length += 2
        console.log(length)

        for(let i = 0; i < length; i++) {
            if(i % 2 === 0) {
                rendered.push(<div className="container">{children[i]} {children[i + 1]} </div>)
            }
        }
        if(length % 2 !== 0) {
            rendered.push(<div className="container"> {children[length - 1]} </div>)
        }

        /*
        children.map(function (child, i){
            console.log(i)
            if(i % 2 === 0){
                console.log('modulo')
                if(i !== 0){
                    rendered.push(<div className="container">{children[i-1]} {children[i]} </div>)
                }
                if(i === length -1) {
                    console.log('last element')
                    rendered.push(<div className="container">{children[i]}</div>)
                }
            }
        })
        */
        return rendered
    }
}

export default Container
