import {Clock} from "../components/Clock/Clock";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    title: 'MyComponents/Clock/DigitalClock',
    component: Clock,
    args: {
        clockMode:'DIGITAL-CLOCK'
    },
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;
export const DigitalClock = Template.bind({});
DigitalClock.args = {
};
