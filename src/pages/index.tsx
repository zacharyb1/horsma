import Head from "next/head";
import Link from "next/link";


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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">

      <nav className="bg-gray-800 w-full">
  <ul className="flex justify-end items-right h-full ml-auto">
    <li>
      <a href="#" className="text-white font-bold text-lg">Verkkosivut</a>
    </li>
    <li>
      <a href="#" className="text-white font-bold text-lg">Verkkokaupat</a>
    </li>
    <li>
      <a href="#" className="text-white font-bold text-lg">Mobiilisovellukset</a>
    </li>
    <li>
      <a href="#" className="text-white font-bold text-lg">Yhteystiedot</a>
    </li>
  </ul>
</nav>



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
          <div className="bg-gray-800 p-4">
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
