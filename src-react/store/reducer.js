import {CHANGE_INPUT_VALUE,CHANGE_LIST_VALUE,ADD_TODO_ITEM,CHAXUN_TODO_ITEM,UPDATE_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes.js';

const defaultState={
	inputValue : '15',
	list:["11","12","13"]
};

export default (state=defaultState,action)=>{
	if(action.type===CHANGE_INPUT_VALUE){
		const newState=JSON.parse(JSON.stringify(state));
		newState.inputValue=action.value;
		return newState;
	}
	if(action.type===CHANGE_LIST_VALUE){
		const newState=JSON.parse(JSON.stringify(state));
		newState.list=action.value;
		return newState;
	}
	if(action.type===CHAXUN_TODO_ITEM){
		const newState=JSON.parse(JSON.stringify(state));
		newState.list=action.value;
		return newState;
	}
	if(action.type===ADD_TODO_ITEM){
		const newState=JSON.parse(JSON.stringify(state));
		var newValue=[action.id,newState.inputValue,10]
		newState.list.unshift(newValue);
		newState.inputValue='';
		return newState;
	}
	
	if(action.type===UPDATE_TODO_ITEM){
		const newState=JSON.parse(JSON.stringify(state));
		var oldvalue=newState.list[action.index][1]
		var newValue=[action.id,action.value,10]
		newState.list.splice(action.index,1,newValue);
		return newState;
	}
	if(action.type===DELETE_TODO_ITEM){
		const newState=JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1);
		return newState;
	}
	return state;
}