import React from "react";
import Navbar from "components/navbar";
import Footer from "components/footer";
import { Container, Div, P, Heading, Para } from "styles/pages/about";
const About = () => (
  <>
    <Navbar />
    <Container>
      <P>About Us</P>
      <Div>
        <Heading>Title</Heading>
        <Para>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          optio maxime sunt id, natus cupiditate itaque ipsam aperiam dolores,
          saepe error, adipisci mollitia officiis consequatur alias nulla eum
          dignissimos fugit.
        </Para>
      </Div>
      <Div>
        <Heading>Title</Heading>
        <Para>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          optio maxime sunt id, natus cupiditate itaque ipsam aperiam dolores,
          saepe error, adipisci mollitia officiis consequatur alias nulla eum
          dignissimos fugit.
        </Para>
      </Div>
      <Div>
        <Heading>Title</Heading>
        <Para>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          optio maxime sunt id, natus cupiditate itaque ipsam aperiam dolores,
          saepe error, adipisci mollitia officiis consequatur alias nulla eum
          dignissimos fugit.
        </Para>
      </Div>
    </Container>
    <Footer />
  </>
);

export default About;
