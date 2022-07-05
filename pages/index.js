
import Head from "next/head";
import Banner from "../component/banner";
import Header from "../component/header";
import Footer from "../component/footer";
import Homeabout from "../component/homeaboutsection";
import Homegallery from "../component/homegallerry";
import Homereliable from "../component/homereliable";
import Beinnovative from "../component/beinnovative";
import Homaffordabless from "../component/homeaffordabless";


function Home({ data }) {
  const homeMeta = data.find((item) => (item.Page == "Home" ?  item : null));

  return (
    // <div className={styles.container}>
    <div className="home-page">
     
      <Head>
        {/* <title>{homeMeta.Title}</title>
        <meta name="description" content={homeMeta.Description} /> */}
         <title>Quartz Countertops Winnipeg | Quartz Kitchen Countertops | Topaz Stone</title> 
        <meta name="description" content="Looking for Kitchen Countertops? Topaz Stone offers exceptional and functional quartz countertops in Winnipeg in beautiful and contemporary colors." />
        <link rel="icon" href="/fev.ico" />
        
        
         {/* <meta name="msvalidate.01" content="419EEAF421F998DF2A9BBBFEA34E272D" />
        <meta
          name="google-site-verification"
          content="uIwI3WWXmvsHMEHvITahlr0bItpb_Dvg2tFZiGWoO0s"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1P0WMQFVYD"
        ></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-1P0WMQFVYD');`,
          }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-231943799-1"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'UA-231943799-1');`,
          }}
        /> */}

        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              image: [
                "https://topazstone.ca/_next/image?url=%2Flogo.png&w=256&q=75",
              ],
              "@id": "https://topazstone.ca/",
              name: "Topaz Stone",
              address: {
                "@type": "PostalAddress",
                streetAddress: "177 Eagle Drive",
                addressLocality: "Winnipeg ",
                addressRegion: "Manitoba",
                postalCode: "R2R 1V4",
                addressCountry: "Canada",
              },
              url: "https://topazstone.ca/",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Store",
              name: "Topaz Stone",
              description:
                "Topaz Stone offers exceptional and functional quartz countertops in Winnipeg, available in beautiful and contemporary colors.",
              image:
                "https://topazstone.ca/_next/image?url=%2Flogo.png&w=256&q=75",
              telephone: "(204) 694-8318",
              priceRange: "",
              hasPOS: "",
              knowsLanguage: "English",
              hasMap:
                "https://www.google.com/maps/place/Topaz+Stone/@49.934397,-97.2300893,17z/data=!3m1!4b1!4m5!3m4!1s0x52ea737070ffefc3:0x87619ff1b751cb3c!8m2!3d49.934397!4d-97.2279006",
              address: {
                "@type": "PostalAddress",
                streetAddress: "177 Eagle Drive",
                addressLocality: "Winnipeg",
                addressRegion: "Manitoba",
                addressCountry: "Canada",
              },
            }),
          }}
        />

        <script type="application/ld+json"></script>  */}
      </Head>
  
      <Header />
      <Banner />
      <Homeabout />
      <Homegallery />
      <Homereliable />
      <Beinnovative />
      <Homaffordabless />
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://admin.topazstone.ca/meta-tags");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Home;
