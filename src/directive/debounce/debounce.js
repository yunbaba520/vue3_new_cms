// 防抖指令，参数需要是函数
export default {
  mounted(el, binding) {
    const { value } = binding
    if (typeof value !== 'function') return

    let timer = null
    el.__handleClick__ = function () {
      if (timer) clearInterval(timer)

      timer = setTimeout(() => {
        value()
      }, 500)
    }
    el.addEventListener('click', el.__handleClick__)
  },
  beforeUnmount(el) {
    el.removeEventListener('click', el.__handleClick__)
  }
}
