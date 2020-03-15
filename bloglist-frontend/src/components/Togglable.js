import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

const Togglable = React.forwardRef((props, ref) => {
	const [visible, setVisible] = useState(false)

	const hideWhenVisible = { display: visible ? 'none' : '' }
	const showWhenVisible = { display: visible ? '' : 'none' }

	const toggleVisibility = () => {
		setVisible(!visible)
	}
	Togglable.propTypes = {
		buttonLabel: PropTypes.string.isRequired
	}

	useImperativeHandle(ref, () => {
		return {
			toggleVisibility
		}
	})
	return (
		<div>
			<div style={ hideWhenVisible }>
				<Button variant='contained' color='default' onClick={ toggleVisibility }> {props.buttonLabel}</Button>
			</div>
			<div style={showWhenVisible}>
				{props.children} 
				<Button variant='contained' color='secondary' onClick={toggleVisibility}>{props.cancelLabel}</Button>
			</div>
		</div>
	)
})

Togglable.displayName = 'Togglable'

export default Togglable