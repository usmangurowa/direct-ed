import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineAccessTime } from "react-icons/md";

const PoolsCard = ({ title, image }: { title?: string; image?: string }) => {
  return (
    <div className="w-full h-fit md:w-4/5 bg-light2 rounded-lg overflow-hidden shadow-md">
      <div className="w-full h-48 relative">
        <Image src={`${image}`} layout="fill" alt="Pool Image" />
      </div>
      <div className="p-5">
        <h1 className="font-semibold text-xl text-center">{title}</h1>
        <Link href={"https://directed.dev/"} passHref>
          <a>
            <p className="text-center">Read more</p>
          </a>
        </Link>
      </div>
      <div className="px-5">
        <div className="divide-x divide-light flex items-center w-full border-b border-light">
          <div className="w-1/2 py-2">
            <h1 className="font-semibold text-xl text-center">23</h1>
            <p className="text-center">Scholarships funded</p>
          </div>
          <div className="w-1/2 py-2">
            <h1 className="font-semibold text-xl text-center">1</h1>
            <p className="text-center">Remaining scholarship naming right</p>
          </div>
        </div>
      </div>
      <div className="px-12 py-5 space-y-2 font-semibold">
        <div className="text-primary text-base flex items-start justify-between">
          <span className="flex items-center space-x-2">
            <MdOutlineAccessTime /> <span>33 days left</span>
          </span>
          <span>124 people have donated</span>
        </div>
        <progress
          className="progress progress-primary w-full bg-slate-300"
          value="80"
          max="100"
        ></progress>
        <h1 className="text-base font-bold text-dark2">
          $300 to fund the next scholarship{" "}
        </h1>
      </div>
      <div className="flex items-center justify-center p-5">
        <Link href={"/donate"}>
          <button className="btn btn-primary">donate now</button>
        </Link>
      </div>
    </div>
  );
};

export default PoolsCard;
