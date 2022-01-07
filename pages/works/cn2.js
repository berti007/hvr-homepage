import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Crossing Numbers 2">
    <Container>
      <Title>
        Crossing Numbers 2 <Badge>2014-2015</Badge>
      </Title>
      <P>
        Funny number game
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>objectiveC</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/favicon.png" alt="Inkdrop" />
      <WorkImage src="/images/works/favicon.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work