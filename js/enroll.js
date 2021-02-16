// 获取所有id属性名节点
let userName =  document.getElementById("userName");
let code =  document.getElementById("code");
let email =  document.getElementById("email");
let namecode =  document.getElementById("name");
let phone =  document.getElementById("phone");
let authCode =  document.getElementById("authCode");



// 设置输入框对应正则表达式
//用户名正则
function autoUserName(){
    //设置正则表达式规则
    let regex = /^[A-z0-9_\u4e00-\u9fa5]{1,12}$/ig;
    console.log(regex);
    // 获取userName的value值（用户输入的值）
    let text = userName.value;
    // .test()方法把输入的值的设置的正则表达式做匹配，正确返回true，否则false
    let a = regex.test(text);
    // console.log(a);
    //取反匹配值，执行相对语句
    if(!a){
        alert("用户名格式错误，请重新填写");
    }
}



//密码
function codeUserName(){
    let regex = /^([A-z0-9.+-_]){6,12}$/ig;
    let text = code.value;
    let a = regex.test(text);
    if(!a){
        alert("密码格式错误，请重新填写");
    }
}

// 确认密码
function affUserName(){
    let affirmCode =  document.getElementById("affirmCode");
    let text = affirmCode.value;
    if(code.value != text){
        alert("请输入与第一次输入的一样的密码");
    }
}

//email
function emailUserName(){
    let regex = /^[\w]{1,60}@[\w]{1,60}\.[A-z0-9]{2,4}$/ig;
    let text = email.value;
    let a = regex.test(text);
    if(!a){
        alert("邮箱格式错误，请重新填写");
    }
}

//名字
function nameUserName(){
    let regex = /^[A-z0-9_\u4e00-\u9fa5]{1,12}$/ig;
    let text = namecode.value;
    let a = regex.test(text);
    if(!a){
        alert("姓名格式错误，请重新填写");
    }
}

//手机号
function phoneUserName(){
    let regex = /^[0-9]{11}$/ig;
    let text = phone.value;
    let a = regex.test(text);
    if(!a){
        alert("手机号码错误，请重新填写");
    }
}


// //获取验证码
// // 点击获取验证码，弹出弹框，任意2个随机数数相加

// function codeMa(){
//   //获取随机数
//   var numa = parseInt(Math.random() * 10);
//   var numb = parseInt(Math.random() * 10);
//   alert("第一个数：" + numa );
//   alert("第二个数：" + numb );
  
//     }

// function codeNum(){
//     var textNUm = authCode.value;
//     if(!(textNum = numa + numb)){
//         alert("请输入正确的验证码");
//     }
// }

