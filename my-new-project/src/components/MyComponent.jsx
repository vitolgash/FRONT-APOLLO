import React from 'react'
import './MyComponent.css' // Import the CSS file for styling

const MyComponent = () => {
	return (
		<div className='my-component'>
			<h1>Hello World</h1>
			{/* SVG with corrected attributes */}
			<svg
				xmlns='http://www.w3.org/2000/svg'
				aria-hidden='true'
				role='img'
				className='iconify iconify--logos'
				width='35.93'
				height='32'
				preserveAspectRatio='xMidYMid meet'
				viewBox='0 0 256 228'
				aria-label='React logo'
			>
				<title>React Logo</title>
				<path
					fill='#00D8FF'
					d='M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c...' // Complete path data here
				/>
			</svg>
		</div>
	)
}

export default MyComponent
