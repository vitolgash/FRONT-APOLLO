import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from '../pages/About' // Импортируем страницу About
import Home from '../pages/Home' // Импортируем главную страницу
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
