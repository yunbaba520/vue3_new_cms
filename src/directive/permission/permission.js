// 校验是否拥有权限，需要权限按钮数组 [] ,根据传过来的值判断是否显示el

export default {
  mounted(el, binding) {
    const { value } = binding
    if (!value) return
    // 可根据自己的业务修改此处实现逻辑
    if (!['100', '101', '102'].includes(value)) {
      el.style.display = 'none'
    } else {
      el.style.display = 'auto'
    }
  }
}
