import React from 'react'
import { Stepper, Step, StepIndicator, StepStatus, StepTitle, StepDescription, StepSeparator, Box, useSteps, Center, StepIcon, StepNumber } from '@chakra-ui/react'

const steps = [
  { title: 'Primero', description: 'Crea una cuenta' },
  { title: 'Segundo', description: 'Agenda una cita' },
  { title: 'Tercero', description: 'Ve a visitarnos' }
]

const Steps = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length
  })

  return (
    <Center>
      <Stepper size='lg' colorScheme='yellow' orientation='vertical' height='500px' gap='0' my={12} index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Center>
  )
}

export default Steps
