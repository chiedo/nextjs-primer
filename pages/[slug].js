import Layout from '~/components/Layout'
import { getAllDocs, getDocBySlug } from '~/lib/docs'

export default function Doc({ meta, content }) {
  return <Layout meta={meta}>{content}</Layout>
}

export async function getStaticProps({ params }) {
  const doc = getDocBySlug(params.slug)

  return {
    props: {
      ...doc
    }
  }
}

export async function getStaticPaths() {
  const docs = getAllDocs()

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug
        }
      }
    }),
    fallback: 'unstable_blocking'
  }
}
