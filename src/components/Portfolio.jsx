import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
	return (
		<main>
			<div className='container'>
				<section className='portfolio'>
					<div className='text'>
						<h1>
							Hello,
							<br /> My name is Laziza!
						</h1>
						<p>
							A Frontend Developer who builds modern and responsive websites
							using React and TypeScript.
						</p>
						<div className='link'>
							<a
								href='https://github.com/laziw-001'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src='GitHub.svg' alt='' />
							</a>
							<a
								href='https://www.instagram.com/miss.laziw/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src='Instagram.svg' alt='' />
							</a>
							<a href='mailto:abduqodirovalaziza866@gmail.com'>
								<img src='Gmail.svg' alt='' />
							</a>
						</div>
					</div>
					<img className='logo' src='logo.jpg' alt='' />
				</section>
			</div>

			<section id='about'>
				<div className='container'>
					<h2 className='about-me'>About Me</h2>
					<div className='about'>
						<div className='text2'>
							<p>
								Hi! I'm 15 years old and I'm learning frontend development. I
								enjoy building simple and clean websites using HTML, CSS,
								JavaScript, and React. I'm looking for freelance projects to
								practice and grow.
							</p>
						</div>
						<img src='coding.jpg' alt='' />
					</div>

					<div className='skills'>
						<h2>My Skills</h2>
						<ul>
							<li>
								<img src='html.svg' alt='' />
								HTML
							</li>
							<li>
								<img src='css.svg' alt='' />
								CSS
							</li>
							<li>
								<img src='js.svg' alt='' /> JavaScript
							</li>
							<li>
								<img src='react.svg' alt='' /> React.js
							</li>
							<li>
								<img src='tailwind.svg' alt='' /> Tailwind CSS
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section id='projects'>
				<h2>My Projects</h2>

				<div className='project'>
					<h3>Coffee Roasters Website</h3>
					<p>
						A responsive landing page for a coffee business. Built with HTML,
						CSS.
					</p>
					<div className='link2'>
						<a
							href='https://laziw-001.github.io/coffeeroasters/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Live Demo
						</a>{' '}
						|
						<a
							href='https://github.com/laziw-001/coffeeroasters'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub Code
						</a>
					</div>
				</div>
			</section>
			<div id='link'>
				<a
					href='https://github.com/laziw-001'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src='GitHub.svg' alt='' />
					Github
				</a>
				<a
					href='https://www.instagram.com/miss.laziw/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src='Instagram.svg' alt='' />Inatagram
				</a>
				<a href='mailto:abduqodirovalaziza866@gmail.com'>
					<img src='Gmail.svg' alt='' />
					Gmail
				</a>
			</div>
		</main>				
	)
}
