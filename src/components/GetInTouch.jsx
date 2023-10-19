import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";

const GetInTouch = () => {
  return (
    <div className=" px-6 lg:px-0 ">
      <div className="container mx-auto pb-14">
        <h2 className="text-center font-bold font-primary text-5xl">
          Get In Touch
        </h2>
        <div className="flex flex-col lg:flex-row justify-between mt-16 gap-6">
          <div className="flex-1">
            <ContactForm />
          </div>
          <div className="flex-1">
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
