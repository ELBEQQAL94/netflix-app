import React, { useState } from "react";
import { items, info } from "../../data";

// Components
import Item from "./Item";
import DescriptionItem from "../descriptionItem";

const Content = () => {
  
  // show trailler
  const [showTrailler, setShowTrailler] = useState(false);
  const [trailler, setTrailler] = useState({
    sr: '',
    logo: '',
    poster: '',
    story: ''
  });

  const showMeTrailler = index => {
    const newData = info.filter((item, i) => i === index);
    setShowTrailler(true);
    setTrailler({
      src: newData[0].src,
      logo: newData[0].logo,
      poster: newData[0].poster,
      story: newData[0].story
    });

  };

  return (
    <>
      <div className="content">
        {items.map((item, i) => (
          <Item
            key={i}
            index={i}
            showMeTrailler={showMeTrailler}
            src={item.src}
          />
        ))}
      </div>
      {showTrailler ? (
        <DescriptionItem
          src={trailler.src}
          logo={trailler.logo}
          poster={trailler.poster}
          story={trailler.story}
        />
      ) : null}
    </>
  );
};

export default Content;
