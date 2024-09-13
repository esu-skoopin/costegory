import { ConfigProvider } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';

export default function App() {
    return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#464334'
				}
			}}
		>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</ConfigProvider>
	);
}