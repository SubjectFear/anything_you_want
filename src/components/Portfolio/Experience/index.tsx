import SectionTitle from "@/components/Common/SectionTitle";
import { CodeIcon, MedicalCrossIcon } from "../icons";
import { experience } from "../portfolioData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative z-20 overflow-hidden py-20 lg:py-25"
    >
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="My Journey"
          title="Experience"
          paragraph="From the battlefield aid station to the dev team stand-up — here's how the path has gone so far."
        />

        <div className="relative mx-auto max-w-[800px]">
          {/* Vertical timeline rail */}
          <div className="absolute left-5 top-0 h-full w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2"></div>

          <div className="flex flex-col gap-10">
            {experience.map((item) => {
              const isMilitary = item.category === "military";
              return (
                <div
                  key={item.id}
                  className="relative flex items-start gap-6 pl-14 sm:pl-0"
                >
                  <div
                    className={`absolute left-5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 sm:left-1/2 ${
                      isMilitary ? "bg-forest/20" : "bg-lightblue/20"
                    }`}
                  >
                    {isMilitary ? (
                      <MedicalCrossIcon className="h-5 w-5 text-forest-light" />
                    ) : (
                      <CodeIcon className="h-5 w-5 text-lightblue-light" />
                    )}
                  </div>

                  <div
                    className={`gradient-box w-full rounded-2xl bg-dark-8 p-6 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                      isMilitary ? "" : "sm:ml-auto"
                    }`}
                  >
                    <span
                      className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        isMilitary
                          ? "bg-forest/15 text-forest-light"
                          : "bg-lightblue/15 text-lightblue-light"
                      }`}
                    >
                      {item.period}
                    </span>
                    <h3 className="mb-1 text-lg font-bold text-white">
                      {item.role}
                    </h3>
                    <p className="mb-4 text-sm font-medium text-dark-3">
                      {item.org}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {item.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="text-sm font-medium text-white/80"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
