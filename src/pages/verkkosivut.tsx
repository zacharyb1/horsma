import { NextPage } from "next";
import Head from "next/head";
import Menu from "../utils/menu";

const VerkkosivutPage: NextPage = () => {
  return (
    <>
    <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Menu />
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        
        <div className="flex min-h-screen flex-col items-center justify-center">
            

        <h1>Verkkosivut</h1>
        <p>This is the Verkkosivut page.</p>
        </div>
    </main>
    </>
  );
};

export default VerkkosivutPage;

