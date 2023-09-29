import { NextPage } from "next";
import Head from "next/head";

const YhteystiedotPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">

        <div>
            <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Yhteystiedot</h1>
        <p>This is the Yhteystiedot page.</p>
        </div>
    </main>
  );
};

export default YhteystiedotPage;

