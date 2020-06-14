import React from "react";
import classnames from "classnames";

import { defaultProps, propTypes } from "./MenuItem.props";
import { withRouter } from "react-router-dom";
import styles from "./MenuItem.module.scss";

MenuItem.defaultProps = defaultProps;
MenuItem.propTypes = propTypes;

function MenuItem ({
    imageUrl,
    history,
    linkUrl,
    match,
    size,
    title
}) {
    const containerClassNames = classnames(
        styles.container,
        styles[size]
    );

    const backgroundImageStyle = {
        backgroundImage: `url(${imageUrl})`
    };

    return (
        <section
            className={containerClassNames}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <section
                className={styles.backgroundImage}
                style={backgroundImageStyle}
            />

            <section className={styles.content}>
                <header className={styles.title}>
                    {title.toUpperCase()}
                </header>

                <span className={styles.subTitle}>
                    TAKE A LOOK
                </span>
            </section>
        </section>
    );
}

export default withRouter(MenuItem);
