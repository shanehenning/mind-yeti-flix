import React from 'react'
import { connect } from 'react-fela'
import { Link } from 'react-router-dom'
import ListLink from '../ListLink'

const Header = ({ listlinkcolor, styles }) => (
	<div className={styles.headerStyle}>
		<Link to="/">
			<img
				src={'https://mindyeti.com/_/images/mind-logo.png'}
				className={styles.logoImageStyle}
				alt={'Mind Yeti Logo'}
			/>
		</Link>
		<ul className={styles.ulStyle}>
			<ListLink listlinkcolor={listlinkcolor} to={'/upgrade/'}>
				Upgrade Now
			</ListLink>
			<ListLink listlinkcolor={listlinkcolor} to={'/sign-in/'}>
				Sign In
			</ListLink>
		</ul>
	</div>
)

const headerStyle = () => ({
	height: '75px',
	padding: '1rem 7rem',
})

const logoImageStyle = () => ({
	float: 'left',
	height: '45px',
})

const ulStyle = () => ({
	float: 'right',
})

export default connect({
	headerStyle,
	logoImageStyle,
	ulStyle,
})(Header)
