import React from 'react'
import { Heading, Divider, Card, CardBody, Image, Stack, Text, CardFooter, ButtonGroup, Button, Badge, Wrap } from '@chakra-ui/react'

export default async function projectsPage() {

    const hevt = [
        {
            name: 'EcoCar EV Team at Virgina Tech (HEVT)',
            description: 'Leading the development of high-level autonomous capabilities for the 2023 Cadillac LYRIQ in the EcoCar EV Challenge. This includes features like auto lane change, eco-adaptive cruise control, and vehicle-to-vehicle communication. The project utilizes motion planning, perception, and a ROS2-based software stack to interface with the CAN bus for vehicle control, running on a custom compute platform with a React-based web interface for monitoring and control.',
            comp_link: 'https://avtcseries.org/about-the-ecocar-ev-challenge/',
            team_link: 'https://www.linkedin.com/company/hevt/about/',
            image: 'project_images/hevt.png',
            tags: ['Python', 'ROS2', 'CAN protocol', 'Docker', 'C++', 'React', 'socket (TCP/IP) programming', 'VPN']
        },
    ]

    const client_projects = [
        {
            name: 'Agriculture Insurance LLM',
            date: 'September 2021',
            description: "Led the development of an interactive conversational assistant to simplify agricultural insurance decisions. Built using a Large Language Model (LLM) trained on Rainfall Index Insurance Standards and USDA data, the assistant offers clear, personalized guidance and visualizations. The project includes a user-friendly chat interface, a Flask API backend, and deployment on Virginia Tech's Endeavour cluster, showcasing the power of AI in demystifying complex insurance options.",
            link: 'https://vtechworks.lib.vt.edu/items/032f9fcd-05ca-487e-8c67-01b4b0f2ef76',
            code_link: 'https://github.com/sakethrajesh/AgInsuranceLLM',
            image: 'project_images/aginsllm.webp',
            tags: ['React', 'NextJS', 'Python', 'Flask', 'Redis', 'ChromaDB (Vector Database)', 'Docker', 'Kubernetes', 'LLM', 'Retrieval Augmented Generation', 'llama2', 'Ollama', 'gpt-4']
        },
    ]

    const hackathons = [
        {
            name: 'Powered Down',
            date: 'September 2021',
            description: 'Developed a multi-user, third-party compatible smart home lighting system at a 36 hour hackathon. Using GPS to track user location, it automatically controls lights and integrates with smart accessories from different companies.',
            winner: true,
            link: 'https://devpost.com/software/project-6ufisdb5k719',
            code_link: 'https://github.com/KeshavBhadauria-VT/HackViolet2023',
            image: 'project_images//powerdown.jpg',
            tags: ['React', 'Python', 'Flask', 'NoSQL DB', 'Firebase', 'Google Cloud Platform', 'Typescript']
        },
        {
            name: 'The Narrator',
            date: 'October 2021',
            description: 'A 24-hour hackathon where my team and I built a website that transforms stories from narration or text into shareable virtual picture books with live narration in multiple languages.',
            winner: false,
            link: 'https://devpost.com/software/the-narator',
            code_link: 'https://github.com/KeshavBhadauria-VT/hoohacks2023',
            image: 'project_images/narrator.png',
            tags: ['OpenAI Dalle Model', 'React', 'Python', 'Flask', 'MongoDB', 'Firebase', 'Google Cloud Platform', 'Typescript']
        },
        {
            name: 'Food Snap',
            date: 'November 2021',
            description: 'Developed an app, at a 24 hour hackathon, that uses a vision model and machine learning to generate recipes from user-taken food images. Users take a picture of their ingredients, and the app identifies the food, generates recipe options, and enables swipe-based selection. Liked recipes are saved to a dashboard for easy access.',
            winner: true,
            link: 'https://devpost.com/software/food-snap-q6apl5',
            code_link: 'https://github.com/sakethrajesh/FoodSnap',
            image: 'project_images//foodsnap.webp',
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Heroku']
        },
        {
            name: 'Application Stack',
            date: 'November 2021',
            description: 'A 24-hour hackathon where my team and I built a discord bot that keep track of job applications.',
            winner: true,
            link: 'https://devpost.com/software/application_stack',
            code_link: '',
            image: 'project_images/app_stack.png',
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Heroku']
        },
    ]

    const personal_projects = [
        {
            name: 'Youtube Q-A Chatbot Chrome Extension',
            description: 'Created a Chrome extension that lets users ask questions about YouTube videos in real-time. It uses a Retrieval-Augmented Generation (RAG) model to answer with evidence and timestamps from the video.',
            code_link: 'https://github.com/sakethrajesh/Youtube-Q-A-Chatbot',
            image: 'project_images//qallm.png',
            tags: ['React', 'Flask', 'llama3.1', 'Redis', 'Docker', 'Python']
        },
    ]

    return (
        <div>
            <Heading mt='10' >Projects</Heading>
            <Divider my='1' />

            <Heading as='h3' size='lg'>Design Team</Heading>
            <Divider my='1' />
            <div mb="10" >
                {
                    hevt.map((project, index) => {
                        return (
                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                key={index}
                                my='3'
                            >
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src={project.image}
                                    alt='Caffe Latte'
                                />

                                <Stack>
                                    <CardBody>
                                        <Heading size='md'>{project.name}</Heading>

                                        <Text py='2'>
                                            {project.description}
                                        </Text>
                                        <Wrap mt="3" direction='row'>
                                            {
                                                project.tags.map((tag, index) => {
                                                    return (
                                                        <Badge key={index} variant='subtle' colorScheme='green'>
                                                            {tag}
                                                        </Badge>
                                                    );
                                                })
                                            }
                                        </Wrap>
                                    </CardBody>

                                    <CardFooter>
                                        <Button variant='solid' color='green.200' mr='2'>
                                            <a href={project.comp_link} target='_blank'>Competition Info</a>
                                        </Button>
                                        <Button >
                                            <a href={project.team_link} target='_blank'>Team Info</a>
                                        </Button>
                                    </CardFooter>
                                </Stack>
                            </Card>
                        );
                    })
                }

            </div>

            <Heading mt='10' as='h3' size='lg'>Client Project</Heading>
            <Divider my='1' />
            <div mb="10" >
                {
                    client_projects.map((project, index) => {
                        return (
                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                key={index}
                                my='3'
                            >
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src={project.image}
                                    alt='Caffe Latte'
                                />

                                <Stack>
                                    <CardBody>
                                        <Heading size='md'>{project.name}</Heading>

                                        <Text py='2'>
                                            {project.description}
                                        </Text>
                                        <Wrap mt="3" direction='row'>
                                            {
                                                project.tags.map((tag, index) => {
                                                    return (
                                                        <Badge key={index} variant='subtle' colorScheme='green'>
                                                            {tag}
                                                        </Badge>
                                                    );
                                                })
                                            }
                                        </Wrap>
                                    </CardBody>


                                    <CardFooter>
                                        <Button variant='solid' color='green.200' mr='2'>
                                            <a href={project.link} target='_blank'>View Project</a>
                                        </Button>
                                        <Button >
                                            <a href={project.code_link} target='_blank'>See the Code</a>
                                        </Button>
                                    </CardFooter>
                                </Stack>
                            </Card>
                        );
                    })
                }
            </div>

            <Heading mt='10' as='h3' size='lg'>Personal Projects</Heading>
            <Divider my='1' />
            <div mb="10" >
                {
                    personal_projects.map((project, index) => {
                        return (
                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                key={index}
                                my='3'
                            >
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src={project.image}
                                    alt='Caffe Latte'
                                />

                                <Stack>
                                    <CardBody>
                                        <Heading size='md'>{project.name}</Heading>

                                        <Text py='2'>
                                            {project.description}
                                        </Text>
                                        <Wrap mt="3" direction='row'>
                                            {
                                                project.tags.map((tag, index) => {
                                                    return (
                                                        <Badge key={index} variant='subtle' colorScheme='green'>
                                                            {tag}
                                                        </Badge>
                                                    );
                                                })
                                            }
                                        </Wrap>
                                    </CardBody>


                                    <CardFooter>
                                        <Button >
                                            <a href={project.code_link} target='_blank'>See the Code</a>
                                        </Button>
                                    </CardFooter>
                                </Stack>
                            </Card>
                        );
                    })
                }
            </div>

            <Heading mt='10' as='h3' size='lg'>Hackathons</Heading>
            <Divider my='1' />
            <div mb="10" >
                {
                    hackathons.map((project, index) => {
                        return (
                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                key={index}
                                my='3'
                            >
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src={project.image}
                                    alt='Caffe Latte'
                                />

                                <Stack>
                                    <CardBody>
                                        <Heading size='md'>{project.name}</Heading>

                                        <Text py='2'>
                                            {project.description}
                                        </Text>
                                        {
                                            project.winner ? <Badge variant='solid' colorScheme='yellow'>Prize Winner</Badge> : null
                                        }
                                        <Wrap mt="3" direction='row'>
                                            {
                                                project.tags.map((tag, index) => {
                                                    return (
                                                        <Badge key={index} variant='subtle' colorScheme='green'>
                                                            {tag}
                                                        </Badge>
                                                    );
                                                })
                                            }
                                        </Wrap>
                                    </CardBody>


                                    <CardFooter>
                                        <Button variant='solid' color='green.200' mr='2'>
                                            <a href={project.link} target='_blank'>View Project</a>
                                        </Button>
                                        <Button >
                                            <a href={project.code_link} target='_blank'>See the Code</a>
                                        </Button>
                                    </CardFooter>
                                </Stack>
                            </Card>
                        );
                    })
                }
            </div>


        </div>
    )
}
