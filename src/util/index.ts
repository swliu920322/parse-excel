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

function tranObj(val) {
  const { information, dependencies, subscriptions } = val
  return {
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
  }
}

for (const path in routeFiles) {
  // subscriptions.map(i => role.add(...i.role))
  allRoutes.push({
    ...tranObj(routeFiles[path].default),
    id: path.split('/').pop().slice(0, -3)
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
const integrated = []

function matchDependency(item) {
  if (item.children) {
    if (item.children.length) {
      item.children.forEach(ii => {
        const detail = routeFiles[getFullPath(ii.id)]
        const defaultVal = detail?.default
        if (defaultVal) {
          const res = tranObj(detail?.default)
          integrated.push({
            par: item,
            ...res,
            category: 'Integration',
          })
          if (res.children?.length) {
            res.children.forEach(matchDependency)
          }
        }
      })
    }
  } else {
    const detail = routeFiles[getFullPath(item.id)]
    if (detail?.default) {
      const r = tranObj(detail?.default)
      console.log(r)
    }
  }
}

rootApp.forEach(matchDependency)
console.log({ rootApp, independentApp, needToDeal, integrated })
export { rootApp, independentApp, needToDeal, integrated }