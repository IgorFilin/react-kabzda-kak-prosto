import { ComponentStory, ComponentMeta } from '@storybook/react';
import UseStateExample from "../components/UseStateExample/UseStateExample";
import {UseEffectExample} from "../components/UseEffectExample/UseEffectExample";


export default {
    title: 'MyComponents/UseEffect/UseEffectExampleClockTic',
    component: UseEffectExample,
    args: {

    },
} as ComponentMeta<typeof UseEffectExample>;

const Template: ComponentStory<typeof UseEffectExample> = () => <UseEffectExample  />;
export const UseEffectExampleClockTic = Template.bind({});