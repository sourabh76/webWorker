var count = 0;

function timedCount() {
  count = count + 1;
  postMessage(count);
  setTimeout("timedCount()", 1000);
}

timedCount();
