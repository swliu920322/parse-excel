export const routeFiles = import.meta.globEager('@/output/detail/*.js')
const allRoutes = []

function getFullPath(id) {
  return `/src/output/detail/${id}.js`
}

console.log('routeFiles', routeFiles, Object.keys(routeFiles).length)

for (const path in routeFiles) {
  const val = routeFiles[path].default
  allRoutes.push({
    id: path.split('/').pop().slice(0, -3),
    name: val.information.name,
    children: val.dependencies.children.map((i) => ({
      name: i.displayName,
      id: i.id
    })),
    parent: val.dependencies.parent.map((i) => ({
      name: i.displayName,
      id: i.id
    }))
  })
}

// 先取走所有没有父类的，建立公共父类，标记使用过
// 再在这里里面找有children的，如果未匹配的里面有，插入父类，标记使用过
// 再在这里里面找有children的，如果未匹配的里面有，插入父类，标记使用过
const total = {
  name: 'App',
  children: allRoutes.filter((i) => {
    if (!i.parent.length) {
      return i.used = true
    }
  })
}

function searchChildren(item) {
  item.children.forEach(i => {
    const path = getFullPath(i.id)
    if (routeFiles[path]) {
      const val = routeFiles[path].default
      i.children = val.dependencies.children.map(i => ({
        name: i.displayName,
        id: i.id
      }))
      searchChildren(i)
    }
  })
}

searchChildren(total)

console.log('total', total)
console.log('allRoutes', allRoutes)
console.log(allRoutes.filter(i => !i.used))
export default total