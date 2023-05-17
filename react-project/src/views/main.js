import logo from '../logo.svg';
function Main() {
    return (
        <header style={{
            'backgroundColor': '#282c34',
            'minHeight': '100vh',
            'display': 'flex',
            'flexDirection': 'column',
            'alignItems': 'center',
            'justifyContent': 'center',
            'fontSize': 'calc(10px + 2vmin)',
            'color': 'white'
        }}>
            <img src={logo} className="App-logo" alt="logo" style={{ height: '40vmin', 'pointerEvents': 'none', animation: 'App-logo-spin infinite 20s linear' }} />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    );
}

export default Main;
