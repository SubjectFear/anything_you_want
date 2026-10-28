import SectionTitle from "@/components/Common/SectionTitle";
import { CodeIcon, MedicalCrossIcon } from "../icons";
import { skills } from "../portfolioData";

const SkillGroup = ({
  title,
  icon,
  items,
  accent,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
  accent: "forest" | "lightblue";
}) => {
  const badgeClass =
    accent === "forest"
      ? "border-forest/30 bg-forest/10 text-forest-light"
      : "border-lightblue/30 bg-lightblue/10 text-lightblue-light";

  return (
    <div className="gradient-box w-full rounded-2xl bg-dark-8 p-8">
      <div className="mb-6 flex items-center gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full ${
            accent === "forest" ? "bg-forest/15" : "bg-lightblue/15"
          }`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium ${badgeClass}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative z-20 overflow-hidden py-20 lg:py-25"
    >
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="What I Bring"
          title="Skills"
          paragraph="A mix of the field-tested fundamentals from the Army and the technical skills from software development."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <SkillGroup
            title="Medical & Military Skills"
            icon={<MedicalCrossIcon className="h-5 w-5 text-forest-light" />}
            items={skills.medical}
            accent="forest"
          />
          <SkillGroup
            title="Technical Skills"
            icon={<CodeIcon className="h-5 w-5 text-lightblue-light" />}
            items={skills.technical}
            accent="lightblue"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
