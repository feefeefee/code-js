/* 
1.首先防抖函数是一个防止事件在一个指定的时间内多次点击的函数，
所以函数入参需要一个callback和wait时间；
2.debounce需要return一个函数出来给对应的事件去执行
3.在执行callback的同时开启一个定时器，时间为入参的wait，如3s后执行
4.如果在3s时间内再次触发callback的话，清除定时器，重新开始计时，防止多次触发
5.如果callback函数涉及到this的调用，如果直接在定时器内调用callback的话，这是this指向window，
所以需要进行一个apply显示绑定this。
6.JavaScript 在事件处理函数中会提供事件对象 event,所以在显示绑定this的时候还需参入参数
也就是event对象
*/

function debounce(fn, wait) {
  let timer;
  return function () {
    let _this = this;
    let args = arguments;
    console.log(arguments);

    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, wait);
  };
}

window.onresize = debounce(function () {
  console.log("debounce");
  console.log(this);
}, 1000);
const debounceBtn = document.getElementById("debounce");

debounceBtn.onclick = debounce(function (e) {
  console.log("我点击debounce啦啦啦");
  console.log(e);
  console.log(this);
}, 1000);
