const core = require('@actions/core')
const github = require('@actions/github');

try {
  const prNumber = core.getInput('pr-number');
  console.log(`Hello ${prNumber}!`);
  core.setOutput('jira-issues', ['NAP-1234', 'NAP-1235', 'NAP-1236', 'NAP-1237'])
} catch (error) {
  core.setFailed(error.message)
}
