import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WriteupGridItem } from '../components/grid-item';
import Section from "../components/section";
import Layout from '../components/layouts/article';

import thumbStartingPoint from '../public/images/writeups/startingpoint.png'
import thumbNC from '../public/images/works/Nextcloud.png'
import thumbPVE from '../public/images/works/Proxmox.png'

const Writeups = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    HTB - hack the box
                </Heading>
                <Heading as="h2" fontSize={18} mb={4}>
                    Starting point
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WriteupGridItem id="startingpoint_tier0" title="Tier 0" thumbnail={thumbStartingPoint}>
                            THE KEY IS A STRONG FOUNDATION
                        </WriteupGridItem>
                    </Section>
                    <Section>
                        <WriteupGridItem id="startingpoint_tier0" title="Tier 1" thumbnail={thumbStartingPoint}>
                            YOU NEED TO WALK BEFORE YOU CAN RUN
                        </WriteupGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.3}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        Projects in the works
                    </Heading>
                </Section>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WriteupGridItem id="pentesting" title="Pentesting" thumbnail={thumbPVE}>
                            Penetration testing of your server
                        </WriteupGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.6}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        Old works
                    </Heading>
                </Section>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WriteupGridItem id="cn2" title="Crossing Numbers 2" thumbnail={thumbPVE}>
                            A fun iOS Numbers Game
                        </WriteupGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Writeups