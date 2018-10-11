import React, {Component} from 'react'
import {Input,Button,List} from 'antd';

//无状态组件，性能高
const TodoListUI =(props)=>{
    return (
      <div>
        <div>
          <Input 
           placeholder={props.inputValue} 
           value={props.inputValue} 
           style={{width:"300px",margin:"30px"}}
           onChange={props.handleInputChange}
          />
          <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
        </div>
          <List
            style={{width:'500px',margin:"30px"}}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (<List.Item onClick={(index) => {props.handleItemDelete(index)}}>{item}</List.Item>)}
          />
      </div>
    )
}


// class TodoListUI extends Component {
// 	 render() {
// 	    return (
// 	      <div>
// 	        <div>
// 	          <Input 
// 	           placeholder={this.props.inputValue} 
// 	           value={this.props.inputValue} 
// 	           style={{width:"300px",margin:"30px"}}
// 	           onChange={this.props.handleInputChange}
// 	          />
// 	          <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
// 	        </div>
// 	          <List
// 	            style={{width:'500px',margin:"30px"}}
// 	            bordered
// 	            dataSource={this.props.list}
// 	            renderItem={(item, index) => (<List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
// 	          />
// 	      </div>
// 	    )
// 	}
// }
export default TodoListUI;