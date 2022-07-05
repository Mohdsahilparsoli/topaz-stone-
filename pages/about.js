import Choosetopaz from "../component/choosetopaz"
import Head from 'next/head'
import Footer from "../component/footer"
import Header from "../component/header"
import Homeabout from "../component/homeaboutsection"


 function AboutUs11({data}) {

  const aboutMeta = data.find( (item) =>  item.Page == 'About' ? item : null )


    return (
      // <div className={styles.container}>
      <div className='home-page'>
        <Head>
        {/* <title>{aboutMeta.Title}</title>
          <meta name="description" content={aboutMeta.Description} /> */}
           <title>About us| Quartz Stone for Kitchen | Affordable Countertops in Winnipeg</title>
           
          <meta name="description" content="Topaz quartz countertops. The next generation of quartz countertops
              for your home. The most innovative and competitively priced quartz countertops in
              Winnipeg."/> 
          <link rel="icon" href="/fev.ico" />

          
          {/* <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-1P0WMQFVYD');
          </script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-231943799-1"></script>
          <script>

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'UA-231943799-1');
          </script>
      */}
         
        </Head>
        <Header/>
        <Homeabout/>
        <Choosetopaz/>

        <Footer />
      </div>
    )
  }



  export async function getStaticProps(context) {
    const res = await fetch('https://admin.topazstone.ca/meta-tags')
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }
  
  export default AboutUs11