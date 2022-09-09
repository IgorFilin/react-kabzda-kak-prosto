import { ComponentStory, ComponentMeta } from '@storybook/react';
import UseStateExample from "../components/UseStateExample/UseStateExample";


export default {
    title: 'MyComponents/UseState/UseStateComponent',
    component: UseStateExample,
    args: {

    },
} as ComponentMeta<typeof UseStateExample>;

const Template: ComponentStory<typeof UseStateExample> = () => <UseStateExample  />;
export const UseStateComponent = Template.bind({});