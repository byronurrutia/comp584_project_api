import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useState } from "react";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function GalleryCard(prop) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    //a div with a framer motion
    //card wrapped in the framer motion div
    //when it is in view, activate the animation
    <motion.div
      initial={false}
      animate={
        isLoaded && isInView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
    >
      <Card style={{ width: "18rem" }} className="p-3">
        <Card.Img
          variant="top"
          src={prop.img}
          width={"250px"}
          height={"250px"}
          onLoad={() => setIsLoaded(true)}
        />
        <Card.Body>
          <Card.Title>{prop.author}</Card.Title>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
