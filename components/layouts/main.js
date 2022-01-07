import Head from 'next/head'
import Navbar from '../navbar'
import { Box,Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>HvR Development</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.lg.md" pt={14}>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main