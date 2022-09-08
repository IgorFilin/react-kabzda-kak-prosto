import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ExampleUseEffectClearFn} from "../components/ExampleUseEffectClearFn";


export default {
    title: 'MyComponents/UseEffect/ExampleUseEffect',
    component: ExampleUseEffectClearFn,
    args: {

    },
} as ComponentMeta<typeof ExampleUseEffectClearFn>;

const Template: ComponentStory<typeof ExampleUseEffectClearFn> = () => <ExampleUseEffectClearFn  />;
export const ExampleUseEffect = Template.bind({});
