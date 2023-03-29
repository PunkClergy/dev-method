
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

// 浅拷贝
// 用法:handleShallowClone(object)
// 解释:重新在堆中创建内存，拷贝前后对象的"基本数据"类型互不影响，但拷贝前后对象的"引用类型"因共享同一块内存，会相互影响。
const handleShallowClone = (source) =>{
    let target = {};
    for(let i in source) {
        if (source.hasOwnProperty(i)) {
            target[i] = source[i];
        }
    }
    return target;
}
// 深拷贝
// 原理:遍历对象、数组直到里边都是基本数据类型，然后再去复制，就是深度拷贝
// 用法:handleDeepClone(object)-
// 解释:从堆内存中开辟一个新的区域存放新对象，对对象中的子对象进行递归拷贝,拷贝前后的两个对象互不影响。
const handleDeepClone = (obj) => {
    if (obj === null) return obj; 
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== "object") return obj;
    let cloneObj = new obj.constructor();
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 实现一个递归拷贝
        cloneObj[key] = deepClone(obj[key]);
      }
    }
    return cloneObj;
}

module.exports  = {
    handleMultipleMusterSort,//sort排序&数组升序排列
    handleRemoveRepeat,//删除排序数组中的重复项
    handleShallowClone,//浅拷贝
    handleDeepClone,//深拷贝
}