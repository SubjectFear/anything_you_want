import SectionTitle from "@/components/Common/SectionTitle";
import { GraduationCapIcon } from "../icons";
import { education } from "../portfolioData";

const Education = () => {
  return (
    <section
      id="education"
      className="relative z-20 overflow-hidden py-20 lg:py-25"
    >
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Always Learning"
          title="Education & Certifications"
          paragraph="Formal training and certifications from both the Army and the software world."
        />

        <div className="mx-auto flex max-w-[800px] flex-col gap-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="gradient-box flex flex-col gap-4 rounded-2xl bg-dark-8 p-6 sm:flex-row sm:items-start"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple/15">
                <GraduationCapIcon className="h-5 w-5 text-purple-light" />
              </div>

              <div>
                <div className="mb-1 flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-purple/10 px-3 py-0.5 text-xs font-semibold text-purple-light">
                    {item.period}
                  </span>
                </div>
                <p className="mb-2 text-sm font-medium text-dark-3">
                  {item.org}
                </p>
                <p className="text-sm font-medium text-white/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
