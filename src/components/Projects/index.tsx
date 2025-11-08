import { ProjectProps } from "./types";

const ProjectBulletPoints = ({ points }: { points: string[] }) => (
  <div className="mt-2">
    {points.map((point, index) => (
      <div key={index} className="flex flex-row gap-4 items-center">
        <div className="flex-shrink-0 mt-1.5 w-2 h-2 bg-gray-500 rounded-full"></div>
        <div className="text-[0.85rem] text-gray-500 text-justify">{point}</div>
      </div>
    ))}
  </div>
);

export default function Projects({
  projects,
  title,
}: {
  projects: ProjectProps[];
  title: string;
}) {
  return (
    <>
      <div className="text-gray-500 text-2xl pb-4">{title}</div>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-2">
            <span className="text-gray-800 text-[1.15rem] font-semibold flex justify-start">
              {project.title}
            </span>
            <ProjectBulletPoints points={project.bulletPoints} />
          </div>
        ))}
      </div>
    </>
  );
}

