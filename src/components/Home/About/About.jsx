

const About = () => {
    return (
        <div className="bg-[#fff] rounded-[32px] py-[83px] px-[15px] lg:px-[111px] shadow-md">
            <div className="border-indigo-500 border-l-[10px] ">
                <div className="ml-4">
                <h1 className=" text-[30px] md:text-[64px] font-bold font-oswald">ABOUT US</h1>
                <p className="font-poppins font-extralight">Archive your Dream with BM ABROAD DREAMERS</p>
                </div>
            </div>


            <div className="flex flex-col lg:flex-row items-center gap-8 mt-5 lg:mt-0 lg:gap-0">
                <div className="flex-1">
                    <p>Embarking on an educational journey in a foreign land is akin to stepping onto a canvas brimming with boundless possibilities. It is a realm where aspirations unfurl their wings and horizons stretch far beyond the realms of imagination. Founded in 2021, BM Abroad Dreamers transcends the role of mere consultancy; it stands as a harmonious orchestration of ambitions, a conduit that binds your dreams with the realm of world-class education you so rightly deserve. Yet, we are far from being conventional educational consultants; rather, we are artisans of dreams, architects of experiences, and your steadfast collaborators in the transformation of reveries into tangible reality.</p>
                </div>
                <div className="flex-1">
                    <img src="https://cdn.sanity.io/images/s37229yn/production/f5b21d7118f32605ccfecc4c94b0b02514606b66-2796x2126.png?w=960&auto=format" alt="" />
                </div>
            </div>
        </div>
    );
};


About.propTypes = {

};


export default About;
