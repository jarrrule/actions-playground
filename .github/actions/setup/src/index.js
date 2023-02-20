const core = require('@actions/core')

try {
  const deployTo = core.getInput('deploy-to')
  console.log('inside action ', deployTo)
  core.setOutput('node-env', 'sean darley')
  core.setOutput('clean-url', 'url that will be cleaned')
} catch (error) {
  core.setFailed(error.message)
}
