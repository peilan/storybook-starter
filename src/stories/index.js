import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Button from '../components/Button'

const stories = storiesOf('Button', module)
stories.addDecorator(withKnobs)

stories.add('With knobs', () => (
  <Button value={text('Value', 'simple   text')} enabled={boolean('Enabled', true)} />
))
