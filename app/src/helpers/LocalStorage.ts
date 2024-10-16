export class LocalStorage {
  nameSpace: string;

  constructor(nameSpace: string) {
    this.nameSpace = nameSpace;
  }

  getKey(key: string) {
    return `${this.nameSpace}:${key}`;
  }

  getItem(key: string) {
    return localStorage.getItem(this.getKey(key));
  }

  setItem(key: string, value: string) {
    localStorage.setItem(this.getKey(key), value);
  }

  removeItem(key: string) {
    localStorage.removeItem(this.getKey(key));
  }

  clear() {
    localStorage.clear();
  }

  key(index: number) {
    return localStorage.key(index);
  }

  get length() {
    return localStorage.length;
  }
}
