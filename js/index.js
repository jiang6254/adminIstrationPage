//获取imgList
let imgList = document.getElementById("imgList");
//获取页面中所有的img标签
let imgArr = document.getElementsByTagName("img");
//设置imgList的宽度
imgList.style.width = 390*imgArr.length+"px";
//默认显示图片的索引
let index = 0;

//开启自动切换图片
autoChange();

//创建一个方法用来设置选中的a
function setA(){
    //判断当前索引是否是最后一张图片
    if(index >= imgArr.length - 1){
        //则将index设置为0
        index = 0;  
        //此时显示的最后一张图片，而最后一张图片和第一张是一摸一样
        //通过CSS将最后一张切换成第一张
        imgList.style.left = 0;
    }
};

//定义一个自动切换的定时器的标识
let timer;
//创建一个函数，用来开启自动切换图片
function autoChange(){
    //开启一个定时器，用来定时去切换图片
    timer = setInterval(function(){
        //使索引自增
        index++;
        //判断index的值
        index %= imgArr.length;
        //执行动画，切换图片
        move(imgList , "left" , -390*index , 20 , function(){
            //修改导航按钮
            setA();
        });
    },2000);
}

//兼容浏览器获取外联css样式
function getElementStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}






