
const utils= require('../utils')
// 金额千位符处理
// 用法:handleNumFormat(245435342)
// 解释:金额达到4位字段增加','
const handleNumFormat =(params)=>{
    let res = params.toString().replace(/\d+/, (n)=>{ 
        // 先提取整数部分
        return n.replace(/(\d)(?=(\d{3})+$)/g,($1)=>{
            return $1+",";
        });
    })
    return res;
}

// 数据精度问题
// 用法：handlePrecision(0.1,0.2,'add/sub/mul/div')
// 解释:处理精度问题
const handlePrecision =(arg1,agr2,type = 'add')=>{
    // 开始循环校验
    switch (type) {
        case 'add': //加法
        return utils.dispatchPrecisionAdd(arg1,agr2)
        case 'sub': //减法
        return utils.dispatchPrecisionSub(arg1,agr2)
        case 'mul': //乘法
        return utils.dispatchPrecisionMul(arg1,agr2)
        case 'div': //除法
        return utils.dispatchPrecisionDiv(arg1,agr2)
    }
}

module.exports  = {
    handleNumFormat,//金额千位符处理
    handlePrecision,//处理计算精度问题
}