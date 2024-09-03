'use strict';

class User {
  constructor(task) {
    this.task = task;
  }

  do() {
    this.task.run();
  }
}

class Task {
  constructor(message) {
    this.message = message;
  }

  run() {
    console.log(this.message);
  }
}

const task = new Task('писать код');

const user = new User(task);

user.do();
