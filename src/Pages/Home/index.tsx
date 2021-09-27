import React, { useEffect, useState } from 'react';
import AllHeros from '../../Assets/AllHeros.svg'
import { Card, Header } from '../../Components';
import { useSection } from '../../Context/section';
import data from '../../heros.json';
import { Container, ImageBackground, WrapperContent } from './styles';

const Home: React.FC = () => {
  const { data: dataContext } = useSection()

  const [tab, setTab] = useState(dataContext);


  useEffect(() => {
    setTab(dataContext)
  }, [dataContext])

  return (
    <Container >
      <Header />

      <WrapperContent>
        {
          tab === 'personagens' && data.personagem.map(index => {
            return <Card image={index.image} title={index.nome} description={index.descricao} />
          })
        }

        {
          tab === 'filmes' && data.filmes.map(index => {
            return <Card image={index.image} title={index.nome} description={index.descricao} />
          })
        }

        {
          tab === 'hqs' && data.hqs.map(index => {
            return <Card image={index.image} title={index.nome} description={index.descricao} />
          })
        }
      </WrapperContent>


      <ImageBackground src={AllHeros} />
    </Container>
  );
}

export default Home;