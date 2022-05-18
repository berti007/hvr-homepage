import { Container, Badge, Heading } from '@chakra-ui/react'
import { Title, Question, Rootflag } from '../../components/writeup'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Writeup = () => (
  <Layout title="Starting Point - Tier 0">
    <Container>
      <Title>
        Starting Point - Tier 0 <Badge>HTB</Badge>
      </Title>
      <P>
        Ah, the starting point of a new adventure. (See what I did there?!) Hack the Box, or short HTB, is a great place to
        get started with penetration testing. But lets get right into it and start hacking.
      </P>
      <br />
      <Heading as="h2" fontSize={20} mb={4}>
        Meow
      </Heading>

      <P>
        Meow is a easy place to start off and familerize yourself with the basic tools of pentesting. Therefore the questions ask about the basic tools required.
        If you want to know more, the walkthrough of HTB is a great start. I just summerized the answers for you:
      </P><br />

      <Question question="What does the acronym VM stand for?" answer="Virtual Machine" />
      <Question question="What tool do we use to interact with the operating system in order to start our VPN connection?" answer="Terminal" />
      <Question question="What service do we use to form our VPN connection?" answer="OpenVPN" />
      <Question question="What tool do we use to test our connection to the target?" answer="ping" />
      <Question question="What is the name of the tool we use to scan the targets ports?" answer="nmap" />
      <Question question="What service do we identify on port 23/tcp during our scans?" answer="telnet" />
      <Question question="What username ultimately works with the remote management login prompt for the target?" answer="root" />
      <span>Last but not least the root flag, which was pretty easy this time:</span><br />
      <Rootflag flag="HTB{b40abdfe23665f766f9c61ecba8a4c19}" />
    </Container>
  </Layout>
)

export default Writeup