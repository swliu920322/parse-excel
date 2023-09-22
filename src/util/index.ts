export const routeFiles: any = import.meta.globEager('@/output/detail/*.js')
const allRoutes: any[] = []
const allRouteMap: Record<string, any> = {}

function getFullPath(id: string) {
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

function tranObj(val: any) {
  const { information, dependencies, subscriptions } = val
  return {
    name: information.name,
    children: dependencies.children.map((i:any) => ({
      name: i.displayName,
      id: i.id
    })),
    rootTargetDate: '',
    description: information.description,
    category: 'Independent',
    state: information.lifecycle?.asString || '',
    po: subscriptions.filter((i: any) => i.role.includes(ROLE.PO))?.[0],
    viewer: subscriptions.filter((i: any) => i.role.includes(ROLE.IT))?.[0],
    parent: dependencies.parent.map((i: any) => ({
      name: i.displayName,
      id: i.id
    }))
  }
}

for (const path in routeFiles) {
  // subscriptions.map(i => role.add(...i.role))
  const data = tranObj(routeFiles[path].default)
  allRouteMap[data.name] = data
  allRoutes.push({
    ...data,
    id: path.split('/')?.pop()?.slice(0, -3)
  })
}
const rootApp: any[] = []
const independentApp: any[] = []
const others: any[] = []
/*
*  没有父类的有子类的算root
*  没有父类没有子类的算independent
*
* */
allRoutes.forEach(i => {
  if (!i.parent.length) {
    if (i.children.length) {
      rootApp.push(i)
    } else {
      // 无父无子
      independentApp.push(i)
    }
  } else {
    others.push(i)
  }
})
const integrated: any[] = []

function matchDependency(item: any) {
  if (item?.children?.length) {
    item.children.forEach((ii: any) => {
      const detail: any = routeFiles[getFullPath(ii.id)]
      const defaultVal = detail?.default
      if (defaultVal) {
        const res = {
          ...tranObj(detail?.default),
          par: item,
          category: 'Integration'
        }
        integrated.push(res)
        if (res.children?.length) {
          res.children.forEach(matchDependency)
        }
      }
    })
  }
}

rootApp.forEach(matchDependency)
console.log({ rootApp, integrated, independentApp, others, allRoutes })
console.log(allRouteMap)
export { rootApp, integrated, independentApp, allRoutes }