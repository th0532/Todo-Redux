import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/list.css';
import {addTodo} from '../actions'


class List extends Component {    
    render() {
        const {id, isCompleted, text, toggle, removeList} = this.props;
        return (
            <li key={id}
            >
                <span 
                    onClick={toggle}
                    style={{textDecoration:isCompleted?'line-through':'none'}}
                    >{text}</span>
                <button type="button" 
                        style={{marginLeft:"100px"}}
                        onClick={removeList}
                >X</button>
            </li>
        )
    }
}


export default connect()(List)