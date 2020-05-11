import React from 'react'

import {
  Button,
  UncontrolledTooltip
} from 'reactstrap'

export default function ToolbarButton ({
  id,
  color='default',
  size='sm',
  onClick,
  icon,
  tooltip = null,
  tooltipPlacement = 'bottom',
  children,
  readonly,
}) {
  const childrenComponent = children || <i className={icon} />
  const tooltipComponent  = tooltip && (
    <UncontrolledTooltip trigger='hover' delay={0} placement={tooltipPlacement} target={`toolbar-btn-${id}`}>
      {tooltip}
    </UncontrolledTooltip>
  )

  return (
    <React.Fragment>
      <Button
        size={size}
        color={color}
        id={`toolbar-btn-${id}`}
        key={`toolbar-btn-${id}`}
        className='rounded-0 border-0 flex-none px-2 w-5 flex-column align-items-center'
        onClick={onClick}
        disabled={readonly}
      >
        {childrenComponent}
      </Button>
      {tooltipComponent}
    </React.Fragment>
  )
}