import core from '@actions/core'
import github from '@actions/github'
import { Octokit } from "@octokit/core"

try {
  const prNumber = core.getInput('pr-number');
  console.log(`Hello ${prNumber}!`);
  core.setOutput('jira-issues', ['NAP-1234', 'NAP-1235', 'NAP-1236', 'NAP-1237'])
  const token = core.getInput('token')
  console.log('can you see the token ', token)
} catch (error) {
  core.setFailed(error.message)
}

const octokit = new Octokit({
  auth: core.getInput('token')
})

await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}/commits', {
  owner: 'sainsburys-tech',
  repo: 'argos-pdp-ui-service',
  pull_number: '1719',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
