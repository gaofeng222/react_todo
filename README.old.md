# react_todo 项目的文档


> 大写字母衣开头的，都是组件

> ReactDOM.render 把组件渲染到指定的页面的

> react 组件里面必须要有一个函数render(){}

> jsx语法 `<App />`  { 表达式，不是语句，否则会报错 }

> `onClick={this.handleClick}` this指向的是组件

> `handleClick(){this.state.list.push('hello world!')}` this 指向的是按钮，按钮上没有state

> 父组件用属性的形式向子组件传递参数,子组件用this.props.【属性名】进行接收

> 子组件和父组件通信，子组件调用父组件传递来的方法;

> 添加class几种方法

- 元素上面加`style = {{backgorund:"#000",color:'#fff'}}`
- 元素上面不能用class 关键字 要用className="类名"
- 然后再import "样式表.css"
- 外层的包裹便签div,可以用React.Fragment替换,渲染后无外层div包裹