import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Nextcloud">
    <Container>
      <Title>
        Nextcloud <Badge>2021-present</Badge>
      </Title>
      <P>
        Nextcloud is a suite of client-server software for creating and using file hosting services. It is enterprise-ready with comprehensive support options. Being free and open-source software, anyone is allowed to install and operate it on their own private server devices.

        Nextcloud is functionally similar to Dropbox, Office 365 or Google Drive when used with its integrated office suite solutions Collabora Online or OnlyOffice. It can be hosted in the cloud or on-premises. It is scalable from home office solutions based on the low cost Raspberry Pi all the way through to full sized data centre solutions that support millions of users.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, Javascript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/showNC1.png" alt="Nextcloud" />
    </Container>
  </Layout>
)

export default Work