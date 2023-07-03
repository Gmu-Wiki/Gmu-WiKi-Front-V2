class Observable {
  constructor() {
    this.observers = [];
  }

  setObserver(callback) {
    const observer = new Observer(callback);
    this.observers.push(observer);

    return observer;
  }

  notifyAll() {
    this.observers.forEach(observer => {
      observer.callback();
    });
  }

  removeAll() {
    this.observers = [];
  }
}

class Observer {
  callback;

  constructor(callback) {
    this.callback = callback;
  }
}

const observable = new Observable();

export default observable;
