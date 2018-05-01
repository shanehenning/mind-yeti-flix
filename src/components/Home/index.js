import React, { Component } from 'react'
import { connect } from 'react-fela'
import data from '../../data'
import Card from '../Card'
import SessionData from '../SessionData'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isHidden: true,
			selectedSession: null,
		}
	}

	componentWillMount() {
		data.map((lesson) => {
			return (lesson.lessonHref = lesson.name
				.replace(/\s+/g, '-')
				.replace(/[^0-9a-zA-Z-]/g, '')
				.split('-')
				.join('_')
				.toLowerCase())
		})
		var obj = {}
		data.map((lesson) => {
			obj[lesson.lessonHref] = 0
		})
		this.setState({
			translateX: obj,
		})
	}

	toggleHidden = (session) => {
		this.setState({
			isHidden: false,
			selectedSession: session,
		})
	}

	storeLesson = (lesson) => {
		this.setState({
			selectedLesson: lesson,
		})
	}

	closeSessionData = () => {
		this.setState({
			isHidden: true,
		})
	}

	scrollLeft = (lesson) => {
		var transitionInterval = 12 // 12rem, current width of Cards
		var composedObject = this.state.translateX

		// if all the way left, stop
		if (this.state.translateX[lesson.lessonHref] === 0) return

		// normal left scroll
		composedObject[lesson.lessonHref] = composedObject[lesson.lessonHref] - transitionInterval
		if (composedObject[lesson.lessonHref] < 0) {
			composedObject[lesson.lessonHref] = 0
		}
		this.setState({
			translateX: composedObject,
		})
	}

	scrollRight = (lesson) => {
		var transitionInterval = 12
		var composedObject = this.state.translateX
		var windowWidth = window.innerWidth
		if (windowWidth > 1200) windowWidth = 1200
		windowWidth = windowWidth / 18
		var rowWidth = lesson.sessionCount * 12
		var nextRowPosition = this.state.translateX[lesson.lessonHref] + transitionInterval

		// if all the way right, don't scroll
		if (windowWidth + this.state.translateX[lesson.lessonHref] + 1 === rowWidth) return

		// if a scroll will create excess space, adjust scroll distance accordingly
		if (nextRowPosition + windowWidth > rowWidth) {
			composedObject[lesson.lessonHref] =
				this.state.translateX[lesson.lessonHref] -
				(this.state.translateX[lesson.lessonHref] + windowWidth - rowWidth + 1)
			this.setState({
				translateX: composedObject,
			})
			return
		}

		// normal right scroll
		composedObject[lesson.lessonHref] = composedObject[lesson.lessonHref] + transitionInterval
		this.setState({
			translateX: composedObject,
		})
	}

	render(props) {
		return (
			<div className={this.props.styles.outerContainerStyle}>
				<div>
					{data.map((lesson) => (
						<div
							className={this.props.styles.lessonContainerStyle}
							key={lesson.name}
							onClick={this.storeLesson.bind(this, lesson)}
						>
							<h2 className={this.props.styles.h2Style}>{lesson.name}</h2>
							<span className={this.props.styles.spanStyle}>
								{lesson.sessionCount} sessions
							</span>
							<div className={this.props.styles.arrowWrapperStyle}>
								<div
									className={this.props.styles.leftArrowContainerStyle}
									onClick={this.scrollLeft.bind(this, lesson)}
								>
									<i className={this.props.styles.leftArrowStyle} />
								</div>
								<div
									className={this.props.styles.rowStyle}
									style={{
										transform:
											'translateX(-' +
											this.state.translateX[lesson.lessonHref] +
											'rem)',
									}}
								>
									{lesson.sessions.map((session) => (
										<Card
											className={this.props.styles.cardStyle}
											to={`/session/${session.sessionId}`}
											backgroundImage={session.image}
											cardTitle={session.sessionName}
											snippet={session.snippet}
											key={session.sessionName}
											onclick={this.toggleHidden.bind(this, session)}
										/>
									))}
								</div>
								<div
									className={this.props.styles.rightArrowContainerStyle}
									onClick={this.scrollRight.bind(this, lesson)}
								>
									<i className={this.props.styles.rightArrowStyle} />
								</div>
							</div>
							{!this.state.isHidden &&
								this.state.selectedSession != null &&
								this.state.selectedLesson === lesson && (
									<SessionData
										lesson={lesson}
										session={this.state.selectedSession}
										close={this.closeSessionData}
									/>
								)}
						</div>
					))}
				</div>
			</div>
		)
	}
}

