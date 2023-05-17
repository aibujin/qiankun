
import './App.css';
import { useRoutes, Navigate, BrowserRouter, Link } from "react-router-dom";
import Admin from "./views/admin";
import Main from "./views/main";

const GetRoutes = () => {
    const routes = useRoutes(
        [
            {
                path: '/admin',
                element: <Admin></Admin>
            },
            {
                path: '/main',
                element: <Main></Main>
            },
            {
                path: '/',
                element: <Navigate to="/main" replace={true} />,
            }
        ]
    )
    return routes;
};

function App() {
    return (
        <div style={{ 'textAlign': 'center' }}>
            <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
                <div style={{
                    position: 'relative',
                    left: '50%',
                    'fontSize': '38px',
                    transform: 'translateX(-50%)'
                }}>
                    <Link to="/admin" style={{ marginRight: '20px', color: '#1890FF' }}>Admin</Link>
                    <Link to="/main" style={{ color: '#1890FF' }}>Main</Link>
                </div>
                <GetRoutes />
            </BrowserRouter >
        </div >
    );
}

export default App;
