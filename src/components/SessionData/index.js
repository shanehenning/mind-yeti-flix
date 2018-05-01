import React, { Component } from 'react'
import { connect } from 'react-fela'
import { Link } from 'react-router-dom'

class SessionData extends Component {
	render() {
		this.props.session.sessionRoute = this.props.session.sessionName
			.replace(/\s+/g, '-')
			.replace(/[^0-9a-zA-Z-]/g, '')
			.split('-')
			.join('_')
			.toLowerCase()
		return (
			<div className={this.props.styles.sessionDataStyle}>
				<span className={this.props.styles.closeStyle} onClick={this.props.close}>
					X
				</span>
				<div className={this.props.styles.contentStyle}>
					<h3 className={this.props.styles.h3Style}>{this.props.session.sessionName}</h3>
					<h5 className={this.props.styles.h5Style}>{this.props.session.duration}</h5>
					<p className={this.props.styles.pStyle}>{this.props.session.description}</p>
					<Link
						className={this.props.styles.buttonStyle}
						to={{
							pathname:
								'/play/' +
								this.props.lesson.lessonHref +
								'/' +
								this.props.session.sessionRoute,
							state: {
								lesson: this.props.lesson,
								session: this.props.session,
							},
						}}
					>
						<span className={this.props.styles.playIconStyle} />Play
					</Link>
				</div>
			</div>
		)
	}
}

const sessionDataStyle = (props) => ({
	clear: 'both',
	display: 'block',
	backgroundImage: 'url(' + props.session.image + ')',
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	height: '300px',
	boxShadow: '2px 2px 12px -3px #04051c',
	marginTop: '-3rem',
	marginBottom: '3rem',
})

const contentStyle = () => ({
	backgroundColor: '#090b28',
	width: '30%',
	height: '100%',
	position: 'relative',
	paddingLeft: '1.25rem',
	':after': {
		content: '" "',
		width: '275px',
		height: '100%',
		backgroundImage: 'linear-gradient(to right, #090b28, transparent)',
		position: 'absolute',
		display: 'table',
		top: '0',
		right: '-275px',
		zIndex: '1',
	},
})

const h3Style = () => ({
	color: '#fff',
	fontFamily: 'sans-serif',
	display: 'inline-block',
	marginTop: '1.75rem',
	marginBottom: '1.5rem',
})

const closeStyle = () => ({
	float: 'right',
	fontFamily: 'sans-serif',
	marginTop: '0.75rem',
	marginRight: '1rem',
	color: '#fff',
	cursor: 'pointer',
	':hover': {
		color: '#2da8a5',
	},
})

const h5Style = () => ({
	color: '#fff',
	fontFamily: 'sans-serif',
	marginBottom: '0.75rem',
})

const pStyle = () => ({
	color: '#fff',
	fontFamily: 'sans-serif',
	marginBottom: '1rem',
	width: '125%',
	zIndex: '10',
	position: 'relative',
	fontSize: '0.8rem',
})

const buttonStyle = () => ({
	background: '#3ebab7',
	color: '#fff',
	fontWeight: 'bold',
	fontFamily: 'sans-serif',
	fontSize: '14px',
	padding: '0.25rem 0.6rem 0.25rem 0.5rem',
	cursor: 'pointer',
	textDecoration: 'none',
	':hover': {
		background: '#2da8a5',
	},
})

const playIconStyle = () => ({
	width: '0',
	height: '0',
	content: '" "',
	display: 'inline-block',
	verticalAlign: 'middle',
	borderLeft: '8px dashed',
	borderTop: '5px solid transparent',
	borderBottom: '5px solid transparent',
	marginRight: '6px',
})

export default connect({
	sessionDataStyle,
	contentStyle,
	h3Style,
	closeStyle,
	h5Style,
	pStyle,
	buttonStyle,
	playIconStyle,
})(SessionData)
