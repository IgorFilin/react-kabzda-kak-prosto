import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ExampleUseEffectClearFn} from "../components/ExampleUseEffectClearFn";
import {KeyTrackerUseEffectComponent} from "../components/KeyTrackerUseEffectComponent";


export default {
    title: 'MyComponents/UseEffect/KeyTrackerUseEffect',
    component: KeyTrackerUseEffectComponent,
    args: {

    },
} as ComponentMeta<typeof KeyTrackerUseEffectComponent>;

const Template: ComponentStory<typeof KeyTrackerUseEffectComponent> = () => <KeyTrackerUseEffectComponent  />;
export const KeyTrackerUseEffect = Template.bind({});