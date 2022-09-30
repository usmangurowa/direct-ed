import type { NextPage } from "next";
import Head from "next/head";
import { PoolCard } from "../components";

type DataType = {
  title: string;
  image: string;
};

const data: DataType[] = [
  {
    title: "Kagumo High School",
    image: "/static/images/kagumo.png",
  },
  {
    title: "Strathmore High School",
    image: "/static/images/strathmore.png",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Direct Ed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container grid grid-cols-1 md:grid-cols-2 gap-10 py-8  justify-items-center">
        <div className="col-span-2">
          <h1 className="text-5xl text-black font-semibold text-center">
            Scholarship Pools
          </h1>
        </div>
        {data.map((d: DataType) => (
          <PoolCard key={d.title} {...d} />
        ))}
      </main>
    </>
  );
};

export default Home;
