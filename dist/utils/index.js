// 精度问题
// 加法
const dispatchPrecisionAdd = (arg1, arg2) =>{
    let flag_1, flag_2, flag;
    try {
        flag_1 = arg1.toString().split(".")[1].length;
    } catch (e) {
        flag_1 = 0;
    }
    try {
        flag_2 = arg2.toString().split(".")[1].length;
    } catch (e) {
        flag_2 = 0;
    }
    flag = Math.pow(10, Math.max(flag_1, flag_2));
    return (dispatchPrecisionMul(arg1, flag) + dispatchPrecisionMul(arg2, flag)) / flag; // 调用乘法封装
}
// 减法
const dispatchPrecisionSub = (arg1, arg2)=>{
    let flag_1, flag_2, flag_m, flag_n;
    try {
        flag_1 = arg1.toString.split(".")[1].length;
    } catch (e) {
        flag_1 = 0;
    }
    try {
        flag_2 = arg2.toString().split(".")[1].length;
    } catch (e) {
        flag_2 = 0;
    }
    flag_m = Math.pow(10, Math.max(flag_1, flag_2));
    flag_n = (flag_1 >= flag_2) ? flag_1 : flag_2;
    return ((arg1 * flag_m - arg2 * flag_m) / flag_m).toFixed(flag_n);
}
// 乘法
const dispatchPrecisionMul = (arg1, arg2) =>{
    let flag = 0,flag_1 = arg1.toString(),flag_2 = arg2.toString();
    try {
        flag += flag_1.split(".")[1].length;
    } catch (e) {
    }
    try {
        flag += flag_2.split(".")[1].length;
    } catch (e) { 
    }
    return Number(flag_1.replace(".", "")) * Number(flag_2.replace(".", "")) / Math.pow(10, flag);
}
//除法
const dispatchPrecisionDiv = (arg1, arg2)=>{
    let flag = 0, flag_t = 0, flag_1, flag_2;
    try {
        flag = arg1.toString().split(".")[1].length;
    } catch (e) { 
    }
    try {
        flag_t = arg2.toString().split(".")[1].length;
    } catch (e) { 
    }
    flag_1 = Number(arg1.toString().replace(".", ""));
    flag_2 = Number(arg2.toString().replace(".", ""));
    return (flag_1 / flag_2) * Math.pow(10, flag_t - flag);
}

module.exports  = {
    dispatchPrecisionAdd,//加法
    dispatchPrecisionSub,//减法
    dispatchPrecisionMul,//乘法
    dispatchPrecisionDiv,//除法
}