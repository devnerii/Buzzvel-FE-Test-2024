import Hero from "@/components/Sections/Hero";
import Features from "@/components/Sections/Features";
import TestimonialCarousel from "@/components/Sections/TestmonialCarrousel";
import CallToAction from "@/components/Sections/CallToAction";
import Services from "@/components/Sections/Services"
import PremiumServices from "@/components/Sections/PremiumServices";
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
    <SEO
        title="Soller"
        description="Soller - Liderando o caminho na instalação de painéis solares com soluções inovadoras."
        keywords="painéis solares, instalação solar, energia renovável, soluções sustentáveis"
        ogImage="https://www.soller.com/images/seo-image.png" // Eu deixei um caminho fictício
      />
      <Hero />
      <Features />
      <Services />
      <PremiumServices />
      <TestimonialCarousel />
      <CallToAction />
    </>
  );
};

// Função para habilitar SSG
export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
