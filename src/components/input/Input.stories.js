import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Input from './Input'

const stories = storiesOf('Input', module)
stories.addDecorator(withKnobs)

stories.add('With knobs', () => (
  <Input placeholder={text('Placeholder', 'simple   text')} enabled={boolean('Enabled', true)} />
))
