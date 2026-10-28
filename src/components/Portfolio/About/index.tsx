import Image from "next/image";
import { MedicalCrossIcon } from "../icons";
import { profile } from "../portfolioData";

const About = () => {
  return (
    <section id="about" className="overflow-hidden pt-20 lg:pt-25">
      <div className="relative mx-auto max-w-[1170px] px-4 pb-20 sm:px-8 lg:pb-25 xl:px-0">
        <div className="about-divider-gradient absolute bottom-0 left-0 h-[1px] w-full"></div>

        <div className="flex flex-wrap justify-between gap-11 xl:flex-nowrap">
          <div className="wow fadeInLeft w-full max-w-[570px]">
            <span className="hero-subtitle-text mb-5 block font-semibold">
              About Me
            </span>

            <h2 className="mb-5 text-2xl font-extrabold text-white sm:text-4xl xl:text-heading-2">
              From the aid bag to the keyboard.
            </h2>

            <p className="mb-5 font-medium">
              {/* TODO: replace with your own transition story */}
              I spent my time in the U.S. Army as a Combat Medic, responsible
              for keeping soldiers alive in high-stress, high-stakes
              situations. Every decision mattered, every detail counted, and
              there was no room for guesswork — only training, calm focus,
              and teamwork.
            </p>

            <p className="mb-5 font-medium">
              When I transitioned out of the Army, I was looking for a new
              mission that still let me solve real problems for real people.
              Software development turned out to be a natural fit: it rewards
              the same discipline, attention to detail, and ability to stay
              level-headed when something breaks — except now the &quot;patient&quot;
              is a codebase instead of a person.
            </p>

            <p className="mb-9 font-medium">
              Today, {profile.name} builds reliable, user-focused web
              applications, carrying the same mission-first mindset from the
              field into every project I ship.
            </p>

            <div className="flex items-center gap-3 text-sm font-medium text-white/80">
              <MedicalCrossIcon className="h-5 w-5 text-forest" />
              <span>Army Combat Medic (68W), U.S. Army</span>
            </div>
          </div>

          <div className="wow fadeInRight relative hidden aspect-556/401 w-full xl:block">
            {/* TODO: replace with a photo of you */}
            <Image src="/images/about/about.svg" alt="About portrait" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
