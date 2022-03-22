let arr = [
  { name: '原创', value: 0 },
  { name: '转载', value: 1 },
  { name: '翻译', value: 2 }
]
let map = new Map()
arr.forEach(p => {
  map.set(p.value,p.name)
})

module.exports = {
  provenance : map,
  arr:arr
}
