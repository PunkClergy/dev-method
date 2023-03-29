

// 电话号码验证
const handleMPhone = (value) => {
    const reg = new RegExp(/^(1[3-9])\d{9}$/);
    if (reg.test(value)) {
      return true;
    } else {
        
      return false;
    }
};   

module.exports  = {
    handleMPhone, //电话号码验证


}