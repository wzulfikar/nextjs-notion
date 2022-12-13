const { twitter, github, linkedin } = require('./site.config')

const githubProfile = `https://github.com/${github}`

const redirects = {
  calendly: `https://calendly.com/wzulfikar`,
  notion: `https://www.notion.so/wzulfikar/dbe6b9fe47244464b1d3832969426f9e`,
  twitter: `https://twitter.com/${twitter}`,
  github: githubProfile,
  linkedin: `https://linkedin.com/in/${linkedin}`,
  notes: 'https://gist.github.com/wzulfikar/ba2f58d7aeeb3cf53743316f96f91594',
  logs: 'https://gist.github.com/wzulfikar/5ea5779d7f2ea0e27809e94e7904f93d',
  scripts: 'https://github.com/wzulfikar/scripts',

  // Github repos
  facegrep: `${githubProfile}/facegrep`,

  // Other redirects
  'node-design-patterns': 'https://github.com/nimit95/Real-world-Design-Patterns-Node-JS/blob/master/docs.md',
  abbr: 'https://gist.github.com/wzulfikar/1890ad2a381347ae060f7f877b98656d',
}

module.exports = redirects;
