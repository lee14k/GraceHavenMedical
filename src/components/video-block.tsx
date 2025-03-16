import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';

import styles from './video-block.module.css';

interface MediaBlockProps {
  textColor: string;
  buttonUrl?: string;
  buttonText?: string;
  height: number;
  backgroundVideo?: string;
  backgroundImage?: string;
  sectionContent?: { __html: string };
  contentPosition: 'left' | 'center' | 'right';
  button2Url?: string;
  button2Text?: string;
  children?: React.ReactNode
}

export default function MediaBlock(props: MediaBlockProps) {
  return (
    <div>
      <Container fluid className="m-0 p-0 d-flex align-items-center" style={{ color: props.textColor, minHeight: props.height }} >
        <div style={{ height: props.height }} className={styles.videoOverlay} />
        {props.backgroundVideo ? (
          <div style={{ height: props.height }} className={styles.videoWrapper}>
            <video style={{ height: props.height }} className={styles.video} src={props.backgroundVideo} autoPlay controls={false} loop muted />
          </div>
        ) : (
          <div style={{ height: props.height }} className={styles.videoWrapper}>
            <Image alt="Grace Haven Medical" style={{ height: props.height, width: '100vw' }} width={1200} height={props.height} className={styles.video} src={props.backgroundImage ? props.backgroundImage : ''} />
          </div>
        )}
        <Container className={styles.MediaBlockContent}>
          <Row className="align-items-center">
            <Col xs="12" md="6" className={`${props.contentPosition === 'right' ? 'offset-md-6' : props.contentPosition === 'center' ? 'offset-md-3' : ''} py-3`}>
              {props.sectionContent ? (
                <>
                  <div dangerouslySetInnerHTML={props.sectionContent} style={{ color: props.textColor }} />
                  {props.buttonUrl && <Button className="py-2 px-3 mt-4" href={props.buttonUrl}>{props.buttonText?.toUpperCase()}</Button>}
                  {props.button2Url && <Button className="px-3 py-2 mt-4 ms-xs-2 ms-sm-0 ms-lg-2" href={props.button2Url}>{props.button2Text?.toUpperCase()}</Button>}
                </>
              ) : (
                <>{props.children}</>
              )}
            </Col>
          </Row>
        </Container>
      </Container>
    </div >
  );
}
