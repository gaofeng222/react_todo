/**
 * Created by gaofeng on 2018/10/7.
 */
import React, { Component } from 'react';

export default class TodoItem extends Component {
    constructor(props){
        super(props)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }
    handleDeleteClick(){
        const { handlerDelete,index } = this.props;
        handlerDelete(index)
    }
    render(){
        const { content } = this.props;
        return (
            <div>{content} <span onClick={this.handleDeleteClick}> x </span></div>
        )
    }
}