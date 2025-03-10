import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'


import './global.css'
import styles from './app.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Nathaliaaguiar.png',
      name: 'Jane Aguiar',
      role: 'Desenvolvedora Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2025-01-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQGgIcoxncAvtg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1696085299007?e=1746057600&v=beta&t=cnwFNXFs7p_K9wEeZngUG17LDpKC6gs9HfcHOXBifwc',
      name: 'Adryan Miller',
      role: 'Developer Back-End '
    },
    content: [
      { type: 'paragraph', content: 'Gostaria de compartilhar 😁' },
      { type: 'paragraph', content: 'que estou cursando Engenharia de software na instituição Anhaguera' },
      { type: 'link', content: 'https://github.com/AdryanMiller' }
    ],
    publishedAt: new Date('2024-01-03 20:00:00'),
  }
];


function App() {


  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
