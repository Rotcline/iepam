import {createGlobalStyle} from 'styled-components';

import OpenSansBold from "./OpenSans-Bold.ttf";
import OpenSansLight from './OpenSans-Light.ttf';
import OpenSansSemiBold from './OpenSans-SemiBold.ttf';
import OpenSansRegular from './OpenSans-Regular.ttf';


export default createGlobalStyle`
    @font-face {
        font-family: 'OpenSansLight';
        src: local('OpenSansLight'),
        url(${OpenSansLight}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'OpenSansBold';
        src: local('OpenSansBold'),
        url(${OpenSansBold}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'OpenSansSemiBold';
        src: local('OpenSansSemiBold'),
        url(${OpenSansSemiBold}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'OpenSansRegular';
        src: local('OpenSansRegular'),
        url(${OpenSansRegular}) format('truetype');
        font-style: normal;
    }
`;