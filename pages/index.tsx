import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Button, Modal, PoolCard } from "../components";
import { useRouter } from "next/router";
import Link from "next/link";

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
  const [dontateModal, setDonateModal] = React.useState<boolean>(false);
  const router = useRouter();

  const handleDonationModal = () => {
    setDonateModal(false);
    router.push("/progress");
  };
  React.useEffect(() => {
    if (router.query && router.query.from === "donation") {
      setDonateModal(true);
    }
  }, [router.query]);

  return (
    <>
      <Head>
        <title>Direct Ed - Scholarship Pools</title>
      </Head>
      <main className="container grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-10 py-8  justify-items-center h-fit">
        <div className="md:col-span-2">
          <h1 className="text-2xl md:text-5xl text-black font-semibold text-center">
            Scholarship Pools
          </h1>
        </div>
        {data.map((d: DataType) => (
          <PoolCard key={d.title} {...d} />
        ))}
      </main>
      <Modal
        open={dontateModal}
        onClose={() => setDonateModal(false)}
        className="h-fit rounded-md bg-light w-fit p-5 md:w-2/5 space-y-6 flex flex-col justify-center items-center"
      >
        <h1 className="text-3xl font-bold text-dark2 text-center">
          Thank you for your donation to DirectEd
        </h1>
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          debitis eligendi necessitatibus? Nam officiis repudiandae eveniet
          doloremque, a esse inventore odit similique illo at quod enim labore
          atque. Ipsa, tempore.
        </p>

        <Button
          onCick={handleDonationModal}
          className="btn-ghost bg-light2 text-primary font-bold text-lg w-fit"
        >
          {"View Scholar’s Progress"}
        </Button>
      </Modal>
    </>
  );
};

export default Home;
