import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) =>{
            return state + 1

        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/v2/D4D03AQGMtrksyEwLQQ/profile-displayphoto-shrink_800_800/B4DZOX.lE8HcAc-/0/1733421585459?e=1743638400&v=beta&t=dlHMeIBA4-TV7d3-8IY8qQXxSjVFJ93XV9ifzNUUcSc" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Oliveira</strong>
                            <time dateTime='2025-02-03 13:14:30'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentario'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                   <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                   </button>
                </footer>
            </div>
        </div>
    )
}