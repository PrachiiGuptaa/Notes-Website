import React from 'react'
import styles from './HomePage.module.css'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/addnotes')
    }

  return (
    <>
    <div className={styles.wrapper} id='home'>
         <section className={styles.description}>
            <span>
                <h1>Add Notes</h1>
                <span className={styles.para}>
                <p><strong>"Take Note, Take Control"</strong></p>
                <p>Fuel Your Productivity with Our Versatile and User-Friendly Website.</p>
                <p>Click on <strong>Get Started</strong> to <strong>Capture your thoughts, ideas, and inspiration</strong>!</p>
                </span>
            </span>
            <button className={styles.btn} onClick={handleClick}>Get Started</button>
        </section>
        {/* <section className={styles.sideImg}>
            <img src='https://thumbs.dreamstime.com/b/painted-light-bulb-lamp-word-idea-colored-blank-notes-cork-board-144164038.jpg' alt='Notes'/>
        </section> */}
    </div>
    <div className={styles.overview}>
     <section id='overview'>
     <img src='https://t3.ftcdn.net/jpg/00/80/73/10/360_F_80731064_fe6wouwQAgdkHFiC8iiIFUCcpJAZcn08.jpg' alt='<h1>Overview</h1>'/>
         <div className={styles.overviewpara}>
            <p>"Welcome to our powerful notes website, designed to revolutionize the way you capture and organize your ideas. Our website offers a user-friendly interface that empowers you to effortlessly create, and access your notes from anywhere, at any time. With features such as intuitive note-taking, and seamless synchronization across devices, you can stay productive and never miss a beat. Whether you're a student, professional, or creative thinker, our notes website is your ultimate companion for boosting productivity, sparking creativity, and bringing your ideas to life."</p><br/>
            <p>
            Embark on a transformative journey of productivity and creativity, where your thoughts, ideas, and inspiration take center stage. Explore the limitless possibilities and ignite your potential with our empowering notes website.
            </p>
         </div>
     </section>
     </div>
     </>
  )
}

export default HomePage
