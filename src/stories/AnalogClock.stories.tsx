import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Clock} from "../components/Clock/Clock";


export default {
    title: 'MyComponents/Clock/AnalogClock',
    component: Clock,
    args: {
     clockMode:'ANALOG-CLOCK'
    },
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;
export const AnalogClock = Template.bind({});
AnalogClock.args = {
};
