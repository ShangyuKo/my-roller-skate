import { lazy, Suspense } from "react";
// import React, {useState, useEffect, Suspense } from "react";
import BeginMiddleBlockContent from "./about_page/content/BeginMiddleBlockContent.json";
import AboutContent from "./about_page/content/AboutContent.json";
import MissionContent from "./about_page/content/MissionContent.json";
import Culture from "./about_page/content/Culture.json";

import profile1 from "./about_page/content/profile1.json";
import profile2 from "./about_page/content/profile2.json";
import profile3 from "./about_page/content/profile3.json";

import ProductContent from "./about_page/content/ProductContent.json";
import ContactContent from "./about_page/content/ContactContent.json";

const MiddleBlock = lazy(() => import("./about_page/components/MiddleBlock"));
const Container = lazy(() => import("./about_page/common/Container"));
const ScrollToTop = lazy(() => import("./about_page/common/ScrollToTop"));
const ContentBlock = lazy(() => import("./about_page/components/ContentBlock"));

// const MiddleBlock = lazy(() => import("./about_page/components/MiddleBlock"));
// const Container = lazy(() => import("./about_page/common/Container"));
// const ScrollToTop = lazy(() => import("./about_page/common/ScrollToTop"));
// const ContentBlock = lazy(() => import("./about_page/components/ContentBlock"));

const AboutUS = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Container>
      <ScrollToTop />
      <MiddleBlock
        title={BeginMiddleBlockContent.title}
        content={BeginMiddleBlockContent.text}
        button={BeginMiddleBlockContent.button}
        icon="logo.svg"
        id="begin"

      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        button={MissionContent.button}
        icon="developer.svg"
        id="mission"
      />
      <ContentBlock
        type="mid"
        title={Culture.title}
        con1={Culture.con1}
        con2={Culture.con2}
        con3={Culture.con3}
        con4={Culture.con4}
        button={Culture.button}
        id="mission"
      />
      <ContentBlock
        type="left"
        title={profile1.title}
        content={profile1.text}
        section={profile1.section}
        icon="profile1.svg"
        id="profile1"
      />
      <ContentBlock
        type="left"
        title={profile2.title}
        content={profile2.text}
        section={profile2.section}
        icon="profile2.svg"
        id="profile2"
      />
      <ContentBlock
        type="left"
        title={profile3.title}
        content={profile3.text}
        section={profile3.section}
        icon="profile3.svg"
        id="profile3"
      />
    </Container>
    </Suspense>
  );
};

// this.forceUpdate()
// window.location.reload();
export default AboutUS;