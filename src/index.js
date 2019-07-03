import ReactDOM from 'react-dom'
// 载入默认全局样式 normalize
import '@alifd/next/reset.scss'
import router from './router'

const MAIN_CONTAINER = document.getElementById('root');

if (!MAIN_CONTAINER) {
  throw new Error('当前页面不存在 <div id="root"></div> 节点.');
}

ReactDOM.render(router, MAIN_CONTAINER);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
