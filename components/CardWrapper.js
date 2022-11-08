import { useState, useEffect } from "react";
import CustomCard from "./CustomCard";

const CardWrapper = ({ data, searchedData }) => {
  //Use this if the api doesn't work
  const sampleData = [
    {
      id: 1,
      title: "Defi",
      img: "https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg",
      body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      title: "Nft",
      img: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      body: "Sobody example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      title: "Ether",
      img: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      body: "Sobody example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 4,
      title: "Token",
      img: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
      body: "Sobody token text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  const [filteredData, setFilteredData] = useState(data); //Initialize it as sampleData instead of data if the api doesn't work
  useEffect(() => {
    const filteredData = data?.filter((item) => { //map it with sampleData instead of data if the api doesn't work
      if (searchedData === "all") {
        return item;
      } else {
        return (
          item.title.toLowerCase().includes(searchedData.toLowerCase()) ||
          item.body.toLowerCase().includes(searchedData.toLowerCase())
        );
      }
    });
    setFilteredData(filteredData);
  }, [searchedData]);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {filteredData?.slice(0, 6).map((card, index) => (
        <div key={index} style={{ width: "18rem", margin: "0.5rem" }}>
          <CustomCard
            title={card.title}
            id={card.id}
            img={card.img}
            text={card.body}
            button={"Read More"}
          />
        </div>
      ))}
    </div>
  );
};

export default CardWrapper;
