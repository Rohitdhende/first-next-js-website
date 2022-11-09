import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/CustomCard.module.scss";

const CustomCard = ({ title, img, text, button, id }) => {
  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <Card.Img
        variant="top"
        src={img ? img : "/images/default.jpg"}
        style={{ aspectRatio: 1 }}
        alt={title}
      />

      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {title && <Card.Title className={"text-truncate"}>{title}</Card.Title>}
        {text && <Card.Text className={styles.lineClamp}>{text}</Card.Text>}
        {button && (
          <Link href={`/blogs/${id}`}>
            <Button variant="success" style={{ width: "100%" }}>
              {button}
            </Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
