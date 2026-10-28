import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import { ExternalLinkIcon, GitHubIcon } from "../icons";
import { projects } from "../portfolioData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-20 overflow-hidden py-20 lg:py-25"
    >
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="A Few Things I've Built"
          title="Projects"
          paragraph="A sample of projects that show how I approach building software — replace these with your own work."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="box-hover box-hover-small gradient-box relative flex flex-col overflow-hidden rounded-2xl bg-dark-8"
            >
              <div className="relative aspect-video w-full bg-dark-7">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-10"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm font-medium text-white/70">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-purple/30 bg-purple/10 px-3 py-1 text-xs font-medium text-purple-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-white/80 duration-300 ease-in hover:text-lightblue"
                    >
                      <GitHubIcon className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-white/80 duration-300 ease-in hover:text-forest-light"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
