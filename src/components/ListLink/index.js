import React from 'react'
import { connect } from 'react-fela'
import { Link } from 'react-router-dom'

const ListLink = ({ to, children, styles, listlinkcolor }) => (
	<li className={styles.listItemStyle}>
		<Link className={styles.linkStyle} to={to} listlinkcolor={listlinkcolor}>
			{children}
		</Link>
	</li>
)

const listItemStyle = () => ({
	display: 'inline-block',
	marginRight: '10px',
})

const linkStyle = (props) => ({
	textShadow: 'none',
	color: props.listlinkcolor,
	backgroundImage: 'none',
	marginRight: '15px',
})

export default connect({
	listItemStyle,
	linkStyle,
})(ListLink)
