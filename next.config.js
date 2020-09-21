module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/set-up-git',
        permanent: false
      }
    ]
  },
  async rewrites() {
    return [
      // If the path exists, use the new page.
      {
        source: '/:path*',
        destination: '/:path*'
      },
      // Otherwise, forward all other requests to existing docs.
      // For example, `/en/github/getting-started-with-github/create-a-repo`
      // is not found in this app, so the request is forwarded.
      {
        source: '/:path*',
        destination: `https://docs.github.com/:path*`
      }
    ]
  }
}
