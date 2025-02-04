module.exports = {
  "ci": {
    "collect": {
      "url": [process.env.TEST_URL],
      "numberOfRuns": 3
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "failFast": false
    },
    "upload": {
      "target": "filesystem",
      "outputDir": ".lighthouseci"
    }
  }
}