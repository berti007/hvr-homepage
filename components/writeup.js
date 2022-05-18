import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/writeups">
      <Link>Writeups</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)

export const Question = ({ question, answer }) => (
  <Box>
    <span>
      {question}
    </span>
    <List ml={4} my={4}>
      <ListItem>
        <Meta>Answer</Meta>
        <span>{answer}</span>
      </ListItem>
    </List>
  </Box>
)

export const Rootflag = ({ flag }) => (
  <Box>
    <Badge colorScheme="red" mr={2}>
      rootFlag
    </Badge>
    <span>{flag}</span>
  </Box>
)