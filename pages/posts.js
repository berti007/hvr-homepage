import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import favIcon from '../public/images/works/favicon.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Testpost"
            thumbnail={favIcon}
            href="https://www.devdactic.com/"
          />
          <GridItem
            title="Testpost2"
            thumbnail={favIcon}
            href="https://www.devdactic.com/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts