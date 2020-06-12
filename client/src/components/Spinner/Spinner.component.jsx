import React from "react";
import styles from "./Spinner.module.scss";

function Spinner () {
    return (
        <section className={styles.overlay}>
            <div className={styles.spinner} />
        </section>
    );
}

export default Spinner;
