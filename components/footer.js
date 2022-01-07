import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Jonas Karmedar. All Rights Reserved. <br />
      Special thanks to <Link href="https://craftz.dog">craftzdog</Link>.
    </Box>
  )
}

export default Footer