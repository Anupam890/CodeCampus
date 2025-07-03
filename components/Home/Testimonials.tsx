import { Marquee } from "../magicui/marquee";

const Testimonials = () => {
  return (
    <div className="bg-gray-950 text-white py-20 px-6 backdrop-blur-md">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-gray-400">
          Real experiences from candidates who’ve accelerated their careers
          using CodeCampus.
        </p>
      </div>

      <Marquee pauseOnHover className="[--duration:20s] ">
        <div className="flex items-center justify-center space-x-8">
          <div className="max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-300 mb-4">
              CodeCampus transformed my interview prep! The resources are
              top-notch and the community support is incredible."
            </p>
            <h4 className="text-white font-semibold">Anjali S.</h4>
            <p className="text-gray-500">Software Engineer</p>
          </div>

          <div className="max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-300 mb-4">
              "I landed my dream job thanks to CodeCampus! The structured
              approach made all the difference."
            </p>
            <h4 className="text-white font-semibold">Rahul K.</h4>
            <p className="text-gray-500">Data Scientist</p>
          </div>

          <div className="max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-300 mb-4">
              "The real interview questions helped me prepare effectively.
              Highly recommend CodeCampus!"
            </p>
            <h4 className="text-white font-semibold">Priya M.</h4>
            <p className="text-gray-500">Product Manager</p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonials;
