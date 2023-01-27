const core = require('@actions/core')
const github = require('@actions/github')

const brand = core.getInput('brand')
console.log(`what is the brand ${brand}`)
core.setOutput('deploy-suffix', `deploy-suffix from action ${brand}`)