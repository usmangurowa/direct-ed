import { NextPage } from "next";
import Head from "next/head";

const Progress: NextPage = () => {
  return (
    <>
      <Head>
        <title>Direct Ed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container grid grid-cols-1 md:grid-cols-2 gap-10 py-8  justify-items-center">
        <div className="col-span-2">
          <h1 className="text-5xl text-black font-semibold text-center">
            Scholars’ Progress
          </h1>
        </div>
      </main>
    </>
  );
};

export default Progress;
