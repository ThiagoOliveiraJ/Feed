import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css'




export function Post({ author, publishedAt, content,}) {
    const [comments, setComments] = useState([
        'Esse post é incrível!!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow =  formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event) {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Este campo é obrigatorio')
    }

    function deleteComment(commentToDelete) {
        const commentsWithouDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(commentsWithouDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else if( line.type === 'link'){
                        return <p key={line.content}> <a href={line.content}>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                value={newCommentText}
                placeholder='Deixe um comentário' 
                name='comment'
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentLIst}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    );
};