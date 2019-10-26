import DIRECTORY_DATA from "./Directory.data";
import MenuItem from "components/MenuItem";
import React, {useState} from "react";
import {defaultProps, propTypes} from "./Directory.validation";
import styles from "./Directory.module.scss";

Directory.defaultProps = defaultProps;
Directory.propTypes = propTypes;

function Directory () {
  const [sections] = useState(DIRECTORY_DATA);

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
