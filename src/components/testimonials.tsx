import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';

interface TestimonialsProps {
  title: string,
  description: string,
  items: Array<{ testimonial: string, name: string }>
}

const Testimonials = (props: TestimonialsProps) => (
  <Container fluid style={{ backgroundColor: "#ffffff", color: "#aa9c91", textAlign: "center" }}>
    <Container className="pt-5 pb-5">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Carousel style={{ backgroundColor: "#f5f5f5", minHeight: "300px", padding: "2rem", fontSize: "150%" }}>
        {props.items.map((item: { testimonial: string, name: string }, idx: number) => (
          <CarouselItem key={`testimonial-${idx}`}>
            <p>
              <strong>{item.testimonial}</strong>
            </p>
            <p>
              <strong>{item.name}</strong>
            </p>
          </CarouselItem>
        ))}
      </Carousel>
    </Container>
  </Container>
)

export default Testimonials;
