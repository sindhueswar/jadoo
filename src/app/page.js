"use client";
import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Container from "../components/Container/Container";
import Companies from "./../components/Templates/Companies/Companies";
import Contact from "./../components/Templates/Contact/Contact";
import Destinations from "./../components/Templates/Destinations/Destinations";
import HeroSection from "./../components/Templates/HomeHero/HeroSection";
import Services from "./../components/Templates/Services/Services";
import Steps from "./../components/Templates/Steps/Steps";
import Testimonial from "../components/Templates/testimonial/testimonial";
import PricingSection from "./../components/Templates/pricing/PricingCard";
function App() {
  // const { hash } = window.location;
  // useEffect(() => {
  //   if (hash) {
  //     const ele = document.getElementById(hash.split("#")[1]);
  //     ele.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // }, [hash]);
  return (
    <Layout>
      <Container>
        <HeroSection />
        <Services />
        <Destinations />
        <Steps />
        <Testimonial />
        <PricingSection />
        <Companies />
        <Contact />
      </Container>
    </Layout>
  );
}

export default App;
