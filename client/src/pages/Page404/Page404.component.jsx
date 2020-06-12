import React from "react";

import CustomLink from "components/CustomLink";
import styles from "./Page404.module.scss";

function Page404 () {
    return (
        <section className={styles.container}>
            <header className={styles.header}>
                Whoopsie, it&apos;s 404.
            </header>

            <section>
                We&apos;ve not found the page.&nbsp;

                <CustomLink to="/">
                    Get back to the home one?
                </CustomLink>
            </section>
        </section>
    );
}

export default Page404;
