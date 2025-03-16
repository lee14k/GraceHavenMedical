import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import styles from './gallery.module.css';

interface GalleryItem {
  header: string,
  body: string,
  imageURI: string,
  price?: string,
  button?: string,
  buttonLink?: string
}

interface GalleryProps {
  textColor: string,
  bgColor: string,
  height: number,
  title: string,
  text?: string,
  items: Array<GalleryItem>,
  imgWidth: number,
  imgHeight: number,
  lg?: boolean,
}

export default function Gallery(props: GalleryProps) {
  return (
    <div>
      <Container fluid className="m-0 p-0 d-flex align-items-center" style={{ color: props.textColor, backgroundColor: props.bgColor, minHeight: props.height }} >
        <Container className={styles.galleryWrapper}>
          <div className={styles.galleryItemBlock}>
            <h2 className={styles.galleryItemBlockTitle}>{props.title}</h2>
            {props.text && <div dangerouslySetInnerHTML={{ __html: props.text }} />}
          </div>
          <Row className="d-flex">
            {(props.items).map((item, idx) => (
              <Col md={props.lg ? '4' : '3'} className="gallery-col p-4" key={`${item.header}-${idx}`}>
                {item.imageURI && <Image className={styles.galleryItemBlockImage} src={item.imageURI} alt={`${item.header}-${idx}`} width={props.imgWidth} height={props.imgHeight} />}
                <h3 className="pt-4">{item.header}</h3>
                <p>{item.body}</p>
                {item.price && <p>{item.price}</p>}
                {item.button && (
                  <Button className="mt-auto w-100 py-3" href={item.buttonLink}>{item.button.toUpperCase()}</Button>
                )}
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div >
  );
}
