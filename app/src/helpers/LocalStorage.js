export class LocalStorage {
  constructor(nameSpace) {
    this.nameSpace = nameSpace;
  }

  getKey(key) {
    return `${this.nameSpace}:${key}`;
  }

  getItem(key) {
    return localStorage.getItem(this.getKey(key));
  }

  setItem(key, value) {
    localStorage.setItem(this.getKey(key), value);
  }

  removeItem(key) {
    localStorage.removeItem(this.getKey(key));
  }

  clear() {
    localStorage.clear();
  }

  key(index) {
    return localStorage.key(index);
  }

  get length() {
    return localStorage.length;
  }
}
