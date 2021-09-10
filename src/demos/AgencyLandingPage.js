import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
// import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature />
    <Features />
    <MainFeature2 />
    <Portfolio />
    <Testimonial
      subheading="Testimonials"
      heading={
        <>
          Our Clients <span tw="text-primary-500">Love Us.</span>
        </>
      }
      description=""
      testimonials={[
        {
          imageSrc:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKWzgZweO4z_qogQ0D4_jlqcZXdUahAWttg&usqp=CAU",
          quote:
            "We would like to express our satisfaction on the cooperation regarding the development of our web application. MeidiSoft team did a very professional job. We are satisfied with the solution given to us and with the communication flow through the project. We would like to recommend MeidiSoft team. We look forward to working with them in future projects.",
          customerName: "James Cummings",
          customerTitle: "CTO, D-Care Inc."
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/8/40/84025932-e310-11e9-a3e3-8fb8309c4ed6/5d913db47cc3e.image.jpg",
          quote:
            "The wonderful teamwork of MeidiSoft helped me create new hopes for my industry. With their professionalism, prompt response and courteous service, I was able to design wonderful and innovative web applications that will break new ground in the logistics industry. I truly am grateful for their presence in my professional life... Doing business has never been so efficient and so pleasant! Thank you",
          customerName: "Adam Smith",
          customerTitle: "Founder, .mldve"
        }
      ]}
      textOnLeft={true}
    />
    {/* <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          Do you have <span tw="text-primary-500">Questions ?</span>
        </>
      }
    />
    <Blog /> */}
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
