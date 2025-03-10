import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://r2.fivemanage.com/1IyV3kQ2f4RhumhQWZZkx/images/Banner_LinkedinV2.jpg" 
            />
            <div className={styles.profile}>
               <Avatar src="https://media.licdn.com/dms/image/v2/D4D03AQGMtrksyEwLQQ/profile-displayphoto-shrink_800_800/B4DZOX.lE8HcAc-/0/1733421585459?e=1743638400&v=beta&t=dlHMeIBA4-TV7d3-8IY8qQXxSjVFJ93XV9ifzNUUcSc"/>
                <strong>Thiago Oliveira</strong>
                <span>Front end Developer</span>
            </div>
            <footer>
                <a href="">
                    <PencilLine size={20} />
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
}