import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

const Foo = () => {
  return <span className='classname'>Foo</span>
}

storiesOf('Foo')
  .add('default', () => <Foo>Hello</Foo>)
