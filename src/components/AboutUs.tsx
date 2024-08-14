import aboutBackground from "../assets/AdobeStock_533779765.jpeg";
import crownImage from "../assets/crown icon.png";
import logo from "../assets/crown logo white.png";

const AboutUsSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col items-end"
      style={{ backgroundImage: `url(${aboutBackground})` }}
    >
      {/* Crown Logo */}
      <div className="mt-4 mr-4 lg:pr-36">
        <img src={logo} alt="Crown Funeral Logo" className="w-60 lg:w-96" />
      </div>

      {/* Content Box */}
      <div className="flex-grow flex items-center justify-end  lg:pr-16 px-2">
        <div className="bg-white bg-opacity-80 lg:bg-opacity-40 lg:text-white p-8 rounded-lg lg:max-w-xl">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 relative">
            About Us
            <img
              src={crownImage}
              alt="Crown icon"
              className="absolute -top-16 -left-12 w-20 h-10 lg:-top-20 lg:-left-14 -rotate-12 lg:w-26 lg:h-14"
            />
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
