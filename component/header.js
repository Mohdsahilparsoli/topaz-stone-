import Head from 'next/head'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'





function Header() {
    const [toggleState, setToggleState] = useState(true);
    useEffect(()=>{
        
        if( toggleState === false) {
            document.getElementById('navigationSectionw').classList.add('show');
        } else {
            document.getElementById('navigationSectionw').classList.remove('show');
        }

    })
    
    const router = useRouter();

    return (
        <>
        <Head>


        <meta name="msvalidate.01" content="419EEAF421F998DF2A9BBBFEA34E272D" />
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
        />



<script
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

        <script type="application/ld+json"></script>

        </Head>
        
            <header className="header-main " id='openmenu'>
                <div className="container">
                    <div className="header-logo">
                        <Link href="/"><a> <Image src="/logo.png" alt="Topaz" width={203} height={52} /></a></Link>
                    </div>
                    <div className="navigation-section" id='navigationSectionw'>
                        <ul>
                            <li className={router.pathname == "/" ? "active" : ""}><Link href="/"><a>Home</a></Link></li>
                            <li className={router.pathname == "/" ? "" : ""}><Link href="/about"><a>About</a></Link></li>
                            <li><Link href="/product"><a>Products</a></Link></li>
                            <li><Link href="/gallery"><a>Gallery</a></Link></li>
                            <li><Link href="/contact"><a>Contact</a></Link></li>
                        </ul>
                    </div>
                    <button className='toggle-btn-menu' onClick={ () => { setToggleState(!toggleState) } }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="tel-mobile-section">
                        <p><a href="tel:(204) 694-8318"><Image src="/call.png" alt="images" width={24} height={24}  /> (204) 694-8318</a></p>
                        <p><a href="mailto:support@topazstone.ca"><Image src="/mail.png" alt="images" width={24} height={24}/> support@topazstone.ca</a></p>
                    </div>
                </div>
            </header>
        </>
    )
  }
  
  export default Header;