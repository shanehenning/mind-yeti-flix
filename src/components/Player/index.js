import React, { Component } from 'react'
import { connect } from 'react-fela'

class Player extends Component {
	constructor(props) {
		super(props)
		this.state = {
			paused: true,
			playing: false,
		}
	}
	componentWillMount() {
		var href = document.location.href.split('/')
		var session = href[href.length - 1]
		this.setState({
			source: session,
			lesson: this.props.location.state.lesson,
			session: this.props.location.state.session,
		})
	}

	playPause = () => {
		this.setState({
			paused: !this.state.paused,
			playing: !this.state.playing,
		})
		var audio = document.getElementById('audio')
		this.state.paused ? audio.play() : audio.pause()
	}

	render() {
		return (
			<div className={this.props.styles.outerContainerStyle}>
				<div className={this.props.styles.innerContainerStyle}>
					<div className={this.props.styles.contentStyle}>
						<h5 className={this.props.styles.h5Style}>{this.state.lesson.name}</h5>
						<h1 className={this.props.styles.h1Style}>
							{this.state.session.sessionName}
						</h1>
						<h4 className={this.props.styles.h4Style}>
							Session {this.state.session.sessionId} of{' '}
							{this.state.lesson.sessionCount},{' '}
							<span>Length: {this.state.session.duration}</span>
						</h4>
						<p className={this.props.styles.pStyle}>{this.state.session.description}</p>
					</div>
					<div className={this.props.styles.playerStyle}>
						<div className={this.props.styles.buttonStyle} onClick={this.playPause}>
							{(this.state.paused && (
								<span className={this.props.styles.playIconStyle} />
							)) ||
								(this.state.playing && (
									<span className={this.props.styles.pauseIconStyle} />
								))}
						</div>
						<audio id={'audio'}>
							<source
								src={
									'https://devsessions.mindyeti.com/sessions/' +
									this.state.source +
									'.mp3'
								}
								type="audio/mp3"
							/>{' '}
							{`<!-- react-text: 2643 -->Browser doesn’t support audio tag!<!-- /react-text -->`}
						</audio>
					</div>
				</div>
			</div>
		)
	}
}

const outerContainerStyle = () => ({
	backgroundColor: '#1f224d',
	paddingTop: '3rem',
	paddingBottom: '3rem',
})

const innerContainerStyle = (props) => ({
	backgroundImage: 'url(' + props.location.state.session.image + ')',
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	display: 'block',
	fontFamily: 'sans-serif',
	clear: 'both',
	maxWidth: '1200px',
	margin: '0 auto',
	position: 'relative',
})

const contentStyle = () => ({
	width: '40%',
	color: '#fff',
	display: 'inline-block',
	padding: '3.5rem',
	backgroundColor: 'rgba(25,28,56,0.8)',
})

const h1Style = () => ({ fontSize: '36px', marginBottom: '2rem' })

const h5Style = () => ({ fontSize: '14px', marginBottom: '0.25rem' })

const h4Style = () => ({ fontSize: '22px', marginBottom: '0.75rem' })

const pStyle = () => ({ fontSize: '18px' })

const playerStyle = () => ({
	minHeight: '200px',
	minWidth: '200px',
	display: 'inline-block',
	cursor: 'pointer',
})

const buttonStyle = () => ({
	width: '150px',
	height: '150px',
	backgroundColor: '#fff',
	position: 'absolute',
	bottom: '1.5rem',
	right: '1.5rem',
})

const playIconStyle = () => ({
	width: '0',
	height: '0',
	content: '" "',
	display: 'inline-block',
	verticalAlign: 'middle',
	borderLeft: '75px dashed #3ebab7',
	borderTop: '47px solid transparent',
	borderBottom: '47px solid transparent',
	marginLeft: 'calc(50% - 35px)',
	marginTop: 'calc(50% - 46px)',
})

const pauseIconStyle = () => ({
	marginLeft: 'calc(50% - 39px)',
	marginTop: 'calc(50% - 38px)',
	border: '0',
	borderLeft: '75px double #3ebab7',
	display: 'inline-block',
	height: '75px',
})

export default connect({
	outerContainerStyle,
	innerContainerStyle,
	contentStyle,
	h1Style,
	h4Style,
	h5Style,
	pStyle,
	playerStyle,
	buttonStyle,
	playIconStyle,
	pauseIconStyle,
})(Player)
