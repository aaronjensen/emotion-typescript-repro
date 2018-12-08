import * as React from 'react'
import styled, { ObjectInterpolation } from '@emotion/styled'

export const flex = (): ObjectInterpolation<any> =>
  ({})

const Search = styled.form(flex())

const Foo = () => <Search onSubmit={e => { console.log(e) }} />

export default Foo
