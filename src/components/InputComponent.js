import  { useState } from 'react';
import { connect } from 'react-redux'
import {addItemValue,httpGetData} from "../store/actions-type"
import {  Input,Button } from "antd"
function InputComponent (props) {
    const { onIncreaseClick,getHttpData ,httpdata} =props
    getHttpData()
    const [ itemValue, setValue ] = useState('')
    const setInputItem = (e) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <Input placeholder="请输入添加内容"  onChange={(e)=>{setInputItem(e)}}  />
            <Button style={{margin:"20px 0"}} onClick={()=>{onIncreaseClick(itemValue)}}>添加</Button>
            <p>{httpdata}</p>
        </div>
    )
}

export default connect((state)=>{
    return {
        httpdata:state.httpdata
    }
}, (dispatch)=>{
    return {
        onIncreaseClick:(data) => dispatch(addItemValue(data)),
        getHttpData:(data)=>  dispatch(httpGetData(data)) 
    }
})(InputComponent)