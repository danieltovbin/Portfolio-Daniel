import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./style.scss";

const ContactForm = () => {
  const [validated, setValidated] = useState<boolean>(false);

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form
      className="form-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Row className="row-form">
        <Form.Group as={Col} md="4">
          <Form.Label>First name*</Form.Label>
          <Form.Control required type="text" placeholder="First name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Email*</Form.Label>
          <Form.Control required type="email" placeholder="Email" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please choose an email.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group as={Col} md="8" className="message-form">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          required
          type="text"
          placeholder="Message"
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ContactForm;
