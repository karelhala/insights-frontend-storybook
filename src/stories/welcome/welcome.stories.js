import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { doc, withDocs, withReadme }  from 'storybook-readme';

// Styling
import '@patternfly/patternfly-next/patternfly.css';
import '../../stories.scss';

// README
import WelcomeDoc from '../../docs/welcome/GettingStarted/DOC.md';
import WelcomeReadme from '../../docs/welcome/GettingStarted/README.md';
import QuickStartDoc from '../../docs/welcome/QuickStart/DOC.md';

storiesOf('.Welcome', module)
    .addDecorator(withReadme(WelcomeReadme))
    .add('Getting Started', doc(WelcomeDoc))
    .add('Quick Start Guide', doc(QuickStartDoc))