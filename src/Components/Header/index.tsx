import React from 'react';

import { Container, Exit, Item, List, Logo, UserImage, WrapperClassItem, WrapperLogo } from './styles';

import UserImg from '../../Assets/user.jpg'
import { Link } from 'react-router-dom';
import { useSection } from '../../Context/section';

const Header: React.FC = () => {

    const { saveData } = useSection()

    return (
        <Container >
            <WrapperLogo>
                <Logo>MARVEL</Logo>
            </WrapperLogo>

            <WrapperClassItem>

                <List>
                    <Item onClick={() => saveData('personagens')}>Personagens</Item>
                    <Item onClick={() => saveData('filmes')}>Filmes</Item>
                    <Item onClick={() => saveData('hqs')}>HQs</Item>
                </List>

            </WrapperClassItem>

            <UserImage src={UserImg} />
            <Link to='/'>
                <Exit>Sair</Exit>
            </Link>

        </Container>
    );
}

export default Header;