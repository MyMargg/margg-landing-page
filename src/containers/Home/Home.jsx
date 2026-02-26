import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Analytics from "./Analytics";
import Supercharge from "./Supercharge";
import Contact from "./Contact";
import Footer from "./Footer";
import JoinWaitList from "@/components/JoinWaitList";
import GridSection from "@/components/blocks/GridSection";

// Styled Components
const HomeContainer = styled.div`
  background: #090215;
  background: linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);
  min-height: 100vh;
  position: relative;
`;

const SectionsContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <SectionsContainer>
        <Hero id="home" />
        <Analytics />
        <Supercharge id="products" />
        {/* <Contact /> */}
        <GridSection />
        <JoinWaitList id="contact-us" />
        <Footer />
      </SectionsContainer>
    </HomeContainer>
  );
};

export default Home;
