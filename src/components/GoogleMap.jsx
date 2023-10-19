const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14609.171322077866!2d90.36562867239998!3d23.73693487853654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8caa7e60837%3A0xf47efcf6f49b50c5!2sSultan&#39;s%20Dine!5e0!3m2!1sen!2sbd!4v1697730657669!5m2!1sen!2sbd"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Responsive Google Map"
      className="w-full h-[400px] md:h-[500px] lg:h-full  rounded-lg"
    ></iframe>
  );
};

export default GoogleMap;
