const Whatsapp = () => {
  const phoneNumber = "972543035701";
  const message =
    "Hello Daniel, I came across your portfolio and I would like to discuss a potential job opportunity or schedule an interview with you.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="contact-container">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
};

export default Whatsapp;
