import { Stepper, Step, StepLabel, StepContent } from '@mui/material';
import { ExperienceProps } from './types';

export default function Experiences({ experiences }: { experiences: ExperienceProps[] }) {


    return (
        <Stepper orientation="vertical" activeStep={-1} >
            {experiences.map((experience) => (
                       
                <Step key={experience.company} expanded={true} >
                    <StepLabel icon={<div className='w-7 h-7 bg-gray-400 rounded-full'></div>}>
                        <div className='flex flex-row gap-2'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-gray-500 text-2xl'>{experience.title} - {experience.company}</span>
                                <span className='text-gray-500 text-[1.25rem]'>{experience.startDate} - {experience.endDate}</span>
                            </div>
                        </div>
                        
                    </StepLabel>
                    
                    <StepContent className='text-left'>
                        <span className='text-gray-500'>{experience.description}</span>
                    </StepContent>
                </Step>
            ))}
        </Stepper>
    )
}