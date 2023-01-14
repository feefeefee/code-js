/* 
1.节流函数指高频事件触发，但在 n 秒内只会执行一次；
2.节流函数和防抖函数一样入参需要一个callback和wait时间；
3.throttle函数内有一个闭包，当绑定的事件触发时，如果没有timer定时器的话会产生一个定时器，
在wait规定的时间内，多次点击都只会产生一个定时器，而在wait时间到了之后，会把timer定时器先为null，
然后在执行定时器内的函数；
4. 所以在wait时间内不管点击多次，只会有一个定时器发生，也就是throttle在n秒只执行一次‘
5.同样的为了拿到正确的this指向和Event对象所以对callback进行了apply显示绑定

*/

function throttle(fn, wait) {
  let timer;
  return function () {
    let _this = this;
    let args = arguments;
    console.log("timer==", timer);

    if (!timer) {
      timer = setTimeout(function () {
        console.log("timer++++,", timer);

        timer = null;
        fn.apply(_this, args);
      }, wait);
      console.log("timer----,", timer);
    }
  };
}

const throttleBtn = document.getElementById("throttle");

throttleBtn.onclick = throttle(function (e) {
  console.log("我点击throttle啦啦啦");
  console.log(e);
  console.log(this);
}, 2000);
