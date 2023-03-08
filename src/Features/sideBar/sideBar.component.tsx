import React from "react";
import { ImBoxAdd } from "react-icons/im";
import { FolderComponent } from "../folder/folder.component";

import styles from "./sideBar.module.css";

const SideBarComponent = () => {
  return (
    <div className={styles["sideBarWrapper"]}>
      <div className={styles["sideBarFirstSection"]}>
        <ImBoxAdd color=" rgb(38, 111, 213)" size="35px" />
        <text
          style={{
            fontSize: "14px",
            marginTop: "20px",
            color: "rgb(6, 54, 122)",
          }}
        >
          <b>Add new Files</b>
        </text>
      </div>
      <div className={styles["sideBarSecondSection"]}>
        <div className={styles["sideBarSecondSectionLeftSide"]}>
          <text style={{ fontSize: "12px" }}>
            <b>Your storage</b>
          </text>
        </div>
        <div className={styles["sideBarSecondSectionRightSide"]}>
          <text style={{ fontSize: "12px", color: "rgb(0, 160, 182)" }}>
            <b>25% left</b>
          </text>
        </div>
        <div className={styles["sideBarSecondSectionLeftDownSide"]}>
          <label
            style={{ fontSize: "12px", color: "rgb(6, 54, 122)" }}
            htmlFor="file"
          >
            75 GB of 100 GB are used
          </label>
          <progress
            id="file"
            value="75"
            max="100"
            style={{ width: "100%", color: " rgb(6, 54, 122)" }}
          >
            {" "}
            75%{" "}
          </progress>
        </div>
      </div>
      <div className={styles["sideBarThirdSection"]}>
      <div className={styles["sideBarThirdSectionFirstRow"]}>
          <text style={{ fontSize: "12px" }}>
            <b>Your shared files</b>
          </text>
        </div>
        <div className={styles["sideBarThirdSectionSecondRow"]}>
          <FolderComponent />
        </div>
        <div className={styles["sideBarThirdSectionThirdRow"]}>
          <button className={styles["addbutton"]}>+ Add more</button>
        </div>
      </div>
    </div>
  );
};

export { SideBarComponent };
