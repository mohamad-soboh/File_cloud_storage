import React from "react";
import styles from "./navBar.module.css";
import logo from "./profile.webp";
import "@fontsource/work-sans"; 
import { MdAccountCircle,MdCloudUpload,MdSettings,MdLogout} from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";


const menuItems = [
  { name: `My cloud`, icon:<MdAccountCircle size={"22px"} /> },
  { name: `Shared files`,icon:<IoIosPeople size={"22px"} /> },
  { name: `Favorites`, icon:<AiFillStar size={"22px"} /> },
  { name: `Upload files`, icon:<MdCloudUpload size={"22px"} /> },
];
const NavBarComponent = () => {
  return (
    <div className={styles["navBarWrapper"]}>
      <div className={styles["profileimageWrapper"]}>
        <div>
          <img
            className={styles["profileimage"]}
            src={logo}
            alt="Girl in a jacket"
          />
        </div>
      </div>
      {menuItems.map((item,index) => (
        <div className={styles["menu"]} key={index}>
          <div className={styles["menuIcon"]} >
            {item.icon }
          </div>
          <div className={styles["menuOption"]}>
            <p>{item.name}</p>
          </div>
        </div>
      ))}

      <div style={{marginTop:'330px'}}>
        <div className={styles["menu"]}>
          <div className={styles["menuIcon"]}>
            <MdSettings size={"22px"}/>
          </div>
          <div className={styles["menuOption"]}>
            <p>Settings</p>
          </div>
        </div>
        </div>

        <div className={styles["menu"]}>
          <div className={styles["menuIcon"]}>
            <MdLogout size={"22px"}/>
          </div>
          <div className={styles["menuOption"]}>
            <p>Log out</p>
          </div>
        </div>
    </div>
  );
};

export { NavBarComponent };
