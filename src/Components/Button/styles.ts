import styled from 'styled-components';
import { themes } from '../../Styles';
import { pxToRem } from '../../Utils';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: ${pxToRem(50)};

    margin-top: ${pxToRem(10)};

    background-color: ${themes.red};

    border-radius: ${pxToRem(500)};
    color: ${themes.white};

    font-size: ${pxToRem(20)};
    font-weight: 500;

    :hover{
        opacity: 0.95;
    }
`;
