import React from 'react'
import Layout from '../../components/layout'
import styles from '../../styles/projects.module.css'

export default function Project() {
  return (
    <Layout>
    <div className={styles.portfolio}>
        <h1>Projects</h1>
        <p>If you create a index.js file inside the projects directory
            then it will be considered as a base file and it can be accessed using localhost:8000/projects.
        </p>
    </div>
    </Layout>
  )
}
