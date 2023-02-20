const core = require('@actions/core')
const github = require('@actions/github')

try {
  const deployTo = core.getInput('deploy-to')
  const branch = core.getInput('branch')
  console.log('do we have the banch ', branch)
  core.setOutput('node-env', 'sean darley')
  core.setOutput('clean-deploy-suffix', branch.replace('/', '').toLowerCase())
} catch (error) {
  core.setFailed(error.message)
}
