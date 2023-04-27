import * as React from "react"
import {Link, graphql} from 'gatsby'
import Layout from "../components/layout"
import * as styles from '../styles/home.module.css'
import Img from 'gatsby-image'

export default function Home({data}) {
  console.log(data.file.childImageSharp.fluid)
  
  return( 
  <Layout>
    <section className={styles.header}>
      <div>
        <h2 >Gatsby Develop</h2>
        <h3>How it works?</h3>
        <p>Let learn this concepts and impliment a sample project</p>
        <Link className = {styles.btn} to = '/projects/'>My Portfolio</Link>
      </div>
      <img src = 'banner.png' alt = 'Banner Image' style = {{maxWidth: '100%'}}/> 
    </section>

  </Layout>)
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

}
`