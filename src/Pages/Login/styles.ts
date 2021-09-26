import styled, { keyframes } from 'styled-components';
import { themes } from '../../Styles';
import { pxToRem } from '../../Utils';

export const Container = styled.div`
    width: ${pxToRem(1920)};
    min-width: 100%;
    height: 100vh;
    background-color: ${themes.black};
`;

const apperImage = keyframes`
    from{
        opacity: 0;
    } 
    to {
        opacity: 0.5;
    }
`;

export const ImageBackground = styled.img`
    width: 50%;
    min-width: 50%;
    height: 100vh;

    position: absolute;
    right:0%;
    opacity: 0.5;

    animation: ${apperImage} 3s;
      mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0.2));

`;


const appearForm = keyframes`
    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

export const Form = styled.div`
    position: absolute;

    top: 35%;
    left: 15%;

    width: ${pxToRem(450)};
    animation: ${appearForm} 5s;
`;


export const WrapperForm = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: ${themes.red};
    font-weight: bold;
    font-size: ${pxToRem(30)};
    padding-left: ${pxToRem(20)};
`;



export const Subtitle = styled.p`
    color: ${themes.gray};
    font-weight: lighter;
    padding-left: ${pxToRem(20)};
    font-size: ${pxToRem(20)};

`;


export const InputText = styled.input`
    background-color: ${themes.white};
    width: 100%;
    height: ${pxToRem(50)};
    
    border-radius: ${pxToRem(50)};
    margin: ${pxToRem(10)} 0;
   
    border: none;

    padding: ${pxToRem(20)};

    font-size: ${pxToRem(18)};
    font-weight: lighter;
    
    color: ${themes.gray};
`;

export const WrapperLoginType = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: ${pxToRem(10)};
`

export const ForgetPass = styled.p`
    color: ${themes.gray};
    font-weight: lighter;
    padding-left: ${pxToRem(20)};
    font-size: ${pxToRem(15)};
`;

export const WrapperCheckBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CheckboxLabel = styled.p`
    color: ${themes.gray};
    font-weight: lighter;
    padding-left: ${pxToRem(20)};
    font-size: ${pxToRem(15)};
`;


export const CheckBox = styled.input``;

export const NewUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;


    color: ${themes.gray};
    font-weight: lighter;
    padding-left: ${pxToRem(20)};
    font-size: ${pxToRem(15)};

    margin: ${pxToRem(20)} auto;
`;

export const NewUserRed = styled.p`
    color: ${themes.red};
    font-weight: lighter;
    padding-left: ${pxToRem(20)};
    font-size: ${pxToRem(15)};

    margin: ${pxToRem(20)} auto;
`;