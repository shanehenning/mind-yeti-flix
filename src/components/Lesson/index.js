// currently markup is pulled out of this component and pieced into Home

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-fela'
import Card from '../Card'

class Lesson extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<div className={this.props.styles.rowStyle}>
					{this.props.lesson.sessions.map((session) => (
						<Card
							className={this.props.styles.lessonStyle}
							to={`/session/${session.sessionId}`}
							backgroundImage={session.image}
							cardTitle={session.sessionName}
							description={'lorem ipsum blah blah blah'}
							key={session.sessionName}
							onclick={this.props.onclick}
						/>
					))}
				</div>
				{this.props.children}
			</div>
		)
	}
}

const rowStyle = () => ({
	display: 'flex',
	flexDirection: 'row',
	clear: 'both',
	maxWidth: '1200px',
	margin: '0 auto',
	overflowX: 'scroll',
	marginBottom: '4.5rem',
	padding: '.5rem',
})

const lessonStyle = () => ({
	backgroundColor: '#a1a1a1',
})

export default connect({
	rowStyle,
	lessonStyle,
})(Lesson)
