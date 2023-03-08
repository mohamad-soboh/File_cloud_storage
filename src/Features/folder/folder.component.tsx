import React from "react";
import styles from "./folder.module.css";
import logo from "./profile.webp";

const FolderComponent = () => {
  return (
    <div>
      <div className={styles["greenFolderWrapper"]}>
        <div className={styles["folderTitle"]}>KeyNote files</div>
        <div className={styles["folderImageWrapper"]}>
          <div>
            <img
              className={styles["folderImage"]}
              src={logo}
              alt="Girl in a jacket"
            />
          </div>
        </div>
      </div>
      <div className={styles["purpleFolderWrapper"]}>
        <div className={styles["folderTitle"]}>Vacation photos</div>
        <div className={styles["folderImageWrapper"]}>
          <div>
            <img
              className={styles["folderImage"]}
              src={logo}
              alt="Girl in a jacket"
            />
          </div>
        </div>
      </div>
      <div className={styles["pinkFolderWrapper"]}>
        <div className={styles["folderTitle"]}>Project report</div>
        <div className={styles["folderImageWrapper"]}>
          <div>
            <img
              className={styles["folderImage"]}
              src={logo}
              alt="Girl in a jacket"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { FolderComponent };
