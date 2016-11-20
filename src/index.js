import './index.html';
import './index.less';
import dva from 'dva';
import createLoading from 'dva-loading';
import {browserHistory} from 'dva/router';

// 1. Initialize
// const app = dva();
const app = dva({
    history: browserHistory,
    onError(error) {
        console.error(error.stack);
    }
});

// 2. Plugins (hooks)
// app.use(createLoading());

// 3. Model
app.model(require('./models/users'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
