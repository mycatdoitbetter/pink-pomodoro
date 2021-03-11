import React, { useEffect } from 'react';

import { 
  Container, 
  LoginSide,
  TitleContainer,
  Title,
  DescriptionContainer,
  Description,
  Form
} from './styles';

function Login() {

  async function getUser() {

    fetch("https://api.github.com/users/mycatdoitbetter")
    .then((response) => response.json())
    .then((response) => console.log(response))
    
  }

  useEffect(() => {getUser()
  }, [])

  return (
    <Container>
      <LoginSide>

        <TitleContainer>
          <img src="assets/tomato.svg" alt=""/>
          <Title>Pink Pomodoro</Title>
        </TitleContainer>

        <DescriptionContainer>
          <img src="assets/github.svg" alt=""/>
          <Description>
             Aproveite a plataforma inserindo o nome de usuário do <span className="highlighted">github</span>
          </Description>
        </DescriptionContainer>

        <Form action="submit">
          <label htmlFor="github-user">
            Nome do usuário no github
          </label>

          <input
          placeholder="@seu_usuário" 
          type="text" 
          name="github-user"
          />

          <button type="submit">Entrar!</button>
        </Form>

      </LoginSide>
    </Container>
  );
}

export default Login;