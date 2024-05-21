// 节流函数 例：v-throttle:3000="throttleFn"
export default {
  mounted(el, binding) {
    const { value, arg } = binding
    if (typeof value !== 'function') return

    const duration = arg ? parseInt(arg) : 2000
    let timer = null
    el.__handleClick__ = function (event) {
      if (timer) clearTimeout(timer)

      if (!el.disabled) {
        el.disabled = true
        // is-disabled为element plus的类名，可以根据你的项目修改
        el.classList.add('is-disabled')
        value(event)
        timer = setTimeout(() => {
          el.disabled = false
          el.classList.remove('is-disabled')
        }, duration)
      }
    }
    el.addEventListener('click', el.__handleClick__)
  },
  beforeUnmount(el) {
    el.removeEventListener('click', el.__handleClick__)
  }
}
