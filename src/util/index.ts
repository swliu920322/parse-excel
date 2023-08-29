export const routeFiles = import.meta.globEager('@/output/detail/*.js')
const allRoutes = []

function getFullPath(id) {
  return `/src/output/detail/${id}.js`
}

console.log('routeFiles', routeFiles, Object.keys(routeFiles).length)

enum ROLE {
  PO = 'Product Owner',
  IT = 'IT Delivery Responsible',
  USER = 'Expert User',
  Creator = 'Creator',
  IO = 'Information Owner',
  Architect = 'Architect',
  Developer = 'Developer'
}

for (const path in routeFiles) {
  const val = routeFiles[path].default
  const { information, dependencies, subscriptions } = val

  // subscriptions.map(i => role.add(...i.role))
  allRoutes.push({
    id: path.split('/').pop().slice(0, -3),
    name: information.name,
    children: dependencies.children.map((i) => ({
      name: i.displayName,
      id: i.id
    })),
    category: 'Independent',
    state: information.lifecycle?.asString || '',
    po: subscriptions.filter(i => i.role.includes(ROLE.PO))?.[0],
    viewer: subscriptions.filter(i => i.role.includes(ROLE.IT))?.[0],
    parent: dependencies.parent.map((i) => ({
      name: i.displayName,
      id: i.id
    }))
  })
}
console.log(allRoutes)
const rootApp = []
const independentApp = []
const needToDeal = []
allRoutes.forEach(i => {
  if (!i.parent.length) {
    if (i.children.length) {
      rootApp.push(i)
    } else {
      independentApp.push(i)
    }
  } else {
    needToDeal.push(i)
  }
})
console.log({ rootApp, independentApp, needToDeal })
export { rootApp, independentApp, needToDeal }