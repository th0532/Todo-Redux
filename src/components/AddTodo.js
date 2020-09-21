import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {

    state = {text:""}
    render() { 
        let input

        const onChangeValue = (e) => {
            const value = e.target.value;
            this.state.text= value;
        }

        const AddList = async() =>{
            const listValue = this.state.text;
            const respone = await fetch("https://redux-todo-web-backend.herokuapp.com/todo",{
                method: 'POST',
                headers: {
                    Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTk2MTI2MDMuODMzMDY2LCJleHAiOjE2MDAyMTc0MDMuODMzMDY2LCJhdWQiOiJ0YWVoZWUiLCJpc3MiOiJSZWR1eCBUb2RvIFdlYiBCYWNrZW5kIn0.wPH872FHUdxxGaFJN1BkfR8sX0eVoptsP5fQ_Q04DAc'
                },
                body: JSON.stringify({
                    text:listValue
                })
            })
            if (respone.status === 200){
                const json_response = await respone.json();
                console.log("Ok")
                input.value=""
                return json_response;
            }else{
                console.log("error")
            }
        }

        const onSubmit = async() =>{
             const {data} =  await AddList();
            this.props.dispatch(addTodo(data))
        }

        return (
            <div>
                <input type="text" onChange={onChangeValue} ref={node => (input=node)}></input>
                <button type="submit" onClick={onSubmit}>등록</button>
            </div>
        )
    }
}


export default connect()(AddTodo)
