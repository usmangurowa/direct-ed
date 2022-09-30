import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { FaChevronLeft } from "react-icons/fa";

const amounts: string[] = ["₳1000", "₳500", "₳100", "CUSTOM"];

const Donate: NextPage = () => {
  const [amount, setAmount] = React.useState<string>("");
  const router = useRouter();

  const handleDonate = () => {
    if (amount) {
      router.push("/donate/confirm");
    }
  };

  return (
    <>
      <Head>
        <title>Donate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full h-32 md:h-48">
        <Image src="/static/images/banner.png" layout="fill" />
      </div>
      <main className="container w-full py-4 space-y-8">
        <div className="flex items-center">
          <button
            onClick={() => router.back()}
            className="btn btn-ghost text-primary text-xl md:text-3xl"
          >
            <FaChevronLeft />
          </button>
          <div className="flex-grow">
            <h1 className="text-xl md:text-4xl text-dark2 text-center font-bold">
              Donate to Kagumo High School
            </h1>
          </div>
        </div>
        <div className="space-y-8 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl text-black">
            Select Donation Amount
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center justify-center">
            {amounts.map((amt: string) => (
              <button
                onClick={() => setAmount(amt)}
                className={`btn w-36 ${
                  amount === amt ? "btn-primary" : "bg-gray-200 btn-ghost"
                }`}
              >
                {amt}
              </button>
            ))}
          </div>
          <button
            onClick={handleDonate}
            className="capitalize btn btn-primary w-36"
          >
            donate
          </button>
        </div>
      </main>
    </>
  );
};

export default Donate;
