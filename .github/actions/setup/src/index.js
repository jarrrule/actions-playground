const core = require('@actions/core')

const getNodeEnv = (env) => {
  if (env === 'dev') return 'development'
  if (env === 'stg') return 'staging'
}

const getCleanDeploySuffix = (deploySuffix) => {
  if (!deploySuffix) return ''
  return `-${deploySuffix.replaceAll('/', '-').toLowerCase()}`
}

try {
  const env = core.getInput('env')
  const deploySuffix = core.getInput('deploy-suffix')
  core.setOutput('node-env', getNodeEnv(env))
  core.setOutput('brand-deploy-suffix', `${getCleanDeploySuffix(deploySuffix)}`)
} catch (error) {
  core.setFailed(error.message)
}
