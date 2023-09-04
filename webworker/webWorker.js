const value = 10;

function timedCount() {
  for (let i = 0; i < 999999; i++) {
    console.log(i);
  }

  postMessage(value);
}

timedCount();
