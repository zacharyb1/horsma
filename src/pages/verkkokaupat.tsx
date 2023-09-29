import { NextPage } from "next";
import Head from "next/head";

const VerkkokaupatPage: NextPage = () => {
  return (
    
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <nav className="bg-gray-900 w-full">
        <ul className="flex justify-end items-right h-full ml-auto">
            <li>
                <a href="/" className="text-white font-bold text-lg">Etusivu</a>
            </li>
            <li>
                <a href="verkkosivut" className="text-white font-bold text-lg">Verkkokaupat</a>
            </li>
            <li>
                <a href="mobiilisovellukset" className="text-white font-bold text-lg">Mobiilisovellukset</a>
            </li>
            <li>
                <a href="yhteystiedot" className="text-white font-bold text-lg">Yhteystiedot</a>
            </li>
            </ul>
    </nav>
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Verkkokaupat</h1>
        <p>This is the Verkkokaupat page.</p>
        </div>
    </main>
  );
};

export default VerkkokaupatPage;

