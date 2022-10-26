function countDown(time) {
  var now = +new Date();
  var inputTimes = +new Date(time);
  var times = (inputTimes - now) / 1000;
  var d = parseInt(times / 60 / 60 / 24);
  d = d < 10 ? "0" + d : d;
  var h = parseInt((times / 60 / 60) % 24);
  h = h < 10 ? "0" + h : h;
  var m = parseInt((times / 60) % 60);
  m = m < 10 ? "0" + m : m;
  var s = parseInt(times % 60);
  s = s < 10 ? "0" + s : s;
  return d + "天" + h + "时" + m + "分" + s + "秒";
}
console.log(countDown("2022-10-28 16:00:00"));
