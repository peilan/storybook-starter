import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions';

import Button from './Button'

const stories = storiesOf('Button', module)
stories.addDecorator(withKnobs)

stories.add('With knobs', () => (
  <Button
    value={text('Value', 'simple   text')}
    onClick={action('onClick')}
    enabled={boolean('Enabled', true)}
  />
))
