const core = require('@actions/core')

try {
  const deploySuffix = core.getInput('deploy-suffix')
  const brand = core.getInput('brand')
  core.setOutput('value', deploySuffix.replace('*****', brand))
} catch (error) {
  core.setFailed(error.message)
}
