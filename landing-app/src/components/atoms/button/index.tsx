import React from 'react'
import styles from "./index.module.css";
import ButtonProps from '../../interfaces/button-props.interface';

export const Button = ({name,width,onClick,type}:ButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
        <button type={type} onClick={onClick} >{name}</button> 
    </div>
  )
}
