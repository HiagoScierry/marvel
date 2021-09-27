import styled from 'styled-components';
import { pxToRem } from '../../Utils';
import { themes } from '../../Styles';

import spider from '../../Assets/personagens/spider.jpg';
import wanda from '../../Assets/personagens/wanda.jpg';
import thanos from '../../Assets/personagens/thanos.jpg';
import hulk from '../../Assets/personagens/hulk.jpg';
import iron from '../../Assets/filmes/iron.jpg';
import iron2 from '../../Assets/filmes/iron2.jpg';
import thor from '../../Assets/filmes/thor.jpg';
import marvel from '../../Assets/filmes/marvel.jpg';
import cap from '../../Assets/filmes/cap.jpg';
import thorVik from '../../Assets/hqs/thorVik.jpg';
import prateado from '../../Assets/hqs/prateado.jpg';
import wolv from '../../Assets/hqs/wolv.jpg';



interface Props {
    src: string;
}

const useCorrectImage = (image: string) => {
    switch (image) {
        case 'spider':
            return spider;
        case 'wanda':
            return wanda;
        case 'thanos':
            return thanos;
        case 'hulk':
            return hulk;
        case 'iron':
            return iron;
        case 'iron2':
            return iron2;
        case 'thor':
            return thor;
        case 'cap':
            return cap;
        case 'marvel':
            return marvel;
        case 'thorVik':
            return thorVik;
        case 'prateado':
            return prateado;
        case 'wolv':
            return wolv;


    }


}


export const Container = styled.div<Props>`
    width: ${pxToRem(400)};
    height: ${pxToRem(500)};
  
    border-radius: ${pxToRem(25)};

    background-image: url(${[props => useCorrectImage(props.src)]});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;

    color: ${themes.white};

    display: flex;
    align-items: flex-end;
    justify-content: center;

    margin: 0 ${pxToRem(50)}

`;

export const ContainInfo = styled.div`
    height: 50%;
    padding: ${pxToRem(10)};
    
   border-top-left-radius: ${pxToRem(50)};
   border-top-right-radius: ${pxToRem(50)};

    background-color: ${themes.red};
    mask-image: linear-gradient(to bottom, rgba(255,0,0,0.9), rgba(0,0,0,0));


    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

`


export const Title = styled.h1`
    font-size: ${pxToRem(20)};
`
export const Description = styled.p`
    font-size: ${pxToRem(15)};
`