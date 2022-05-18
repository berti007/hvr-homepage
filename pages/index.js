import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, useColorModeValue, List, ListItem, Link, Icon } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a IT consultant based in Germany!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Jonas Karmedar
                        </Heading>
                        <p>Data Scientist / Developer / Self-Hoster </p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" diplay="inline-block" borderRadius="full" src="/images/profil_pic.png" alt="Profile Image" />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Jonas Karmedar is a freelancer and risk manager based in Frankfurt with a passion for building services/stuff that he wants.
                        He has a knack of things, from analyzing data, planning and designing all the way to solving real-life problems with code.
                        His curiostiy has lead him into many different fields from self-hosting your own server to native iOS Development and many things inbetween.
                        When not online, he loves spending time with his wife.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1989</BioYear>
                        Born in Freudenberg, Germany.
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Graduated with a masters degree in mathematics and computer science at the Westfaelische Wilhelms University Muenster.
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Worked at Accenture as a consultant.
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Works as a risk controller at KfW.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Music (Playing Drums & Guitar & Bass & Keys), Flying, Machine Learning
                    </Paragraph>
                </Section>

                <Section delay={0.6}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/berti007" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @berti007
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/JonasWanka" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoTwitter} />}
                                >
                                    @JonasWanka
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page