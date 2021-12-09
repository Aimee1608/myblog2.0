/*eslint-disable*/
function evanyouFun(dom) {
  if (dom) {
    var c = dom
    var x = c.getContext('2d')
    var pr = window.devicePixelRatio || 1
    var w = window.innerWidth
    var h = window.innerHeight
    var f = 90
    var q
    var m = Math
    var r = 0
    var u = m.PI * 2
    var v = m.cos
    var z = m.random
    c.width = w * pr
    c.height = h * pr
    x.scale(pr, pr)
    x.globalAlpha = 0.6
    function evanyou() {
      x.clearRect(0, 0, w, h)
      q = [
        { x: 0, y: h * 0.7 + f },
        { x: 0, y: h * 0.7 - f }
      ]
      while (q[1].x < w + f) d(q[0], q[1])
    }
    function d(i, j) {
      x.beginPath()
      x.moveTo(i.x, i.y)
      x.lineTo(j.x, j.y)
      var k = j.x + (z() * 2 - 0.25) * f
      var n = y(j.y)
      x.lineTo(k, n)
      x.closePath()
      r -= u / -50
      x.fillStyle =
        '#' +
        (
          ((v(r) * 127 + 128) << 16) |
          ((v(r + u / 3) * 127 + 128) << 8) |
          (v(r + (u / 3) * 2) * 127 + 128)
        ).toString(16)
      x.fill()
      q[0] = q[1]
      q[1] = { x: k, y: n }
    }
    function y(p) {
      var t = p + (z() * 2 - 1.1) * f
      return t > h || t < 0 ? y(p) : t
    }
    document.onclick = evanyou
    document.ontouchstart = evanyou
    evanyou()
  }
}
export default evanyouFun
/* eslint-enable */
