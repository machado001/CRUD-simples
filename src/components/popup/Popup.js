import styles from "./Popup.module.css";

export const Popup = ({ togglePopup, children }) => {
  return (
    <>
      <div className={styles.popup_box}>
        <div className={styles.box}>
          <span className={styles.close_icon} onClick={togglePopup}>
            X
          </span>
          {children}
        </div>
      </div>
    </>
  );
};
