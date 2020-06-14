import React from "react";

import styles from "./Footer.module.scss";

function Footer () {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                Disclaimer: the prices are totally arbitrary and have nothing in
                common with reality.
            </div>
        </section>
    );
}

export default Footer;
