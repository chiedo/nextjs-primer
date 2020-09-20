import { MDXProvider } from '@mdx-js/react'
import { Link, Heading, Breadcrumb } from '@primer/components'
import NextLink from 'next/link'
import Head from 'next/head'

const A = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link underline={false} {...props} />
      </NextLink>
    )
  }

  return <Link underline={false} {...props} />
}

const components = {
  a: A,
  h2: (props) => <Heading fontSize={5} mb={2} {...props} />,
  h3: (props) => <Heading as="h3" fontSize={4} mb={2} {...props} />,
  h4: (props) => <Heading as="h4" fontSize={3} mb={2} {...props} />
}

function Layout({ meta, children }) {
  return (
    <MDXProvider components={components}>
      <Head>
        <title>{`${meta.title} – GitHub Docs`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" context={meta.description} />
      </Head>
      <Breadcrumb mb={4}>
        <Breadcrumb.Item href="/en/github">GitHub.com</Breadcrumb.Item>
        <Breadcrumb.Item href="/en/github/getting-started-with-github">
          Getting started
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/en/github/getting-started-with-github/quickstart">
          Quickstart
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#" selected>
          Set up Git
        </Breadcrumb.Item>
      </Breadcrumb>
      <Heading as="h1" fontSize={6} mb={2}>
        {meta.title}
      </Heading>
      {children}
    </MDXProvider>
  )
}

export default Layout
