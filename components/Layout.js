import { MDXProvider } from '@mdx-js/react'
import { Link, Heading, Breadcrumb } from '@primer/components'
import NextLink from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

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
  h2: (props) => <Heading fontSize={4} mt={4} {...props} />,
  h3: (props) => <Heading as="h3" fontSize={2} mt={4} {...props} />,
  h4: (props) => <Heading as="h4" fontSize={2} mt={4} {...props} />
}

function Layout({ meta, children }) {
  const router = useRouter()

  return (
    <MDXProvider components={components}>
      <Head>
        <title>{`${meta.title} – GitHub Docs`}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://nextjs-primer.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GitHub Docs" />
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
