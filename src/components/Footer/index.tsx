import Image from "next/image";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Portfolio/icons";
import { profile } from "@/components/Portfolio/portfolioData";
import logo from "../../../public/images/logo/logo.svg";
import FooterLinkList from "./FooterLinkList";
import { connectLinks, quickLinks } from "./linksData";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 pb-17.5 lg:pb-22.5 xl:pb-27.5">
        {/* <!-- bg shapes --> */}
        <div className="absolute bottom-0 left-0 -z-1 flex w-full flex-col gap-3 opacity-50">
          <div className="footer-bg-gradient h-[1.24px] w-full"></div>
          <div className="footer-bg-gradient h-[2.47px] w-full"></div>
          <div className="footer-bg-gradient h-[3.71px] w-full"></div>
          <div className="footer-bg-gradient h-[4.99px] w-full"></div>
          <div className="footer-bg-gradient h-[6.19px] w-full"></div>
          <div className="footer-bg-gradient h-[7.42px] w-full"></div>
          <div className="footer-bg-gradient h-[8.66px] w-full"></div>
          <div className="footer-bg-gradient h-[9.90px] w-full"></div>
          <div className="footer-bg-gradient h-[13px] w-full"></div>
        </div>

        <div className="relative mx-auto max-w-[1170px] px-4 pt-17.5 sm:px-8 xl:px-0">
          <div className="footer-divider-gradient absolute left-0 top-0 h-[1px] w-full"></div>

          <div className="flex flex-wrap justify-between">
            <div className="mb-10 w-full max-w-[520px]">
              <Link href="/" className="mb-8.5 inline-block">
                <Image src={logo} alt="Logo" width={164} height={36} />
              </Link>

              <p className="mb-12 xl:w-4/5">
                {profile.name} &mdash; Army combat medic turned software
                developer, bringing discipline and calm under pressure to
                every project.
              </p>

              <div className="flex items-center gap-5">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="duration-300 ease-in hover:text-white"
                >
                  <GitHubIcon />
                </a>

                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="duration-300 ease-in hover:text-white"
                >
                  <LinkedInIcon />
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="duration-300 ease-in hover:text-white"
                >
                  <MailIcon />
                </a>
              </div>

              <p className="mt-5.5 font-medium">
                &copy; {new Date().getFullYear()} {profile.name}. All rights
                reserved.
              </p>
            </div>

            <div className="w-full max-w-[400px]">
              <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
                <FooterLinkList title="Quick Links" links={quickLinks} />

                <FooterLinkList title="Connect" links={connectLinks} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
