// YourComponent.stories.ts|tsx

import React, {useState} from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import accordion, {Accordion, AccordionPropsType} from './../components/Accordion/Accordion';
import {action, actions} from "@storybook/addon-actions";

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Object>;

const setAccordion = action('Click for collapsed')


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Object> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({});

MenuCollapsedMode.args = {
    /*👇 The args you need here will depend on your component */
    titleValue:'Menu',
    /**
     * 11111111
     */
    accordion:true,
    setAccordion:setAccordion

};

export const MenuUnCollapsedMode = Template.bind({});

MenuUnCollapsedMode.args = {
    /*👇 The args you need here will depend on your component */
    titleValue:'Menu',
    accordion:false,
    setAccordion:setAccordion

};


