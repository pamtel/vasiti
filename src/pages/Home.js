import Headers from '../components/headers/Headers';
import HeroSection from '../components/heroSection/HeroSection';
import SecondSection from '../components/SecondSection';
import Footer from '../components/Footer';
import ThirdSection from '../components/ThirdSection';
import CustomerSection from '../components/CustomerSection';
import VendorSection from '../components/VendorSection';

const Home = () => {
    return (
        <div>
            <Headers />
            <HeroSection />
            <SecondSection />
            <CustomerSection />
            <ThirdSection />
            <VendorSection />
            <Footer />
        </div>
    )
}

export default Home
