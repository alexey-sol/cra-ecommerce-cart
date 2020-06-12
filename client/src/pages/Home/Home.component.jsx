import Directory from "components/Directory";
import React from "react";
import styles from "./Home.module.scss";

function Home () {
    return (
        <section className={styles.container}>
            <Directory />
        </section>
    );
}

export default Home;
