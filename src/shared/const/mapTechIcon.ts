import ReactIcon from 'shared/assets/icons/react.png';
import VueIcon from 'shared/assets/icons/vue.png';
import HTMLIcon from 'shared/assets/icons/html.png';
import CSSIcon from 'shared/assets/icons/css-3.png';
import SassIcon from 'shared/assets/icons/sass.png';
import PythonIcon from 'shared/assets/icons/python.png';
import CsharpIcon from 'shared/assets/icons/c-sharp.png';
import TypescriptIcon from 'shared/assets/icons/typescript.png';
import MySQLIcon from 'shared/assets/icons/mysql.png';
import JsIcon from 'shared/assets/icons/js.png';
import PHPIcon from 'shared/assets/icons/php.png';
import ViteIcon from 'shared/assets/icons/vite.svg';
import ReduxIcon from 'shared/assets/icons/redux.svg';
import EslintIcon from 'shared/assets/icons/eslint.svg';
import WebsocketsIcon from 'shared/assets/icons/websocket.png';
import ReactNativeIcon from 'shared/assets/icons/react-native.png';
import { Technologies } from 'entities/Project/model/types/project';

export const mapTechIcon: Record<Technologies, string> = {
    [Technologies.HTML]: HTMLIcon,
    [Technologies.REACT]: ReactIcon,
    [Technologies.CSHARP]: CsharpIcon,
    [Technologies.CSS]: CSSIcon,
    [Technologies.SASS]: SassIcon,
    [Technologies.TYPESCRIPT]: TypescriptIcon,
    [Technologies.PYTHON]: PythonIcon,
    [Technologies.VUE]: VueIcon,
    [Technologies.REACT_NATIVE]: ReactNativeIcon,
    [Technologies.JAVASCRIPT]: JsIcon,
    [Technologies.PHP]: PHPIcon,
    [Technologies.MYSQL]: MySQLIcon,
    [Technologies.VITE]: ViteIcon,
    [Technologies.ESLINT]: EslintIcon,
    [Technologies.REDUX]: ReduxIcon,
    [Technologies.REDUX_TOOLKIT]: ReduxIcon,
    [Technologies.WEBSOCKETS]: WebsocketsIcon,
};
