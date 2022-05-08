import React from 'react';
import {
  Box,
  Stack,
  Text,
  Heading,
  VStack,
  UnorderedList,
  ListItem,
  Link
} from '@chakra-ui/react';
import { RoughNotation } from 'react-rough-notation';

function About() {
  return (
    <Box py="5">
      <Stack spacing={9}>
        <VStack align={['center','left']}>
          <Text fontSize="2xl">
            Hey there! My name is 
            <RoughNotation type="underline" color="#2D3748" show="true" customElement='color'>
            Mulia Hartawan Negara.
            </RoughNotation> 👋
          </Text>
          <Heading as="h2" size="lg">
          <RoughNotation type="highlight" 
          color="#BEE3F8" show="true">
              About Me
          </RoughNotation>
            </Heading>
          <Stack spacing="5">
            <Text fontSize="lg">                                                                                                                                                                                                                          
              I am a software engineer specialized in frontend development,
              creating web based applications from landing pages and company
              profiles, to internal dashboards and information systems.
            </Text>
            <Text fontSize="lg">
              Born and raised in 🇮🇩 Surabaya, Indonesia. Currently based on 
              Cikarang, Indonesia. Majored my bachelor's degree on Informatics
              at Institut Teknologi Adhi Tama Surabaya on 2021. Currently doing
              open source projects as myself and on Koding Ninja. Previously
              organized SurabayaJS meetups and a short time initialized and
              maintained Deno Land Indonesia and Frontend Indonesia.
            </Text>
            <Text fontSize="lg">
              Started programming on backend development creating an internal
              content management system for my campus practicum management using
              Laravel and Voyager. After a year or two I changed course on doing
              frontend development, which then took interest on the 🍞 Jamstack
              ecosystem and continue develop and experiment with until present
              day.
            </Text>
            <Text fontSize="lg">
              Reach out via email at ✉️ hello@griko.id, or via Twitter at 🐤
              @griko_nibras.
            </Text>
            <Text fontSize="lg">
              View my resume in PDF format or online via resume.io.
            </Text>
          </Stack>
            <Heading as="h2" size="lg">
          <RoughNotation type="highlight" color="#BEE3F8" show="true">
              Work Experience
          </RoughNotation>
            </Heading>
          <Stack>
            <UnorderedList>
              <ListItem>Fullstack Developer At <Link color='blue.400' href="https://aksamedia.co.id/"> Aksamedia </Link>(December 2021 - Present)</ListItem>
              <ListItem>Fullstack Developer At <Link color='blue.400' href="https://vanverglobal.com/"> PT Vanver Global </Link>(August 2021 - November 2021</ListItem>
            </UnorderedList>
          </Stack>
            <Heading as="h2" size="lg">
          <RoughNotation type="highlight" color="#BEE3F8" show="true">
              Internship Experience
            </RoughNotation>
            </Heading>
            <Stack>
                <UnorderedList>
                    <ListItem>Sofware Engineer At <Link color='blue.400' href="https://www.tokopedia.com/"> Tokopedia </Link>(February 2022 - Present)</ListItem>
                    <ListItem>Backend Developer At <Link color='blue.400' href="https://www.zerolim.id/"> Zerolim </Link>(July 2021 - August 2021</ListItem>
                    <ListItem>Backend Developer At <Link color='blue.400' href="https://id.linkedin.com/company/digiflux-indonesia?challengeId=AQFBxVAt0gj3JAAAAYAopCmsGXRfoNAVMFll70a175Kh4FdsLtlds9FrrzaioNLhdE38AopQXQymnZ2toLRR8e0sr9o4sqdflw&submissionId=767e93dc-22cc-e516-f948-bfde64cb632e"> Digiflux </Link>(April 2021 - July 2021</ListItem>
                    <ListItem>Backend Developer At <Link color='blue.400' href="https://digitiket.com/"> Digitiket </Link>(January 2021 - March 2021</ListItem>
                </UnorderedList>
            </Stack>
        </VStack>
      </Stack>
    </Box>
  );
}

export default About;
