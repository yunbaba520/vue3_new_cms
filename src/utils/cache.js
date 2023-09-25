class Cache {
  constructor(type) {
    this.storage = type === 'local' ? localStorage : sessionStorage
  }
  setCache(key, value) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }
  getCache(key) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  removeCache(key) {
    this.storage.removeItem(key)
  }
  clearCache() {
    this.storage.clear()
  }
}

const localCache = new Cache('local')
const sessionCache = new Cache('session')
export { localCache, sessionCache }
