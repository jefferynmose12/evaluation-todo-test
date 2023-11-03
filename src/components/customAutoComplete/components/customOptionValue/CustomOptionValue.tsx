import React, { memo } from 'react'
import get from 'lodash/fp/get'
import { components } from 'react-select'
import '../../CustomAutoComplete.css'

const CustomOption = (coProps: any) => {
  const { Option } = components
  const label = get(['label'], coProps)

  return (
    <Option {...coProps}>
      <div className='options-body'>
        <span>{label}</span>
      </div>
    </Option>
  )
}

export default memo(CustomOption)