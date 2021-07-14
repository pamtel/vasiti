import hero from '../../images/hero.png';

const MobileHero = () => {
    return (
        <div className="px-8 grid md:grid-cols-2 pt-5">
            <div className="md:pt-16">
                <p className="text-2xl font-bold">Amazing</p>
                <p className="text-2xl font-bold pb-6">Experiences from Our Wonderful Customers</p>
                <p className="text-gray-500 text-lg">Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
            </div>
            <div className="pt-3 md:pt-0">
                <img src={hero} alt="hero" />
            </div>
        </div>
    )
}

export default MobileHero
