import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home' // Импортируем главную страницу
import About from './pages/About' // Импортируем страницу About
import './App.css' // Оставляем стили

function App() {
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</Router>
	)
}

export default App
