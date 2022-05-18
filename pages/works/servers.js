import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Nextcloud">
    <Container>
      <Title>
        Server Hosting <Badge>2020-present</Badge>
      </Title>
      <P>
        I started off with a small Raspberry Pi many years ago.
        Now I am hosting my own Proxmox server at home with different services on different virtualizing levels.
        <br />
        Also maintaining a Windows server for a non-profit since 2021 with all-around service from troubleshooting to regular updates.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux/Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Hypervisior</Meta>
          <span>Proxmox</span>
        </ListItem>
        <ListItem>
          <Meta>Virtualization</Meta>
          <span>QEMU, LXC, Docker</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/showNC1.png" alt="Nextcloud" />
    </Container>
  </Layout>
)

export default Work