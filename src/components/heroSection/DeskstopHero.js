import hero from '../../images/hero.png'

const DeskstopHero = () => {
    return (
        <div className="grid grid-cols-2 pt-5">
            <div className="pl-32 pt-24">
                <p className="text-5xl font-bold">Amazing</p>
                <p className="text-5xl font-bold pb-6">Experiences from Our Wonderful Customers</p>
                <p className="text-gray-500 text-lg">Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
            </div>
            <div className="pr-32">
                <img src={hero} alt="hero" />
            </div>
        </div>
    )
}

export default DeskstopHero
