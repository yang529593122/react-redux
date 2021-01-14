export const ADD_ITEM_VALUE='ADD_ITEM_VALUE';  // 添加
export const HTTP_GET_DATA='HTTP_GET_DATA';
export const DEL_ITEM='DEL_ITEM';
 
export const delItem=(data)=>({
    type:DEL_ITEM,
    data
})
export const addItemValue=(data)=>({
    type:ADD_ITEM_VALUE,
    data
})
export const httpGetData=(data)=>{
    return (dispatch) => {
        fetch(' http://wthrcdn.etouch.cn/weather_mini?city=%E5%8C%97%E4%BA%AC').then(res=>{
            dispatch({
                type:HTTP_GET_DATA,
                data:res.statusText
          })
        })
      }
}
