import { useState } from "react";
import styles from "./ContactCard.module.css";

export const ContactCard = ({ name, id, email, phone }) => {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  return (
    <div className={styles.container}>
      <div>{name}</div>
      <div>{email}</div>
      <div className={styles.clickContainer}>
        {isActive ? (
          <div onClick={() => setIsActive(!isActive)}>
            Click here to know more
          </div>
        ) : (
          <div onClick={() => setIsActive(!isActive)}>{phone}</div>
        )}
      </div>
    </div>
  );
};
