import React from 'react';
import logo from './assets/GraphQL_Logo.png';

const Header = () => {
	return (
		<nav className='navbar bg-light mb-4 p-0'>
			<div className='container'>
				<a href='/' className='navbar-brand'>
					<div className='d-flex'>
						<img
							src={logo}
							alt='logo'
							width='30'
							height='30'
							className='mr-2'
						/>
						<div>MERN</div>
					</div>
				</a>
			</div>
		</nav>
	);
};

export default Header;
