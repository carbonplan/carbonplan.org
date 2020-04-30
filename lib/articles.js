import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const directory = path.join(process.cwd(), 'research')

const walkSync = (dir, list = []) => {
  fs.readdirSync(dir).forEach(file => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      list = walkSync(path.join(dir, file), list)
    } else {
      if (path.extname(file) == '.md') {
        list = list.concat(path.join(dir, file))
      }
    }
  })
  return list
}

export function getArticles() {
  const files = walkSync(directory)
  const data = files.map(name => {
    const id = name.split('/').slice(-1)[0].replace(/\.md$/, '')
    const contents = fs.readFileSync(name, 'utf8')
    const result = matter(contents)
    return {
      id,
      ...result.data
    }
  })

  return data.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getArticleIds(prefix = '') {
  const files = fs.readdirSync(path.join(directory, prefix))

  return files.map(name => {
    return {
      params: {
        id: name.split('/').slice(-1)[0].replace(/\.md$/, '')
      }
    }
  })
}

export function getArticleData(prefix = '', id) {
  const fullPath = path.join(path.join(directory, prefix), `${id}.md`)
  const contents = fs.readFileSync(fullPath, 'utf8')

  const result = matter(contents)

  return {
    id,
    ...result.data
  }
}