const core = require('@actions/core')

const deploySuffix = core.getInput('deploy-suffix')
const placeholder = core.getInput('placeholder')
const brand = core.getInput('brand')

if (placeholder) {
  core.setOutput('value',  deploySuffix.replace(placeholder, brand))
} else {
  core.setOutput('value', deploySuffix)
}
