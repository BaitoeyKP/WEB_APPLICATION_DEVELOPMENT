var i = 0;
function timedCount() {
  i = i + 1;
  msg = {
    date: new Date(),
    colorChange: i,
  };
  postMessage(msg);
  setTimeout("timedCount()", 1000);
}
timedCount();
