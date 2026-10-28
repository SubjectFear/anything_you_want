import Image from "next/image";
import Link from "next/link";
import { DownloadIcon, GitHubIcon, LinkedInIcon } from "../icons";
import { profile } from "../portfolioData";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden pt-35 md:pt-40 xl:pt-45"
    >
      {/* Hero Bg Shapes */}
      <div className="mx-auto max-w-7xl">
        <div className="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden">
          <div className="-u-z-10 hero-circle-gradient absolute -top-[128%] left-1/2 -z-1 h-[1282px] w-full max-w-[1282px] -translate-x-1/2 rounded-full sm:-top-[107%] xl:-top-[73%]"></div>
          <div className="-u-z-10 hero-circle-gradient absolute -top-[112%] left-1/2 -z-1 h-[1046px] w-full max-w-[1046px] -translate-x-1/2 rounded-full sm:-top-[93%] xl:-top-[62%]"></div>
          <div className="-u-z-10 absolute top-0 left-1/2 aspect-1204/394 w-full max-w-[1204px] -translate-x-1/2">
            <Image
              src="/images/blur/blur-02.svg"
              alt="blur-sm"
              fill
              className="max-w-none"
            />
          </div>
          <div className="-u-z-10 absolute top-0 left-1/2 h-full w-full -translate-x-1/2 bg-[url(/images/blur/blur-01.svg)] bg-cover bg-top bg-no-repeat"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-1 mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0">
        <div className="text-center">
          <span className="hero-subtitle-gradient relative mb-5 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium">
            <Image
              src="/images/hero/icon-title.svg"
              alt="icon"
              width={16}
              height={16}
            />
            <span className="hero-subtitle-text font-semibold">
              {profile.eyebrow}
            </span>
          </span>

          <h1 className="xl:text-heading-1 mb-6 text-3xl font-extrabold text-white sm:text-5xl">
            {profile.headline}
          </h1>

          <p className="mx-auto mb-9 max-w-[600px] font-medium md:text-lg">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#projects"
              className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
            >
              View My Projects
            </Link>

            <a
              href={profile.resumeUrl}
              download
              className="button-border-gradient hover:button-gradient-hover relative inline-flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-medium text-white shadow-button hover:shadow-none"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-7 flex items-center justify-center gap-5">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-white/70 duration-300 ease-in hover:text-lightblue"
            >
              <GitHubIcon />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-white/70 duration-300 ease-in hover:text-lightblue"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <div
        className="relative mx-auto mt-17 aspect-1170/411 w-full max-w-[1170px]"
        data-wow-delay="0.1s"
      >
        <Image className="mx-auto" src="/images/hero/hero.svg" alt="hero" fill />
      </div>
    </section>
  );
};

export default Hero;
