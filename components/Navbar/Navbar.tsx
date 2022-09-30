import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { sleep } from "../../utils";
import Modal from "../Modal";

type LinksType = {
  title: string;
  link: string;
};

const NavLinks: LinksType[] = [
  { title: "Scholarship Pools", link: "/" },
  { title: "Scholars’ Progress", link: "/progress" },
  { title: "Transactions", link: "/transactions" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const [wallet, setWallet] = React.useState<boolean>(false);

  const handleConnectWallet = async () => {
    setLoading(true);
    await sleep(2000).then(() => {
      setLoading(false);
      setWallet(true);
      setOpen(true);
    });
  };

  const router = useRouter();

  return (
    <>
      <nav className="bg-primary h-[10vh] w-full">
        <div className="navbar h-full w-full container">
          <Link href="https://directed.dev/">
            <div className="navbar-start flex items-center space-x-3 cursor-pointer">
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
          </Link>
          <div className="navbar-center">
            <ul className="flex items-center space-x-5">
              {NavLinks.map((link: LinksType, index: number) => (
                <Link href={link.link} passHref>
                  <a>
                    <li
                      className={`text-xl text-white ${
                        router.pathname === link.link
                          ? "font-semibold underline"
                          : "font-light"
                      }`}
                    >
                      {link.title}
                    </li>
                  </a>
                </Link>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <button
              onClick={handleConnectWallet}
              className={`btn modal-button bg-light text-primary hover:bg-light font-semibold hover:border-none ${
                loading && "loading"
              }`}
            >
              {loading ? (
                "connecting..."
              ) : (
                <>
                  {wallet ? (
                    <span className="normal-case text-lg">$directEd</span>
                  ) : (
                    "Connect Wallet"
                  )}
                </>
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className="w-fit space-y-8"
      >
        <h3 className="font-semibold text-2xl text-center w-64 capitalize">
          you have successfully connected a wallet!
        </h3>
        <button
          onClick={() => setOpen(false)}
          className="btn btn-primary btn-block"
        >
          Close
        </button>
      </Modal>
    </>
  );
};

export default Navbar;
