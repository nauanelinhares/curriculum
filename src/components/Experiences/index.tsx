import { Stepper, Step, StepLabel } from "@mui/material";
import { ExperienceProps } from "./types";

const getMostRecentExperience = (experiences: ExperienceProps[]) => {
  return experiences.reduce((latest, current) => {
    const currentEnd = current.endDate || new Date();
    const latestEnd = latest.endDate || new Date();
    return currentEnd > latestEnd ? current : latest;
  });
};

const formatDate = (date: Date | undefined | null) => {
  if (!date) return "Present";
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const ExperienceBulletPoints = ({ points }: { points: string[] }) => (
  <div className="mt-2">
    {points.map((point, index) => (
      <div key={index} className="flex flex-row gap-4 items-center">
        <div className="flex-shrink-0 mt-1.5 w-2 h-2 bg-gray-500 rounded-full"></div>
        <div className="text-gray-500 text-justify">{point}</div>
      </div>
    ))}
  </div>
);

const ExperienceRole = ({ experience }: { experience: ExperienceProps }) => (
  <div className="flex flex-col pl-4">
    <span className="text-gray-800 text-xl">{experience.title}</span>
    <span className="text-gray-500 text-[1.15rem]">
      {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
    </span>
    {experience.bulletPoints && (
      <ExperienceBulletPoints points={experience.bulletPoints} />
    )}
  </div>
);

const groupExperiencesByRole = (experiences: ExperienceProps[]) => {
  const grouped = experiences.reduce((acc, experience) => {
    const key = `${experience.title}-${experience.startDate.getTime()}`;
    if (!acc[key]) {
      acc[key] = {
        ...experience,
        bulletPoints: [...(experience.bulletPoints || [])],
      };
    } else {
      // Combine bullet points
      acc[key].bulletPoints = [
        ...(acc[key].bulletPoints || []),
        ...(experience.bulletPoints || []),
      ];

      // Update dates to show the full range
      if (experience.startDate < acc[key].startDate) {
        acc[key].startDate = experience.startDate;
      }
      if (
        !acc[key].endDate ||
        (experience.endDate && experience.endDate > acc[key].endDate)
      ) {
        acc[key].endDate = experience.endDate;
      }
    }
    return acc;
  }, {} as Record<string, ExperienceProps>);

  return Object.values(grouped);
};

export default function Experiences({
  experiences,
  title,
}: {
  experiences: ExperienceProps[];
  title: string;
}) {
  // Group experiences by company
  const groupedExperiences = experiences.reduce((acc, experience) => {
    if (!acc[experience.company]) {
      acc[experience.company] = [];
    }
    acc[experience.company].push(experience);
    return acc;
  }, {} as Record<string, ExperienceProps[]>);

  // Sort companies by their most recent experience
  const sortedCompanies = Object.keys(groupedExperiences).sort((a, b) => {
    const mostRecentA = getMostRecentExperience(groupedExperiences[a]);
    const mostRecentB = getMostRecentExperience(groupedExperiences[b]);

    const endDateA = mostRecentA.endDate || new Date();
    const endDateB = mostRecentB.endDate || new Date();
    return endDateB.getTime() - endDateA.getTime();
  });

  return (
    <>
      <div className="text-gray-500 text-4xl pb-4">{title}</div>
      <div className="relative">
        <Stepper
          orientation="vertical"
          activeStep={-1}
          connector={
            <div className="absolute left-[10px] top-0 bottom-0 w-[2px] bg-gray-500"></div>
          }
        >
          {sortedCompanies.map((company) => (
            <Step key={company} expanded={true} className="flex flex-col">
              <StepLabel
                icon={
                  <div className="flex items-center w-3 h-3 mt-2 ml-1  bg-gray-500 rounded-full z-10"></div>
                }
                className="!items-start !p-0"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-gray-500 text-2xl font-semibold">
                    {company}
                  </span>
                  <div className="flex flex-col gap-4">
                    {groupExperiencesByRole(groupedExperiences[company]).map(
                      (experience, index) => (
                        <div key={index} className="flex flex-col">
                          <ExperienceRole experience={experience} />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </>
  );
}
