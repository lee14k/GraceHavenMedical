import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";

interface ContactDirectProps {
  header: string;
  body: string;
  button: string;
}

const ContactDirect = ({ header, body, button }: ContactDirectProps) => (
  <div style={{ color: '#aa9c91', backgroundColor: '#fff' }}>
    <Container className="pb-4">
      <hr className="mt-0" />
      <h2 className="pt-4 mt-4">{header}</h2>
      <p>{body}</p>
      <Button className="mb-4" href="/contact-us">{button.toUpperCase()}</Button>
    </Container>
  </div>
)

export default ContactDirect;
