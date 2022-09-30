import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { sleep } from "../../utils";
import Button from "../Button";
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
      <nav className="bg-primary h-fit py-2 w-full">
        <div className="container flex  items-center justify-between w-full h-full">
          <Link href="https://directed.dev/">
            <div className="flex items-center space-x-3 cursor-pointer">
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

          <ul className="hidden md:flex items-center space-x-5">
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

          <Button
            onCick={handleConnectWallet}
            loading={loading}
            loadingIndicator={"connecting..."}
            className="bg-light text-primary hover:bg-light font-semibold hover:border-none"
          >
            {wallet ? (
              <span className="normal-case text-lg">$directEd</span>
            ) : (
              "Connect Wallet"
            )}
          </Button>
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
