import React from 'react';
import Heading from './heading';
import styled from '@emotion/styled';
import Container from './container';
import { Flex, Box } from '@rebass/grid/emotion';
import ContactInfo from './contactInfo';
import { useStaticQuery, graphql } from 'gatsby';
const ContactSection = styled.section`
  text-align: center;
  padding: ${props => props.theme.spacing[2]}rem 0;
`;
function Contact() {
  const data = useStaticQuery(graphql`
    {
      sanitySettings {
        twitterUsername
        facebookUsername
        instagramUsername
        address
        phone
        email
        mapUrl
      }
    }
  `);
  return (
    <ContactSection id="contact">
      <Container>
        <Heading>Contact us</Heading>
        <Flex flexWrap={['wrap', 'nowrap']}>
          <Box m={[2, 3]} p={[3, 4]} width={[1, 1 / 3]}>
            <ContactInfo>
              <h4>Get in touch</h4>
              <p>{data.sanitySettings.phone}</p>
              <p>{data.sanitySettings.email}</p>
              <p>{data.sanitySettings.address}</p>
              <a
                href={`https://twitter.com/${data.sanitySettings.twitterUsername}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
              <br />
              <a
                href={`https://facebook.com/${data.sanitySettings.facebookUsername}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </a>
              <br />
              <a
                rel="noopener noreferrer"
                href={`https://instagram.com/${data.sanitySettings.instagramUsername}`}
                target="_blank"
              >
                Instagram
              </a>
            </ContactInfo>
          </Box>
          <Box m={[2, 3]} width={[1, 2 / 3]}>
            <iframe
              title={`google map of ${data.sanitySettings.address}`}
              src={data.sanitySettings.mapUrl}
              width="100%"
              height="450"
              frameBorder="0"
              allowfullscreen
            ></iframe>
          </Box>
        </Flex>
      </Container>
    </ContactSection>
  );
}

export default Contact;
