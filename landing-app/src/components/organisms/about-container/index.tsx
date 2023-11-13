import React from 'react'
import styles from './index.module.css';
import { AboutLayout } from '../../molecules/about-layout/index';

export const AboutContainer = () => {
    return (
        <div>
            <div className={styles.title}>
                <h1>Sobre</h1>
            </div>
            <div className={styles.container}>
                <AboutLayout
                    img='https://th.bing.com/th/id/OIP.ADDc_LmhZzK0dDLpRgQTJQHaE6?pid=ImgDet&rs=1'
                    content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae dolorem corrupti quisquam totam harum necessitatibus labore esse consequatur quis fuga! Voluptatum officiis libero aut similique repudiandae modi eius praesentium recusandae!
                Neque iste blanditiis porro aliquid nihil autem, quo dignissimos, exercitationem nisi quasi, impedit facere veniam illum? Possimus illo similique explicabo numquam, inventore, quibusdam, odit provident blanditiis cumque sit praesentium sunt!
                Beatae id deleniti enim laboriosam soluta nam, numquam neque sunt amet impedit a dolores doloremque repellat sequi nihil, laudantium illo dolorum quibusdam reprehenderit dolorem veniam veritatis quod deserunt. Omnis, velit.`}
                />
                <AboutLayout
                    img='https://thumbs.dreamstime.com/b/work-13841847.jpg'
                    content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae dolorem corrupti quisquam totam harum necessitatibus labore esse consequatur quis fuga! Voluptatum officiis libero aut similique repudiandae modi eius praesentium recusandae!
                Neque iste blanditiis porro aliquid nihil autem, quo dignissimos, exercitationem nisi quasi, impedit facere veniam illum? Possimus illo similique explicabo numquam, inventore, quibusdam, odit provident blanditiis cumque sit praesentium sunt!
                Beatae id deleniti enim laboriosam soluta nam, numquam neque sunt amet impedit a dolores doloremque repellat sequi nihil, laudantium illo dolorum quibusdam reprehenderit dolorem veniam veritatis quod deserunt. Omnis, velit..`}
                />
            </div>
        </div>
    )
}
