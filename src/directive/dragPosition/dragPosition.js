let oldData = {}

export default {
  // 当被绑定的元素挂载到 DOM 中时……
  mounted(el, binding) {
    const { value } = binding
    let els = el
    // 传了参数，一般是限制只能某个子元素可以移动

    if (value) {
      if (!el.getElementsByClassName(value)[0]) {
        console.error('drag根据value获取子元素失败,请检查类名')
        return
      }
      els = el.getElementsByClassName(value)[0]
    }
    //el即为当前元素
    els.style.cursor = 'move'
    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const sty = el.currentStyle || window.getComputedStyle(el, null)
    oldData[value] = {
      oldLeft: sty.left,
      oldTop: sty.top
    }
    els.onmousedown = (e) => {
      //获取鼠标按下位置
      const disX = e.clientX
      const disY = e.clientY
      // 获取当前元素的定位信息
      // 获取到的值带px 正则匹配替换
      let styL, styT
      // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
      // +的作用是将字符串转为数字
      if (sty.left.includes('%')) {
        /* eslint-disable  */

        styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100)
        styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100)
      } else {
        styL = +sty.left.replace(/\px/g, '')
        styT = +sty.top.replace(/\px/g, '')
      }
      document.onmousemove = function (e) {
        e.preventDefault() // 移动时禁用默认事件
        // 通过事件委托，计算移动的距离
        const l = e.clientX - disX
        const t = e.clientY - disY
        // 移动当前元素
        el.style.left = `${l + styL}px`
        el.style.right = 'auto'
        el.style.top = `${t + styT}px`
        el.style.bottom = 'auto'
      }
      //鼠标弹起，移除相应事件
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
