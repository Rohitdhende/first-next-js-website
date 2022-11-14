import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/CustomCard.module.scss";
import { useAppContext } from "../context/state";

const CustomCard = ({ title, img, text, button, id }) => {
  const { theme } = useAppContext();

  return (
    <Card className={theme === "light" ? styles.lightCard : styles.darkCard}>
      {img && (
        <Card.Img
          variant="top"
          src={img}
          style={{ aspectRatio: 1 }}
          alt={title}
        />
      )}
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {title && <Card.Title className={"text-truncate"}>{title}</Card.Title>}
        {text && (
          <div
            dangerouslySetInnerHTML={{ __html: text }}
            className={styles.lineClamp}
            style={{ marginBottom: "1rem" }}
          />
        )}
        {button && (
          <Link href={`/blogs/${id}`}>
            <Button
              variant={theme === "light" ? "dark" : "light"}
              style={{ width: "100%" }}
            >
              {button}
            </Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
