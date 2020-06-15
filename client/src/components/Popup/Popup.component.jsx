import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import { defaultProps, propTypes } from "./Popup.props";
import classnames from "classnames";
import styles from "./Popup.module.scss";

Popup.defaultProps = defaultProps;
Popup.propTypes = propTypes;

function Popup ({ onClose, text, theme }) {
    const timerRef = useRef(null);

    const popupClassName = classnames(
        styles.container,
        styles[`${theme}Theme`]
    );

    useEffect(() => {
        const timeoutInMs = 4000;
        timerRef.current = setTimeout(onClose, timeoutInMs);

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [onClose]);

    const tooltipElem = (
        <div className={popupClassName}>
            <span className={styles.text}>
                {text}
            </span>
        </div>
    );

    return ReactDOM.createPortal(
        tooltipElem,
        document.body
    );
}

export default Popup;
