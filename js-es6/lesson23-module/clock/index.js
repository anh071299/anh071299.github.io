class Stopwatch {
  constructor(id, delay = 100) {
    this.delay = delay;
    this.state = "paused";
    this.display = document.getElementById(id);
    this.value = 0;
    this.recordNo = 1;
    this.records = document.getElementById("records");
  }

  formatTimer(ms) {
    let minutes = Math.floor(ms / 60000);
    let seconds = Math.floor((ms - minutes * 60000) / 1000);
    let ds = Math.floor((ms - minutes * 60000 - seconds * 1000) / 100);

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return minutes + ":" + seconds + "." + ds;
  }

  update() {
    if (this.state == "running") {
      this.value += this.delay;
    }
    this.display.innerHTML = this.formatTimer(this.value);
  }

  start() {
    if (this.state == "paused") {
      this.state = "running";
        let t = this;
        this.interval = setInterval(function () {
          t.update();
        }, this.delay);
      
    }
  }

  stop() {
    if (this.state == "running") {
      this.state = "paused";
        clearInterval(this.interval);
    }
  }

  reset() {
    clearInterval(this.interval);
    this.stop();
    this.value = 0;
    this.update();
    this.records.innerHTML = "";
    this.recordNo = 1;
    this.storeLaps();
    
  }

  record() {
    this.records.innerHTML += `# ${this.recordNo} ${this.display.innerHTML} <br>`;
    this.recordNo++;
    this.storeLaps();
  }

  storeLaps() {
    window.sessionStorage.setItem("recordList", this.records.innerHTML);
  }

  getLaps() {
    this.records.innerHTML = window.sessionStorage.getItem("recordList");
  }
}
stopwatch = new Stopwatch("stopwatch");