const outerContainerStyle = () => ({
	backgroundColor: '#1f224d',
	paddingTop: '3rem',
	paddingBottom: '1rem',
})

const lessonContainerStyle = () => ({
	clear: 'both',
	maxWidth: '1200px',
	margin: '0 auto',
	overflow: 'hidden',
})

const arrowWrapperStyle = () => ({
	position: 'relative',
})

const rowStyle = () => ({
	display: 'flex',
	flexDirection: 'row',
	clear: 'both',
	maxWidth: '1200px',
	margin: '0 auto',
	marginBottom: '4.5rem',
	padding: '.5rem 0',
	position: 'relative',
	transition: 'transform 350ms',
})

const leftArrowContainerStyle = () => ({
	position: 'absolute',
	left: '0',
	top: '0',
	zIndex: '11',
	width: '3rem',
	height: '100%',
	transition: 'opacity 250ms ease',
	opacity: '0.15',
	backgroundImage: 'linear-gradient(to right, #1f224d, transparent)',
	cursor: 'pointer',
	':hover': {
		opacity: '1',
	},
	':hover i': {
		color: '#2da8a5',
	},
})

const leftArrowStyle = () => ({
	width: '0',
	height: '0',
	content: '" "',
	display: 'inline-block',
	verticalAlign: 'middle',
	borderRight: '16px dashed',
	borderTop: '10px solid transparent',
	borderBottom: '10px solid transparent',
	color: '#fff',
	top: 'calc(50% - 2rem)',
	margin: '1rem',
	transition: 'color 250ms ease',
	':hover': {
		color: '#2da8a5',
	},
	cursor: 'pointer',
	position: 'absolute',
})

const cardStyle = () => ({
	paddingBottom: '4rem',
})

const rightArrowContainerStyle = () => ({
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '11',
	width: '3rem',
	height: '100%',
	cursor: 'pointer',
	transition: 'opacity 250ms ease',
	opacity: '0.15',
	backgroundImage: 'linear-gradient(to left, #1f224d, transparent)',
	':hover': {
		opacity: '1',
	},
	':hover i': {
		color: '#2da8a5',
	},
})

const rightArrowStyle = () => ({
	width: '0',
	height: '0',
	content: '" "',
	display: 'inline-block',
	verticalAlign: 'middle',
	borderLeft: '16px dashed',
	borderTop: '10px solid transparent',
	borderBottom: '10px solid transparent',
	color: '#fff',
	top: 'calc(50% - 2rem)',
	right: '0',
	zIndex: '11',
	margin: '1rem',
	transition: 'color 250ms ease',
	':hover': {
		color: '#2da8a5',
	},
	cursor: 'pointer',
	position: 'absolute',
})

const h2Style = () => ({
	display: 'inline-block',
	fontSize: '1.5rem',
	color: '#fff',
})

const spanStyle = () => ({
	color: '#f1f1f1',
	fontSize: '0.75rem',
	marginLeft: '.65rem',
})

export default connect({
	outerContainerStyle,
	lessonContainerStyle,
	arrowWrapperStyle,
	rowStyle,
	leftArrowContainerStyle,
	leftArrowStyle,
	cardStyle,
	rightArrowContainerStyle,
	rightArrowStyle,
	h2Style,
	spanStyle,
})(Home)
