import core from '@actions/core'
import github from '@actions/github'
import { Octokit } from "@octokit/core"

try {
  const prNumber = core.getInput('pr-number');
  console.log(`Hello ${prNumber}!`);
  core.setOutput('jira-issues', ['NAP-1234', 'NAP-1235', 'NAP-1236', 'NAP-1237'])
} catch (error) {
  core.setFailed(error.message)
}


// const octokit = new Octokit({
//   auth: 'YOUR-TOKEN'
// })
//
// await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
//   owner: 'OWNER',
//   repo: 'REPO',
//   pull_number: 'PULL_NUMBER',
//   headers: {
//     'X-GitHub-Api-Version': '2022-11-28'
//   }
// })
