import logo from "../../../public/images/ico.png";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row justify-between items-center py-6 px-4 sm:px-6 lg:px-20">
        {/* Logo e Link na mesma linha e centralizados em dispositivos móveis */}
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-4 mb-4 lg:mb-0">
          <div className="flex items-center justify-center space-x-4">
            <Image
              src={logo}
              alt="Logo Soller"
              width={50}
              height={50}
              quality={75}
            />
            <Link
              href="/"
              aria-label="Home"
              className="text-2xl font-extrabold text-[#0F172A]"
            >
              Soller
            </Link>
          </div>
          {/* Direitos Autorais em uma linha abaixo em dispositivos móveis */}
          <p className="text-sm text-[#0F172A] text-center sm:text-left sm:ml-4">
            &copy; {new Date().getFullYear()} Soller, Inc. All Rights Reserved.
          </p>
        </div>

        {/* Navegação lado a lado, inclusive no celular */}
        <nav className="flex space-x-4">
          <Link
            href="/terms"
            aria-label="Terms"
            className="text-sm text-[#0F172A] hover:text-[#1d2d52]"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            aria-label="Privacy"
            className="text-sm text-[#0F172A] hover:text-[#1d2d52]"
          >
            Privacy
          </Link>
          <Link
            href="/support"
            aria-label="Support"
            className="text-sm text-[#0F172A] hover:text-[#1d2d52]"
          >
            Support
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
