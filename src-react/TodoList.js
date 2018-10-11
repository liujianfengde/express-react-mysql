import React, {Component} from 'react'
import {Input,Button,List} from 'antd';
import 'antd/dist/antd.css';
import store  from './store';
import {getInputChangeAction,getAddItemAction,getListChangeAction,getChaxunChangeAction,getUpdateItemAction,getDeleteItemAction } from './store/actionCreators.js';
// import {ADD_TODO_ITEM} from './store/actionTypes.js';
import axios from "axios";

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state=store.getState()
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleStroeChange=this.handleStroeChange.bind(this)
    this.handleBtnChange=this.handleBtnChange.bind(this)
    this.handleItemUpdate=this.handleItemUpdate.bind(this)
    this.handleItemDelete=this.handleItemDelete.bind(this)
    this.handleBtnChaxun=this.handleBtnChaxun.bind(this)

    store.subscribe(this.handleStroeChange)
  }
  render() {
    return (
      <div>
        <div>
          <Input 
           placeholder={this.state.inputValue} 
           value={this.state.inputValue} 
           style={{width:"300px",margin:"30px"}}
           onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnChange}>提交</Button>
          <Button type="primary" style={{marginLeft:"10px"}} onClick={this.handleBtnChaxun}>查询</Button>
        </div>
          <List
            style={{width:'500px',margin:"30px"}}
            bordered
            dataSource={this.state.list}
            renderItem={(item,index) => (<List.Item style={{"lineHeight":'30px',position:"realtive"}}>{item[1]}
              <Button type="normal" style={{position:"absolute",right:"80px"}} onClick={this.handleItemUpdate.bind(this, index,item[0])}>修改</Button>
              <Button type="danger" style={{position:"absolute",right:"15px"}} onClick={this.handleItemDelete.bind(this, index,item[0])}>删除</Button>
              </List.Item>)}
          />
      </div>
    )
  }

  componentDidMount(){
    let  url="http://localhost:3001/data"
    axios.get(url)
      .then(function (response) {
        let data =response.data.data
        var data2= [];
        for (var i in data) {
            var item = [];
            for (var j in data[i]) item.push(data[i][j]);
            data2.push(item)
        }
        const action=getListChangeAction(data2)
        store.dispatch(action)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleBtnChaxun(){
    var name=this.state.inputValue;
    let header = {
      'content-type': 'application/json'
    }
    axios.post('http://localhost:3001/chaxun',{
       name:name,
    },{headers:header},{dataType:'jsonp'}).then(function(e){
        var data=e.data.data
        var item = [];
        var data2= [];
        for (var i in data) {
            var item = [];
            for (var j in data[i]) item.push(data[i][j]);
            data2.push(item)
        }
        const action=getChaxunChangeAction(data2)
        store.dispatch(action);
    })
  }

  handleInputChange(e){
    
    const action=getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStroeChange(){
    this.setState(store.getState())
  }

  handleBtnChange(){
    if(this.state.inputValue!==""){
      var name=this.state.inputValue;
      let header = {
        'content-type': 'application/json'
      }
      axios.post('http://localhost:3001/post',{
         name:name,
         age:'10'
      },{headers:header},{dataType:'jsonp'}).then(function(e){
          var data=e.data.data
          const action=getAddItemAction(data)
          store.dispatch(action);
      })
    }
  }



  handleItemUpdate(index,id){
    var id=id;
    var value=this.state.inputValue
    if(value!=""){
      let header = {
        'content-type': 'application/json'
      }
      axios.post('http://localhost:3001/genggai',{
         id:id,
         name:value
      },{headers:header},{dataType:'jsonp'}).then(function(){

      })
      const action=getUpdateItemAction(index,value,id); 
      store.dispatch(action);
    }
    

  }

  handleItemDelete(index,id){
    var id=id;
    let header = {
      'content-type': 'application/json'
    }
    axios.post('http://localhost:3001/id',{
       id:id
    },{headers:header},{dataType:'jsonp'}).then(function(){

    })
    const action=getDeleteItemAction(index); 
    store.dispatch(action);

  }
}