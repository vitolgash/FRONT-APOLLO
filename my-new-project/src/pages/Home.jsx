import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import MyComponent from '../components/MyComponent' // Импорт вашего компонента
import './Home.css' // Импорт стилей

function Home() {
	const [count, setCount] = useState(0)

	return (
		<div className='home-container'>
			<div className='logo-container'>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='counter-container'>
				<button
					className='counter-button'
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
				<p className='counter-instruction'>
					Edit <code>src/Home.jsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>

			{/* Вставляем компонент с SVG изображением */}
			<MyComponent />
		</div>
	)
}

export default Home
