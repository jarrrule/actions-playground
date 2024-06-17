import core from '@actions/core'
import {Octokit} from "@octokit/core"

const octokit = new Octokit({
  auth: core.getInput('token')
})

const makeRequest = async (repoOwner, repoName, prNumber) => {
  return await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}/commits', {
    owner: repoOwner,
    repo: repoName,
    pull_number: prNumber,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}

const filterJiraIssues = (commits, regex) => {
  const regexObj = new RegExp(regex)
  return [...new Set(commits.data.filter(commit => {
    const jiraIssues = commit.commit.message.match(regexObj)
    if (jiraIssues?.length) {
      return true
    } else {
      const author = commit.commit.author.name
      console.log(`Commit by ${author} does not contain any JIRA issue`)
      return false
    }
  }).map(filteredCommit => filteredCommit.commit.message.match(regexObj)[0]))]
}

try {
  const prNumber = core.getInput('pr-number')
  const repoName = core.getInput('repo-name')
  const repoOwner = core.getInput('repo-owner')
  const issueRegex = core.getInput('issue-regex')
  const response = await makeRequest(repoOwner, repoName, prNumber)
  const filteredIssues = filterJiraIssues(response, issueRegex)
  core.setOutput('jira-issues', filteredIssues)
} catch (error) {
  core.setFailed(error.message)
}
