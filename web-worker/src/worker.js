const workercode = () => {
  // eslint-disable-next-line no-restricted-globals
  self.onmessage = function (e) {
    console.log("Message received from main script");
    setTimeout(() => {
      var workerResult = "Received from main: " + e.data;
      console.log("Posting message back to main script");
      for (let i = 0; i < 555555; i++) {
        console.log(i);
      }

      // eslint-disable-next-line no-restricted-globals
      self.postMessage(workerResult);
    }, 3000);
  };
};

let code = workercode.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

const blob = new Blob([code], { type: "application/javascript" });
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;
