import React from 'react'
import styles from './index.module.css';
interface Props {
    img: string;
    content: string;
}
export const AboutLayout = ({ img, content }: Props) => {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.contentLayout}>
                <img src={img} alt="" />
                <p>{content}</p>
            </div>
        </div>
    )
}
