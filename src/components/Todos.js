import React, { Component } from 'react'
import AddTodo from "./AddTodo"
import ListContainer from "./ListContainer"
import Visible from "./Visible"
import { fetchTodoList } from '../actions'
import { connect } from 'react-redux'


const fetchToDoList = async () => {
    const respone = await fetch("https://redux-todo-web-backend.herokuapp.com/todo", {
        method:"GET",
        headers: {
            Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTk2MTI2MDMuODMzMDY2LCJleHAiOjE2MDAyMTc0MDMuODMzMDY2LCJhdWQiOiJ0YWVoZWUiLCJpc3MiOiJSZWR1eCBUb2RvIFdlYiBCYWNrZW5kIn0.wPH872FHUdxxGaFJN1BkfR8sX0eVoptsP5fQ_Q04DAc'
        }}
    )
    const json_response = await respone.json();

    return json_response
}


class Todos extends Component {
    async componentDidMount() {
        // const response = await fetch("https://redux-todo-web-backend.herokuapp.com/signup", {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         user: "taehee",
        //         password: "123123aaaa",
        //         passwordConfirm: "123123aaaa",
        //     }),
        // });
        // fetchToDoList(this.props.dispatch)
        const {data} = await fetchToDoList();
        this.props.dispatch(fetchTodoList(data))
    }        
    
    render() {
        return (
            <div>
                <AddTodo/>
                <ListContainer/>
                <Visible/>
            </div>
        )
    }
}

export default connect()(Todos)
