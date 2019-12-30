import React from "react";
import {defaultProps, propTypes} from "./FormInput.validation";
import classnames from "classnames";
import styles from "./FormInput.module.scss";

FormInput.defaultProps = defaultProps;
FormInput.propTypes = propTypes;

function FormInput ({handleChange, label, value, ...rest}) {
  const hasValue = value.length > 0;
  const labelClassNames = classnames(
    styles.label,
    (hasValue) ? styles.shrink : ""
  );

  return (
    <div className={styles.container}>
      <input
        {...rest}
        className={styles.formInput}
        onChange={handleChange}
      />

      {label && <label className={labelClassNames}>
        {label}
      </label>}
    </div>
  );
};

export default FormInput;
