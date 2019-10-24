import MenuItem from "components/MenuItem/MenuItem.component";
import React, {useEffect, useState} from "react";
import {defaultProps, propTypes} from "./Directory.validation";
import styles from "./Directory.module.scss";

Directory.defaultProps = defaultProps;
Directory.propTypes = propTypes;

function Directory () {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections([{
      id: 1,
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      title: "hats"
    }, {
      id: 2,
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      title: "jackets"
    }, {
      id: 3,
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      title: "shoes"
    }, {
      id: 4,
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      title: "women"
    }, {
      id: 5,
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      title: "men"
    }]);
  }, []);

  const sectionElements = sections.map(({id, imageUrl, size, title}) => (
    <MenuItem
      imageUrl={imageUrl}
      key={id}
      size={size}
      title={title}
    />
  ));

  return (
    <div className={styles.container}>
      {sectionElements}
    </div>
  );
}

export default Directory;
