import React from "react";
import { MdAccountCircle } from "react-icons/md";
import styles from './fileDetails.module.css'
const FileDetailsComponent = () => {
  return (
  <div className={styles['mainContainer']}>
   <div className={styles['imageDetailsSection']}>
    <div className={styles['iconSection']}><MdAccountCircle size={"15px"} /></div>
    <div className={styles['DetailsSection']}>IMG_100000</div>

   </div>
   <div className={styles['fileTypeSection']}>PNG file</div>
   <div className={styles['fileSizeSection']}>5 MB</div>
   <div className={styles['shareSection']}><MdAccountCircle size={"15px"} /></div>
   <div className={styles['extraSection']}><MdAccountCircle size={"15px"} /></div>
    </div>
    
    )
};

export { FileDetailsComponent };
