import {CHANGE_INPUT_VALUE,CHANGE_LIST_VALUE,ADD_TODO_ITEM,CHAXUN_TODO_ITEM,UPDATE_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes.js';

export const getInputChangeAction =(value)=>({
	type : CHANGE_INPUT_VALUE,
    value
})

export const getListChangeAction =(value)=>({
	type : CHANGE_LIST_VALUE,
    value
})

export const getChaxunChangeAction =(value)=>({
	type : CHAXUN_TODO_ITEM,
	value
})


export const getAddItemAction =(id)=>({
	type : ADD_TODO_ITEM,
	id
})


export const getUpdateItemAction =(index,value,id)=>({
	type : UPDATE_TODO_ITEM,
	index,
	value,
	id
})

export const getDeleteItemAction =(index)=>({
	type : DELETE_TODO_ITEM,
	index
})

