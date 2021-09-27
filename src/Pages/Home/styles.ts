import styled from 'styled-components';
import { themes } from '../../Styles';
import { pxToRem } from '../../Utils';


export const Container = styled.div`
    width: ${pxToRem(1920)};
    min-width: 100%;
    height: 100vh;
    background-color: ${themes.black};
`;


export const ImageBackground = styled.img`
    width: 50%;
    min-width: 50%;
    height: 100vh;

    position: fixed;
    right:0%;
    opacity: 0.5;

    mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0));

`;

export const WrapperContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${pxToRem(1920)};
    min-width: 100%;
    height: 90vh;

`
