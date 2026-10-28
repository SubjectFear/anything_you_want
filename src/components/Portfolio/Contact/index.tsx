import Image from "next/image";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../icons";
import { profile } from "../portfolioData";

const Contact = () => {
  return (
    <section id="contact" className="pb-20 pt-10 lg:pb-25">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="cta-box-gradient relative z-999 overflow-hidden rounded-[30px] bg-dark px-4 py-20 lg:py-25">
          {/* bg shapes */}
          <div className="absolute bottom-0 left-0 -z-1 h-full w-full bg-[url(/images/cta/grid.svg)] bg-cover bg-bottom bg-no-repeat"></div>

          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <span className="absolute bottom-0 left-1/2 -z-1 h-full w-full -translate-x-1/2">
              <Image
                src="/images/blur/blur-22.svg"
                alt="blur-sm"
                fill
                className="max-w-none"
              />
            </span>
            <span className="absolute bottom-0 left-1/2 -z-1 h-full w-full -translate-x-1/2">
              <Image
                src="/images/blur/blur-23.svg"
                alt="blur-sm"
                fill
                className="max-w-none"
              />
            </span>
          </div>

          <div className="wow fadeInUp text-center">
            <span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium">
              <Image
                src="/images/hero/icon-title.svg"
                alt="icon"
                width={17}
                height={16}
              />
              <span className="hero-subtitle-text">Let&apos;s Connect</span>
            </span>

            <h2 className="mb-4.5 text-2xl font-extrabold text-white sm:text-4xl xl:text-heading-2">
              Ready to build something great?
            </h2>

            <p className="mx-auto mb-9 max-w-[600px] font-medium">
              I&apos;m always open to new opportunities and interesting
              problems to solve. Whether you have a role in mind or just want
              to connect, feel free to reach out.
            </p>

            <div className="mb-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="hero-button-gradient inline-flex items-center gap-2 rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
              >
                <MailIcon className="h-4 w-4" />
                {profile.email}
              </a>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-white/70 duration-300 ease-in hover:text-lightblue"
              >
                <GitHubIcon className="h-6 w-6" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-white/70 duration-300 ease-in hover:text-forest-light"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
