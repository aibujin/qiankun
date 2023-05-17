import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var root = null
function render(props) {
    console.log(ReactDOM)
    const { container } = props;
    root = container ? ReactDOM.createRoot(container.querySelector('#root')) : ReactDOM.createRoot(document.querySelector('#root'))
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

export async function mount(props) {
    console.log('[react16] props from main framework', props);

    props.onGlobalStateChange((state, prev) => {
        // state: 变更后的状态; prev 变更前的状态
        console.log(state, prev);
    });

    props.setGlobalState({ user: 'react project state' });


    render(props);
}

export async function unmount(props) {
    root.unmount()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
