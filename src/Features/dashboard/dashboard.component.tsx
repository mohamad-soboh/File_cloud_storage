import React from "react";
import {
  MdAccountCircle,
  MdCloudUpload,
  MdNotStarted,
  MdSchool,
  MdOutlineAdd,
} from "react-icons/md";
import { AiFillStar, AiFillPlayCircle, AiFillDatabase } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaArchive } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { BoxComponent } from "../widget/box.component";
import { NavBarComponent } from "../navBar/navBar.component";
import { SearchBarComponent } from "../searchBar/searchBar.component";
import styles from "./dashboard.module.css";
import { SideBarComponent } from "../sideBar/sideBar.component";
import { FileDetailsComponent } from "../fileDetails/fileDetails.component";

const Categories = [
  {
    title: `Pictures`,
    desc: `480 files`,
    typeIcon: <MdAccountCircle size={"22px"} />,
    favoritesIcon: <AiFillStar size={"18px"} />,
    color: "Purple",
    boxType: "Cat",
    flag: "true",
  },
  {
    title: `Documents`,
    desc: `190 files`,
    typeIcon: <MdCloudUpload size={"22px"} />,
    favoritesIcon: <AiFillStar size={"18px"} />,
    color: "Green",
    boxType: "Cat",
    flag: "fasle",
  },
  {
    title: `Videos`,
    desc: `30 files`,
    typeIcon: <AiFillPlayCircle size={"22px"} />,
    favoritesIcon: <AiFillStar size={"18px"} />,
    color: "Pink",
    boxType: "Cat",
    flag: "fasle",
  },
  {
    title: `Audio`,
    desc: `80 files`,
    typeIcon: <MdNotStarted size={"22px"} />,
    favoritesIcon: <AiFillStar size={"18px"} />,
    color: "Blue",
    boxType: "Cat",
    flag: "fasle",
  },
];
const Files = [
  {
    title: `Work`,
    desc: `820 files`,
    typeIcon: <AiFillDatabase size={"22px"} color={"rgb(102, 99, 254)"} />,
    favoritesIcon: <AiFillStar size={"18px"} />,
    color: "White",
    boxType: "Files",
    flag: "false",
  },
  {
    title: `Personal`,
    desc: `115 files`,
    typeIcon: <BsFillPersonFill size={"22px"} color={"rgb(0, 160, 182)"} />,
    favoritesIcon: <AiFillStar size={"18px"} />,
    color: "White",
    boxType: "Files",
    flag: "fasle",
  },
  {
    title: `School`,
    desc: `65 files`,
    typeIcon: <MdSchool size={"22px"} color={"rgb(224, 108, 159)"} />,
    favoritesIcon: <AiFillStar size={"18px"} />,
    color: "White",
    boxType: "Files",
    flag: "fasle",
  },
  {
    title: `Archive`,
    desc: `21 files`,
    typeIcon: <FaArchive size={"22px"} color={"rgb(38, 111, 213)"} />,
    favoritesIcon: <AiFillStar size={"18px"} />,
    color: "White",
    boxType: "Files",
    flag: "fasle",
  },
  {
    title: ``,
    desc: ``,
    typeIcon: <MdOutlineAdd size={"22px"} color={"rgb(38, 111, 213)"} />,
    favoritesIcon: ``,
    color: "Add",
    boxType: "Add",
    flag: "fasle",
  },
];

const DashboardComponent = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <NavBarComponent />
      </div>
      <div style={{ backgroundColor: "rgb(235, 242, 252)", flex: "4" }}>
        <div className={styles["Section"]}>
          <SearchBarComponent />
          <h1 className={styles["title"]}>
            <b>Categories</b>
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "30px",
            }}
          >
            <BoxComponent menuItems={Categories} />
          </div>
        </div>
        <div className={styles["Section"]}>
          <h1 className={styles["title"]}>
            <b>Files</b>
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "30px",
            }}
          >
            <BoxComponent menuItems={Files} />
          </div>
        </div>
        <div className={styles["Section"]}>
          <h1 className={styles["title"]}>
            <b>Recent files</b>
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "30px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <FileDetailsComponent />
              <FileDetailsComponent />
              <FileDetailsComponent />
              <FileDetailsComponent />
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "rgb(235, 242, 252)", flex: "3" }}>
        <SideBarComponent />
      </div>
    </div>
  );
};

export { DashboardComponent };
