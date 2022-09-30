import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Button, Modal, PoolCard } from "../components";
import { useRouter } from "next/router";

import { hasCookie, setCookie } from "cookies-next";
import Image from "next/image";

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
  const [modal, setModal] = React.useState<
    "donate-done" | "how-to-donate" | "video" | ""
  >("");

  const router = useRouter();

  const handleDonationModal = () => {
    setModal("");
    router.push("/progress");
  };
  React.useEffect(() => {
    if (router.query && router.query.from === "donation") {
      setModal("donate-done");
    }
  }, [router.query]);

  React.useEffect(() => {
    if (!hasCookie("direct-ed-user")) {
      setModal("how-to-donate");
      setCookie("direct-ed-user", "not a stranger", { maxAge: 60 * 60 * 24 });
    }
  }, []);

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
      {/* Donate Modal */}
      <Modal
        open={modal === "donate-done"}
        onClose={() => setModal("")}
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
      {/* How To Modal */}
      <Modal
        open={modal === "how-to-donate"}
        onClose={() => setModal("")}
        className="h-fit rounded-md bg-light w-fit p-5 md:w-1/4 space-y-5 flex flex-col justify-center items-center"
      >
        <h1 className="text-3xl font-bold text-dark2 text-center">
          How To Donate
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          accusantium eaque nihil omnis! Dignissimos provident porro magni
          fugiat molestiae temporibus assumenda repellat amet.
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          accusantium eaque nihil omnis! Dignissimos provident porro magni
          fugiat molestiae temporibus assumenda repellat amet.
        </p>

        <div className="w-full h-40 relative">
          <Image
            onClick={() => setModal("video")}
            src="/static/images/video.png"
            layout="fill"
            alt="image"
          />
        </div>
        <Button
          onCick={handleDonationModal}
          className="btn-ghost bg-light2 text-primary font-bold text-lg w-fit"
        >
          Learn more
        </Button>
      </Modal>
      {/* Video modal */}
      <Modal
        open={modal === "video"}
        onClose={() => setModal("how-to-donate")}
        className="h-64 relative rounded-3xl overflow-hidden  w-full p-5 md:w-2/5 flex flex-col justify-center items-center"
      >
        <Image src="/static/images/video.png" layout="fill" alt="image" />
      </Modal>
    </>
  );
};

export default Home;
