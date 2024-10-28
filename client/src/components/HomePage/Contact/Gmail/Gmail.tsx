const Gmail = () => {
  const emailAddress = "tovbindaniel@gmail.com";
  const subject = "Job Opportunity";
  const body =
    "Hello, I came across your portfolio and I would like to discuss a potential job opportunity or schedule an interview with you.";

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div className="contact-container">
      <a href={mailtoLink} className="email-link" aria-label="github-link">
        <i className="bi bi-envelope"></i>
      </a>
    </div>
  );
};

export default Gmail;
