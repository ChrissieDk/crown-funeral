import aboutBackground from "../assets/AdobeStock_533779765.jpeg";
import crownImage from "../assets/crown icon.png";
import logo from "../assets/crown-logo-white.png";

const AboutUsSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col items-end"
      style={{ backgroundImage: `url(${aboutBackground})` }}
      id="about-us"
    >
      {/* Crown Logo */}
      <div className="mt-4 mr-4 lg:pr-36">
        <img src={logo} alt="Crown Funeral Logo" className="w-60 lg:w-96" />
      </div>

      {/* Content Box */}
      <div className="flex-grow flex items-center justify-end  lg:pr-16 px-2">
        <div className="relative z-10 bg-[#C9A86C] bg-opacity-80 lg:bg-opacity-80 lg:text-black p-4 sm:p-8 rounded-lg w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[80vh] overflow-y-auto">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 relative">
            About Us
            <img
              src={crownImage}
              alt="Crown icon"
              className="absolute -top-16 -left-12 w-20 h-10 lg:-top-20 lg:-left-14 -rotate-12 lg:w-26 lg:h-14"
            />
          </h2>
          <div className="mb-4">
            <ul>
              <li>
                <strong>Vision:</strong> At Crown Funeral, we aim to offer the
                South African community dignified support and financial peace of
                mind through compassionate services, being a pillar of strength
                in life's toughest moments.
              </li>
              <li>
                <strong>Mission:</strong> Our mission is to provide accessible,
                comprehensive funeral and financial services, ensuring a
                respectful and seamless experience. We offer holistic care that
                includes health and mental health support for those grieving.
              </li>
              <li>
                <strong>Values:</strong> We are committed to affordable,
                integrated solutions delivered with respect, compassion, and
                integrity, focusing on the well-being of our clients and their
                families during life's challenges.
              </li>
              <li>
                <strong>Commitment:</strong> We empower marginalized communities
                and promote economic inclusion to create a more equitable
                society. Our services address immediate needs and ongoing health
                and mental well-being.
              </li>
              <li>
                <strong>Support for SASSA Recipients:</strong> We extend our
                commitment to SASSA grant recipients by providing financial
                relief and holistic peace of mind, ensuring every South African
                has access to compassionate support in times of need.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
