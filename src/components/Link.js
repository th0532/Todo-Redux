import React, { Component } from 'react'
import { connect } from 'react-redux'
import Filter from "./Filter"
import { allVisble, activeVisble, completedVisble } from '../actions'
import ListContainer from "./ListContainer"

class Visible extends Component {
    render() {
        const {todoList} = this.props;

        const FilterVisible = (type) =>{
            switch(type){
                case 'ALL':
                    return this.props.dispatch(allVisble(todoList))
                case 'Active':
                    return this.props.dispatch(activeVisble(todoList.filter(todo => !todo.isCompleted)))
                case 'Completed':
                    return this.props.dispatch(completedVisble(todoList.filter(todo => todo.isCompleted)))
                default:
                    throw new Error('Unknown filter:')
            }
        }
        return (
            <div>
                <Filter Text={"All"} onClick={()=>FilterVisible("ALL")}></Filter>
                <Filter Text={"Active"} onClick={()=>FilterVisible("Active")}></Filter>
                <Filter Text={"Completed"} onClick={()=>FilterVisible("Completed")}></Filter>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { todoList: state.todos}
}
  

export default connect(mapStateToProps)(Visible)

