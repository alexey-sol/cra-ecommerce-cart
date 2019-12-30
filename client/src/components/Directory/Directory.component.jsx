import MenuItem from "components/MenuItem";
import React from "react";
import {connect} from "react-redux";
import {defaultProps, propTypes} from "./Directory.validation";
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "redux/directory/directory.selectors";
import styles from "./Directory.module.scss";

Directory.defaultProps = defaultProps;
Directory.propTypes = propTypes;

function Directory ({sections}) {
  const sectionElements = sections.map(({id, ...rest}) => (
    <MenuItem
      key={id}
      {...rest}
    />
  ));

  return (
    <div className={styles.container}>
      {sectionElements}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

const ConnectedDirectory = connect(
  mapStateToProps
)(Directory);

export default ConnectedDirectory;
