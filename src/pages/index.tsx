
import Head from "next/head";
import Link from "next/link";
import Menu from "../utils/menu";


import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Laadukkaat kotisivut yritykselle</title>
        <meta name="description" content="Laadukkaat kotisivut ja digipalvelut yrityksellesi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">

    {/* Try to imlement the template first to undestand how animations work */}

    {/*<div class="hero-banner banner-bg2">
    <div class="d-table">
        <div class="d-table-cell">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="hero-main-banner-content">
                            <span class="sub-title">Your brand, promoted</span>
                            <h1>Creative solutions to improve your business!</h1>
                            <p>We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements.</p>
                            <form>
                                <input type="email" class="input-newsletter" placeholder="Enter your email" name="EMAIL">
                                <button type="submit">Get Started</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="hero-main-banner-image">
                            <div class="animated" style="animation-duration:1s;opacity:0"><img src="/images/banner-image/man.png" alt="man"></div>
                            <div class="animated" style="animation-duration:1s;opacity:0"><img src="/images/banner-image/code.png" alt="code"></div>
                            <div class="animated" style="animation-duration:1s;opacity:0"><img src="/images/banner-image/carpet.png" alt="carpet"></div>
                            <div class="animated" style="animation-duration:1s;opacity:0"><img src="/images/banner-image/bin.png" alt="bin"></div>
                            <div class="animated" style="animation-duration:1s;opacity:0"><img src="/images/banner-image/book.png" alt="book"></div>
                            <div class="animated" style="animation-duration:1s;opacity:0"><img src="/images/banner-image/desktop.png" alt="desktop"></div>
                            <div class="animated" style="animation-duration:1s;opacity:0"><img src="/images/banner-image/dot.png" alt="dot"></div>
                            <div class="animated" style="animation-duration:1s;opacity:0"><img src="/images/banner-image/flower-top-big.png" alt="flower-top-big"></div>
                            <div class="animated" style="animation-duration:1s;opacity:0"><img src="/images/banner-image/flower-top.png" alt="flower-top"></div>
                            <div class="animated" style="animation-duration:1s;opacity:0"><img src="/images/banner-image/keyboard.png" alt="keyboard"></div>
                            <div class="animated" style="animation-duration:1s;opacity:0"><img src="/images/banner-image/pen.png" alt="pen"></div>
                            <div class="animated" style="animation-duration:1s;opacity:0"><img src="/images/banner-image/table.png" alt="table"></div>
                            <div class="animated" style="animation-duration:1s;opacity:0"><img src="/images/banner-image/tea-cup.png" alt="tea-cup"></div>
                            <div class="animated" style="animation-duration:1s;opacity:0"><img src="/images/banner-image/headphone.png" alt="headphone"></div>
                            <div class="animated fadeInUp" style="animation-duration: 1s;"><img src="/images/banner-image/main-pic.png" alt="main-pic"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="shape-img1">
        <div class="animated fadeInUp" style="animation-duration: 1s;"><img src="/images/shape/shape1.png" alt="image"></div>
    </div>
    <div class="shape-img2"><img src="/images/shape/shape2.svg" alt="image"></div>
    <div class="shape-img3"><img src="/images/shape/shape3.svg" alt="image"></div>
    <div class="shape-img4"><img src="/images/shape/shape4.png" alt="image"></div>
    <div class="shape-img5"><img src="/images/shape/shape5.png" alt="image"></div>
    <div class="shape-img6"><img src="/images/shape/shape6.png" alt="image"></div>
    <div class="shape-img7"><img src="/images/shape/shape7.png" alt="image"></div>
    <div class="shape-img8"><img src="/images/shape/shape8.png" alt="image"></div>
    <div class="shape-img9"><img src="/images/shape/shape9.png" alt="image"></div>
    <div class="shape-img10"><img src="/images/shape/shape10.png" alt="image"></div>
</div>*/}

    


    <div className="hero-banner banner-bg2">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="hero-main-banner-content">
                  <span className="sub-title">Your brand, promoted</span>
                  <h1>Creative solutions to improve your business!</h1>
                  <p>We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements.</p>
                  <form>
                    <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" />
                    <button type="submit">Get Started</button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="hero-main-banner-image">
                  <div className="animated" style={{ animationDuration: '1s', opacity: 0 }}>
                    <img src="../images/banner-image/man.png" alt="man" />
                  </div>
                  <div className="animated" style={{ animationDuration: '1s', opacity: 0 }}>
                    <img src="../images/banner-image/code.png" alt="code" />
                  </div>
                  <div className="animated" style={{ animationDuration: '1s', opacity: 0 }}>
                    <img src="../images/banner-image/carpet.png" alt="carpet" />
                  </div>
                  <div className="animated" style={{ animationDuration: '1s', opacity: 0 }}>
                    <img src="../images/banner-image/bin.png" alt="bin" />
                  </div>
                  <div className="animated" style={{ animationDuration: '1s', opacity: 0 }}>
                    <img src="../images/banner-image/book.png" alt="book" />
                  </div>
                  <div className="animated" style={{ animationDuration: '1s', opacity: 0 }}>
                    <img src="../images/banner-image/desktop.png" alt="desktop" />
                  </div>
                  <div className="animated" style={{ animationDuration: '1s', opacity: 0 }}>
                    <img src="../images/banner-image/dot.png" alt="dot" />
                  </div>
                  <div className="animated" style={{ animationDuration: '1s', opacity: 0 }}>
                    <img src="../images/banner-image/flower-top-big.png" alt="flower-top-big" />
                  </div>
                  <div className="animated" style={{ animationDuration: '1s', opacity: 0 }}>
                    <img src="../images/banner-image/flower-top.png" alt="flower-top" />
                  </div>
                  <div className="animated" style={{ animationDuration: '1s', opacity: 0 }}>
                    <img src="../images/banner-image/keyboard.png" alt="keyboard" />
                  </div>
                  <div className="animated" style={{ animationDuration: '1s', opacity: 0 }}>
                    <img src="../images/banner-image/pen.png" alt="pen" />
                  </div>
                  <div className="animated" style={{ animationDuration: '1s', opacity: 0 }}>
                    <img src="../images/banner-image/table.png" alt="table" />
                  </div>
                  <div className="animated" style={{ animationDuration: '1s', opacity: 0 }}>
                    <img src="../images/banner-image/tea-cup.png" alt="tea-cup" />
                  </div>
                  <div className="animated" style={{ animationDuration: '1s', opacity: 0 }}>
                    <img src="../images/banner-image/headphone.png" alt="headphone" />
                  </div>
      

                  <div className="animated fadeInUp" style={{ animationDuration: '1s' }}>
                    <img src="/images/banner-image/main-pic.png" alt="main-pic" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-img1">
        <div className="animated fadeInUp" style={{ animationDuration: '1s' }}>
          <img src="../images/shape/shape1.png" alt="image" />
        </div>
      </div>
      <div className="shape-img2">
        <img src="../images/shape/shape2.svg" alt="image" />
      </div>
      <div className="shape-img3">
        <img src="../images/shape/shape3.svg" alt="image" />
      </div>
      <div className="shape-img4">
        <img src="/..images/shape/shape4.png" alt="image" />
      </div>
      <div className="shape-img5">
        <img src="../images/shape/shape5.png" alt="image" />
      </div>
      <div className="shape-img6">
        <img src="../images/shape/shape6.png" alt="image" />
      </div>
      <div className="shape-img7">
        <img src="../images/shape/shape7.png" alt="image" />
      </div>
      <div className="shape-img8">
        <img src="../images/shape/shape8.png" alt="image" />
      </div>
      <div className="shape-img9">
        <img src="../images/shape/shape9.png" alt="image" />
      </div>
      <div className="shape-img10">
        <img src="../images/shape/shape10.png" alt="image" />
      </div>
    </div>










    


      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <p className="text-white text-center">Miksi tarvitset</p>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] text-center">
          Laadukkaat kotisivut ja digipalvelut yrityksellesi?
          </h1>
          <p className="text-white text-center">Koska</p>
        <div className="container flex flex-col items-center justify-center gap-12 px-4  ">
            <h3 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] text-center">
              Modernit kotisivut palvelevat kävijöitä paremmin ja tuottavat enemmän kauppaa
            </h3>
            <p className="text-2xl text-white text-center">
              Lähes jokainen ostoprosessi verkossa alkaa Googlesta. Yrityksen kotisivut tavoittavat asiakkaat ennen yrityksen henkilökuntaa. Valitse kotisivuillesi ammattitekijä ja laita yrityksesi julkisivu ja kassavirta kuntoon. Nopea, näyttävä ja hakukoneoptimoitu WordPress-verkkosivusto tehostaa yrityksen myyntiä ja vahvistaa brändiä. Hanki kotisivut yritykselle helposti ja vaivattomasti Horsmalta.
            </p>
            <div className="bg-gray-900 p-4">





              <div className="text-center text-white">
                <span className="text-3xl font-bold "> Yrityksen kotisivut ovat tärkeä osa yrityksen markkinointia ja myyntiä. 
                </span>
              
          
              <p className="list-item py-4">Rakenna brändiä, luo uskottavuutta sekä tee tulosta hakukoneoptimoiduilla ja laadukkailla kotisivuilla.</p>
              <p className="list-item">Laadukas, optimoitu sivusto</p>
              <p className="list-item py-4">Sopii kiireiselle yrittäjälle, joka ei halua käyttää paljon aikaa projektiin</p>
              <p className="list-item">Haluat löytyä Googlesta ja ohjata asiakkaat yhteydenottoon</p>
              </div>
            </div>
            
        
        </div>
        

        
        
        

        
              <p className="text-2xl text-white">
                Ota yhteyttä!
              </p>
              <div className="text-center text-white">
                <p>moi@horsmadigi.com</p>
                <p>Y-tunnus: 3139914-9</p>
                <p>Servinkuja 1, Otaniemi</p>
                <p>02150 Espoo</p>
              </div>

            <form className="flex flex-col items-center mt-8">
        <label htmlFor="email" className="text-white mb-2 text-center" >
          Haluatko saada parhaat tarjoukset yrityksellesi? <br></br> Tilaa uutiskirjeemme!
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Sähköpostiosoite"
          className="border border-white rounded-md px-4 py-2 text-black mb-4"
        />
        <button className="bg-white text-black px-4 py-2 rounded-md">Tilaa</button>
      </form>
        
    
    </div>
    </main>
    </>
  );
}
