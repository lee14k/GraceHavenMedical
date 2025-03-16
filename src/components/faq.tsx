import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';
import Button from 'react-bootstrap/Button';

interface FAQProps {
  bgColor: string;
  textColor: string;
  header: string;
  description: string;
  questions: Array<{ header: string, body: string }>;
  button?: string,
  buttonUrl?: string
}

export default function FAQ(props: FAQProps) {
  return (
    <div>
      <Container fluid className="p-5 d-flex align-items-center" style={{ color: props.textColor, backgroundColor: props.bgColor }} >
        <Container className="py-5">
          <h2>{props.header}</h2>
          <p>{props.description}</p>
          {props.button && <Button href={props.buttonUrl}>{props.button}</Button>}
          <Accordion className="mt-5">
            {props.questions.map((question, idx) => (
              <AccordionItem key={`faq-${idx}`} eventKey={`${idx}`}>
                <AccordionHeader style={{ color: props.textColor }}>{question.header}</AccordionHeader>
                <AccordionBody style={{ color: props.textColor }} dangerouslySetInnerHTML={{ __html: question.body }}></AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Container>
    </div >
  );
}
