import * as React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import styles from '../styles/home.module.css'

export default function Home() {
  return( 
  <Layout>
    <section>
      <h2 >Gatsby Develop</h2>
      <h3>How it works?</h3>
      <p>Let learn this concepts and impliment a sample project</p>
      <Link to = '/projects/'>My Portfolio</Link>
    </section>
  </Layout>)
}
