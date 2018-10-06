import React, { Component , Fragment } from 'react';
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  constructor(props){
      super(props);
      this.state = {
        list : [ ],
        inputValue : ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.handleFzClick = this.handleFzClick.bind(this)
  }
  handleClick(){
      this.setState({
          list : [...this.state.list,this.state.inputValue],
          inputValue : ' '
      })
  }
  handleChange(e){
      this.setState({
          inputValue : e.target.value
      })
  }
  handleDeleteClick(index){
      const list = [...this.state.list];
      list.splice(index,1);
      this.setState({
          list
      })
  }
  handleFzClick(index){
      this.handleDeleteClick(index)
  }
  getTodoList(){
      return (
        this.state.list.map( (item,index) => {
          return (
              <TodoItem
                    handlerDelete = {this.handleFzClick}
                    key={index} content={item} index={index}
              />
              )
        })
    )
  }
  render() {
    return (
      <Fragment>
          <div>
            <input  value={this.state.inputValue} onChange={this.handleChange} />
            <button className="red-btn" onClick={this.handleClick}>add</button>
          </div>
          <ul> {this.getTodoList()}</ul>
      </Fragment>
    );
  }
}

