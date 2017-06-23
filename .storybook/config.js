import {configure} from '@storybook/react'

const req = require.context('../', true, /Foo.example.js$/)

function loadStories () {
  req.keys().forEach(req)
}

configure(loadStories, module)
