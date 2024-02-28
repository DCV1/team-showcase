// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OurArtwork from "./our-artwork";
import Activities from "./activities";
import CarouselFeatures from "./carousel-features";
import AboutOurTeam from "./about-our-team";
import Faq from "./faq";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurArtwork />
      <Activities />
      <CarouselFeatures />
      <AboutOurTeam />
      <Faq />
      <Footer />
    </>
  );
}
