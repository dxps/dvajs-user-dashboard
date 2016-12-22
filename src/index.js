import './index.html';
import './global.less';
import dva from 'dva';
import ReactDOM from 'react-dom';
import createLoading from 'dva-loading';
import { browserHistory } from 'dva/router';

import { IntlProvider, addLocaleData } from 'react-intl';
import { LocaleProvider } from 'antd';
import antdEn from 'antd/lib/locale-provider/en_US';
import appLocaleData from 'react-intl/locale-data/en';
import enMessages from './locales/en';

window.appLocale = {
    messages: {
        ...enMessages,
    },
    antd: antdEn,
    locale: 'en-US',
    data: appLocaleData,
};

const appLocale = window.appLocale;

addLocaleData(appLocale.data);

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
const App = app.start('#root');

ReactDOM.render(
    <LocaleProvider locale={appLocale.antd}>
        <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
            <App />
        </IntlProvider>
    </LocaleProvider>,
    document.getElementById('root')
);