import aboutBackground from "../assets/AdobeStock_533779765.jpeg";
import crownImage from "../assets/crown icon.png";
import logo from "../assets/crown-logo-white.png";

const AboutUsSection = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${aboutBackground})` }}
      id="about-us"
    >
      {/* Crown Logo */}
      <div className="absolute top-4 right-4 lg:right-16">
        <img src={logo} alt="Crown Funeral Logo" className="w-40 lg:w-60" />
      </div>

      {/* Content Box */}
      <div className="flex-grow flex items-center justify-end px-4 py-8 lg:py-16">
        <div className="relative z-10 bg-[#C9A86C] bg-opacity-80 text-white p-6 rounded-lg w-full max-w-xl lg:max-w-2xl xl:max-w-3xl mt-20 lg:mt-24 mr-0 lg:mr-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 relative">
            About Crown Funeral
            <img
              src={crownImage}
              alt="Crown icon"
              className="absolute -top-12 -left-8 w-16 h-8 lg:-top-16 lg:-left-10 -rotate-12 lg:w-20 lg:h-10"
            />
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <p className="mb-4 text-sm lg:text-base">
                Crown Funeral, administered by GetSavvi Health and insured by
                King Price Limited, offers comprehensive funeral cover with
                unique wellness benefits.
              </p>
              <h3 className="text-xl font-bold mb-2">Our Services</h3>
              <ul className="list-disc pl-5 mb-4 text-sm lg:text-base">
                <li>Complete funeral and repatriation services</li>
                <li>Financial cover for families</li>
                <li>Immediate support through claims process</li>
              </ul>
              <h3 className="text-xl font-bold mb-2">Wellness Benefits</h3>
              <ul className="list-disc pl-5 mb-4 text-sm lg:text-base">
                <li>24/7 Health Bot for personalised wellness tracking</li>
                <li>Expert health guidance and symptom checking</li>
                <li>FeelBetterFast pharmacy consultations</li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm lg:text-base">
                At Crown Funeral, we protect your family's future while
                supporting your health today.
              </p>
              <p className="text-lg font-bold italic mb-4">
                Comprehensive cover. Exceptional care.
              </p>
              <h3 className="text-xl font-bold mb-2">Vision</h3>
              <p className="mb-4 text-sm lg:text-base">
                We aim to offer South Africans dignified support and peace of
                mind through holistic health services and financial cover during
                life's toughest moments.
              </p>
              <h3 className="text-xl font-bold mb-2">Mission</h3>
              <p className="mb-4 text-sm lg:text-base">
                Our mission is to deliver seamless funeral services while also
                providing health support to our members, ensuring care beyond
                grief.
              </p>
              <h3 className="text-xl font-bold mb-2">Commitment</h3>
              <p className="mb-4 text-sm lg:text-base">
                We are dedicated to supporting communities by enhancing their
                financial and health well-being, offering long-term care and
                compassion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
