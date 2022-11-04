// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV
const redirects = require("./redirects.config")

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['pbs.twimg.com']
  },
  redirects: () => {
    let paths = [];
    for (const path in redirects) {
      paths.push({
        source: `/${path}`,
        destination: redirects[path],
        permanent: false
      })
    }
    return paths;
  },
})
