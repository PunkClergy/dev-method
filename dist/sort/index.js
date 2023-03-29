
// sort排序
// 用法:handleMultipleMusterSort(...arr)
// 解释:多个数组的合并&升序排列
const handleMultipleMusterSort =  (...arguments)=> {
    let array = []
    let newArray = array.concat(...arguments)
    return newArray.sort((a,b)=>{return a-b})
};

// 删除排序数组中的重复项(5种排序)
// 用法:handleRemoveRepeat([...])
// 解释:给定⼀个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现⼀次
const handleRemoveRepeat =  (params)=> {
    // 1、利用了Set结构不能接收重复数据的特点
        let newArray = [...new Set(params)]; 
    // 2、利用 filter() + indexOf()去重
        // let newArray = params.filter((item,index)=>{
        //     return params.indexOf(item) === index;  // indexOf 只能查找到第一个  
        // })
    // 3、利用for 循环 搭配 indexOf 去重
		// let newArray=[]; 
		// for(let i=0;i<params.length;i++) {
		//   if(newArray.indexOf(params[i]) === -1) { 
        //     newArray.push(params[i]);
		//   }
    	// }
    // 4、借助新数组 通过 indexOf 方法判断当前元素在数组中的索引，如果与循环的下标相等则添加到新数组中
        // let newArray = [];
        // for (let i = 0; i < params.length; i++) {
        //     if (params.indexOf(params[i]) == i) {
        //         newArray.push(params[i]);
        //     }
        // }
    // 5、利用includes实现数组去重
        // let newArray = [];
        // for(i=0; i<params.length; i++){
        //     if(!newArray.includes(params[i])){
        //         newArray.push(params[i])
        //     }
        // }
    return newArray
};


module.exports  = {
    handleMultipleMusterSort,//sort排序&数组升序排列
    handleRemoveRepeat,//删除排序数组中的重复项
}