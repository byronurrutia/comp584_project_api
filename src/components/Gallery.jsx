import { Col, Container, Row } from "react-bootstrap";
import GalleryCard from "./GalleryCard";

export default function Gallery(prop) {
  const photoList = prop.photos.map((photo) => (
    <Col>
      <GalleryCard
        key={photo.id}
        author={photo.author}
        img={photo.download_url}
      />
    </Col>
  ));
  return (
    <Container>
      <div className="p-3">
        <Row className="row-cols-2 row-cols-lg-4 g-3">{photoList}</Row>
      </div>
    </Container>
  );
}
