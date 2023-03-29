

// 手机号验证
// 用法:handleMPhone(value)
// 解释:输入手机号验证是否合法
const handleMPhone = (value) => {
    const reg = new RegExp(/^(1[3-9])\d{9}$/);
    if (reg.test(value)) {
      return true;
    } else {
      return false;
    }
};

module.exports  = {
    handleMPhone, //手机号正则验证
}