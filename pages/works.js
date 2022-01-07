import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item';
import Section from "../components/section";
import Layout from '../components/layouts/article';

import thumbCN2 from '../public/images/works/favicon.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="nextcloud" title="Nextcloud" thumbnail={thumbCN2}>
                            Nextcloud Hosting & Deployment
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="proxmox" title="Proxmox" thumbnail={thumbCN2}>
                            Proxmox Deployment
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Section delay={0.2}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        Old works
                    </Heading>
                </Section>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="cn2" title="Crossing Numbers 2" thumbnail={thumbCN2}>
                            A fun iOS Numbers Game
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works