import { Stepper, Step, StepLabel, StepContent } from '@mui/material';
import { ExperienceProps } from './types';

export default function Experiences({ experiences }: { experiences: ExperienceProps[] }) {
    const sortedExperiences = [...experiences].sort((a, b) => {
      // If both are current positions (no end date), sort by start date
      if (!a.endDate && !b.endDate) {
        return b.startDate.getTime() - a.startDate.getTime();
      }
      // If only one is current position, it should come first
      if (!a.endDate) return -1;
      if (!b.endDate) return 1;
      // For past positions, sort by end date (most recent first)
      return b.endDate.getTime() - a.endDate.getTime();
    });

    return (
      <>
        <div className="text-gray-500 text-4xl pb-4">Experience</div>
        <Stepper orientation="vertical" activeStep={-1}>
          {sortedExperiences.map((experience) => (
            <Step key={experience.company} expanded={true}>
              <StepLabel
                icon={
                  <div className="flex w-5 h-5 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full"></div>
                }
              >
                <div className="flex flex-row gap-2 items-start">
                  <div className="flex flex-col gap-">
                    <span className="text-gray-500 text-2xl">
                      {experience.title} - {experience.company}
                    </span>
                    <span className="text-gray-500 text-[1.25rem]">
                      {experience.startDate.getFullYear()} -{" "}
                      {experience.endDate?.getFullYear()}
                    </span>
                  </div>
                </div>
              </StepLabel>

              <StepContent className="text-left">
                <div>
                  {experience.bulletPoints?.map((point) => (
                    <div className="flex flex-row gap-2 items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full min-w-2 mt-[8px]"></div>
                      <div className="text-gray-500 text-justify">{point}</div>
                    </div>
                  ))}
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </>
    );
}