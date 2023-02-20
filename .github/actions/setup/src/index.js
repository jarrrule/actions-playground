const core = require('@actions/core')
const github = require('@actions/github')

const setNodeEnv = (env) => {
  if (env === 'dev') return 'development'
  if (env === 'stg') return 'staging'
}


try {
  const env = core.getInput('deploy-to')
  const branch = core.getInput('branch')
  console.log('do we have the banch ', branch)
  core.setOutput('node-env', setNodeEnv(env))
} catch (error) {
  core.setFailed(error.message)
}
