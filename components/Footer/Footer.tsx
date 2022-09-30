import Image from "next/image";
import Link from "next/link";
import React from "react";

type LinksType = {
  title: string;
  link: string;
};

const NavLinks: LinksType[] = [
  { title: "Scholarship Pools", link: "#" },
  { title: "Scholars’ Progress", link: "#" },
  { title: "Transactions", link: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-primary h-[10vh] w-full">
      <div className="h-full w-full container flex items-center justify-between">
        <Link href="https://directed.dev/">
          <button className="btn btn-sm bg-primary-light border-none hover:bg-primary-light hover:border-none text-white">
            need help?
          </button>
        </Link>
        <Link href="https://directed.dev/">
          <button className="btn btn-sm bg-primary-light border-none hover:bg-primary-light hover:border-none text-white">
            have a suggestion?
          </button>
        </Link>
        <div className="flex flex-col">
          <span className="text-white">
            Terms and Conditions | Privacy Policy{" "}
          </span>
          <span className="text-white">
            &copy; {new Date().getFullYear()} DirectEd. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
