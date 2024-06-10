import core from '@actions/core'
import {Octokit} from "@octokit/core"

const octokit = new Octokit({
  auth: core.getInput('token')
})

const makeRequest = async (repoName, prNumber) => {
  return await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}/commits', {
    owner: 'sainsburys-tech',
    repo: repoName,
    pull_number: prNumber,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}

const filterJiraIssues = (commits) => {
  return commits.data.filter(commit => {
    const jiraIssues = commit.commit.message.match(/(NAP-\d+)/g)
    if (jiraIssues) {
      return true
    } else {
      const author = commit.author.author
      console.log(`Commit by ${author} does not contain any JIRA issue`)
      return false
    }
  }).map(filteredCommit => filteredCommit.commit.message.match(/(NAP-\d+)/g))[0]
}

try {
  const prNumber = core.getInput('pr-number');
  const repoName = core.getInput('repo-name')
  const response = await makeRequest(repoName, prNumber)
  const filteredIssues = filterJiraIssues(response)
  core.setOutput('jira-issues', filteredIssues)
} catch (error) {
  core.setFailed(error.message)
}
