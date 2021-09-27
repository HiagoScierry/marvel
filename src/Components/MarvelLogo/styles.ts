import styled, { keyframes } from 'styled-components';
import { themes } from '../../Styles';
import { pxToRem } from '../../Utils';


const moveLogoLeft = keyframes`
    from {
        left: 45%;
        opacity: 1;
    }
    to {
        left: 15%;
        opacity: 0;

    }
`

export const MarvelLogo = styled.div`
    color: ${themes.white};
    font-size: ${pxToRem(100)};
    font-family: 'Marvel';

    position: absolute;
    opacity: 0;

    bottom: 10%;
    left: 15%;
    animation: ${moveLogoLeft} 3s;
    width: ${pxToRem(150)};
    margin-bottom: ${pxToRem(50)};

    


`;

export const MarvelLogoTop = styled.div`
    color: ${themes.white};
    background-color: ${themes.red};
`;

export const MarvelLogoBottom = styled.div`
    color: ${themes.white};
`;

