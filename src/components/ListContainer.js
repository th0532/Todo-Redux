import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from "./List"
import { removeList, toggleList, activeVisble2 } from '../actions'
import todos from '../reducers'
import Visible from './Visible'

class ListContainer extends Component {
    render() {

        const remove = async(data) =>{
            const response = await fetch("https://redux-todo-web-backend.herokuapp.com/todo/"+data.id,{
                method: "DELETE",
                headers: {
                    Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTk2MTI2MDMuODMzMDY2LCJleHAiOjE2MDAyMTc0MDMuODMzMDY2LCJhdWQiOiJ0YWVoZWUiLCJpc3MiOiJSZWR1eCBUb2RvIFdlYiBCYWNrZW5kIn0.wPH872FHUdxxGaFJN1BkfR8sX0eVoptsP5fQ_Q04DAc'
                },
            })
            if (response.status === 204){
                this.props.dispatch(removeList(data))
                console.log("delete success")
            }else{
                console.log("error");
            }
        }
        
        const toggle = (data) =>{
            const dispatch = this.props.dispatch
            dispatch(toggleList(data))
        }

        const {todoList} = this.props;
        const {visible} = this.props.visible;
        const filteredTodoList = todoList.filter((todo) => {
            const dispatch = this.props.dispatch
            if (visible === 0){
                console.log(todoList)
                return todoList
            }else if(visible === 1){
                // dispatch(activeVisble2(todoList.filter(todo=>!todo.isCompleted)))
                console.log(todoList.filter(todo=>!todo.isCompleted))
                return todoList.filter(todo=>todo.isCompleted)
            }else{
                console.log(todoList.filter(todo=>todo.isCompleted))
                return todoList.filter(todo=>!todo.isCompleted)
            }
        })

        return (
            <ul>
                {todoList.map(data=>(
                    <List key = {data.id} isCompleted={data.isCompleted} text={data.text} toggle={()=>toggle(data)} removeList={()=>remove(data)}></List>
                ))}
            </ul>
        )
    }
}
function mapStateToProps(state) {
    return { todoList: state.todos, visible:state.visible}
}
  
export default connect(mapStateToProps)(ListContainer)

