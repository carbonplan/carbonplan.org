const fs = require('fs')

// let raw = fs.readFileSync('components/figure/data/index.js');
// let data = JSON.parse(raw)



const data = require('./components/figure/data/index.js')

const projects = data.projects.map((d) => {
  return {
    id: d.id,
    tags: d.tags,
    volume: d.metrics[1].value,
    permanence: d.metrics[3].value,
  }
})

console.log(projects)

fs.writeFileSync('data.json', JSON.stringify(projects))