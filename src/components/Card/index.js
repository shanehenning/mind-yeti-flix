import React, { Component } from 'react'
import { connect } from 'react-fela'

const Card = (props) => (
	<div onClick={props.onclick} className={props.styles.cardStyle}>
		<div className={props.styles.imageContainerStyle}>
			<img
				className={props.styles.imgStyle}
				src={props.backgroundImage}
				alt={'Mind Yeti Session'}
			/>
		</div>
		<div className={props.styles.contentContainerStyle}>
			<h3 className={props.styles.h3Style}>{props.cardTitle}</h3>
			<p className={props.styles.pStyle}>{props.snippet}</p>
		</div>
	</div>
)

const cardStyle = () => ({
	backgroundColor: '#fff',
	borderRadius: '0.625rem',
	boxShadow: '0px 0px 10px #000',
	minWidth: '11rem',
	display: 'inline-block',
	marginLeft: '.5rem',
	marginRight: '.5rem',
	':first-of-type': {
		marginLeft: '0',
	},
	':last-of-type': {
		marginRight: '0',
	},
	textDecoration: 'none',
})

const imageContainerStyle = () => ({
	height: '150px',
	overflow: 'hidden',
	position: 'relative',
	borderTopLeftRadius: '0.625rem',
	borderTopRightRadius: '0.625rem',
})

const contentContainerStyle = () => ({
	padding: '0.75rem',
})

const imgStyle = (props) => ({
	height: 'auto',
	minHeight: '100%',
	minWidth: '100%',
	width: 'auto',
	maxWidth: '300%',
	position: 'absolute',
	left: '50%',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	backgroundImage: `url('${props.backgroundImage}')`,
})

const h3Style = () => ({
	fontSize: '1rem',
	display: 'inline-block',
	marginBottom: '.5rem',
	color: '#222',
})

const pStyle = () => ({
	marginBottom: '0',
	fontSize: '0.8rem',
	color: '#444',
})

export default connect({
	cardStyle,
	imageContainerStyle,
	contentContainerStyle,
	imgStyle,
	h3Style,
	pStyle,
})(Card)
