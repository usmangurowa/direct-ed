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

const Navbar = () => {
  return (
    <nav className="bg-primary h-[10vh] w-full">
      <div className="navbar h-full w-full container">
        <div className="navbar-start flex items-center space-x-3">
          <Image
            id="logo"
            src="/static/images/logo.png"
            width={50}
            height={50}
            alt="Direct Ed Logo"
          />
          <div>
            <h1 className="text-white text-xl font-semibold" id="title">
              DirectEd
            </h1>
            <p className="text-white" id="subtitle">
              Realising Potential
            </p>
          </div>
        </div>
        <div className="navbar-center">
          <ul className="flex items-center space-x-5">
            {NavLinks.map((link: LinksType, index: number) => (
              <Link href={link.link} passHref>
                <a>
                  <li className="text-xl font-semibold text-white">
                    {link.title}
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-light text-primary hover:bg-light font-semibold hover:border-none">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
