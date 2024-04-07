import ReactIcon from 'shared/assets/icons/react.png';
import VueIcon from 'shared/assets/icons/vue.png';
import HTMLIcon from 'shared/assets/icons/html.png';
import CSSIcon from 'shared/assets/icons/css-3.png';
import SassIcon from 'shared/assets/icons/sass.png';
import PythonIcon from 'shared/assets/icons/python.png';
import CsharpIcon from 'shared/assets/icons/c-sharp.png';
import TypescriptIcon from 'shared/assets/icons/typescript.png';
import { Technologies } from '../../entities/Project/model/types/project';

export const mapTechIcon: Record<Technologies, string> = {
    [Technologies.HTML]: HTMLIcon,
    [Technologies.REACT]: ReactIcon,
    [Technologies.CSHARP]: CsharpIcon,
    [Technologies.CSS]: CSSIcon,
    [Technologies.SASS]: SassIcon,
    [Technologies.TYPESCRIPT]: TypescriptIcon,
    [Technologies.PYTHON]: PythonIcon,
    [Technologies.VUE]: VueIcon,
};
