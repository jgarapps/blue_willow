import Head from "next/head";
import { useRouter } from "next/router";
import { slugData } from "../api/dummydata";
import Image from "next/image";

export default function Service() {
  const router = useRouter()
  const slug = router.asPath.replace("/", "").replace("%20", " ").replace("-", " ")
  const slugDatas = slugData.filter((x) => x.name === slug); 
 
  return (
    <>
      <Head>
        <title>{slug}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <header className="header set_bg" style={{backgroundImage: `url(${slugDatas[0]?.image})`}}>
        <div>
          <h1>{slugDatas[0]?.name}</h1></div>
        </header>
      <section>    
        <div className="content">
          <h2>Why we love <span>{slug}</span></h2>
        </div>
      </section>
      <aside className="content">
        <div className="inner-content">  
        <ul>Sights to see:
         
            </ul>
        </div>          
        <h2>More details about this city</h2>
      </aside>
    </>
  );
}
