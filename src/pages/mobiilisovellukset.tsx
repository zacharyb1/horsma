import { NextPage } from "next";
import Head from "next/head";
import Menu from "../utils/menu";

const MobiilisovelluksetPage: NextPage = () => {
  return (
    <>
    <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Menu />
    
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
       
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Mobiilisovellukset</h1>
        <p>This is the Mobiilisovellukset page.</p>
        </div>
    </main>
    </>
  );
};

export default MobiilisovelluksetPage;

