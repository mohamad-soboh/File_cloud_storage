import React from "react";
import styles from "./box.module.css";

const BoxComponent = (props: any) => {
  return (
    <>
      {props?.menuItems.map((item: any,index:any) => (
        <div className={styles[`boxWrapper${item.color}`]} key={index}>
          <div className={styles[`${item.boxType}BoxType`]}>
            {item.typeIcon}
          </div>
          {item.flag === "true" && (
            <div className={styles[`${item.boxType}BoxFavorites`]}>
              {item.favoritesIcon}
            </div>
          )}
          <div className={styles[`${item.boxType}BoxTitle`]}>
            <text>
              <b> {item.title}</b>
            </text>
          </div>
          <div className={styles[`${item.boxType}BoxDescription`]}>
            <text> {item.desc}</text>
          </div>
          {item.boxType === "Files" && <div className={styles[`line`]}> .</div>}
        </div>
      ))}
    </>
  );
};

export { BoxComponent };
