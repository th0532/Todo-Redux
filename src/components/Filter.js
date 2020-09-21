import React, { Component } from 'react'

export default class Filter extends Component {

    render() {
        const {Text, onClick} = this.props;
        return (
            <button
                onClick={onClick}
                style={{marginLeft:'10px'}}>
                {Text}
            </button>
        )
    }
}
