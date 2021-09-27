import styled from 'styled-components';
import { themes } from '../../Styles';
import { pxToRem } from '../../Utils';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: ${pxToRem(1920)};
    min-width: 100%;
    height: ${pxToRem(75)};

    border-bottom: ${pxToRem(2)} solid ${themes.red};
    padding: ${pxToRem(5)} ${pxToRem(10)};

`;

export const WrapperLogo = styled.div`
    width: 25%;
    display: flex;
    align-items: center;

`


export const Logo = styled.div`
    color: ${themes.white};
    font-size: ${pxToRem(50)};
    font-family: 'Marvel';
    text-align: center;
    position: absolute;

    width: ${pxToRem(150)};
    color: ${themes.white};
    background-color: ${themes.red};
    


`;


export const WrapperClassItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 75%;

    color: ${themes.white};
`

export const List = styled.ul`
    min-width: 696px;
	list-style: none;
	padding-top: 20px;
`

export const Item = styled.li`
    display: inline;
    padding: 0 ${pxToRem(40)};
    font-size: ${pxToRem(30)};
    font-weight: bold;
    opacity: 0.7;

    :hover{
        opacity: 1;
    }

`
export const UserImage = styled.img`
    width: ${pxToRem(50)};
    height: ${pxToRem(50)};

    border-radius: ${pxToRem(50)};
    margin-right: ${pxToRem(25)};
`;

export const Exit = styled.p`
    color: ${themes.gray};
    padding-top: ${pxToRem(20)};
    margin-right: ${pxToRem(25)};
    font-weight: lighter;

`;