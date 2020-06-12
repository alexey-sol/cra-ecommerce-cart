import React from "react";
import classnames from "classnames";

import { defaultProps, propTypes } from "./FormInput.props";
import styles from "./FormInput.module.scss";

FormInput.defaultProps = defaultProps;
FormInput.propTypes = propTypes;

function FormInput ({
    handleChange,
    label,
    value,
    ...rest
}) {
    const hasValue = value.length > 0;

    const labelClassNames = classnames(
        styles.label,
        (hasValue) ? styles.shrink : ""
    );

    return (
        <section className={styles.container}>
            <input
                {...rest}
                className={styles.formInput}
                onChange={handleChange}
            />

            {Boolean(label) && (
                <span className={labelClassNames}>
                    {label}
                </span>
            )}
        </section>
    );
}

export default FormInput;
