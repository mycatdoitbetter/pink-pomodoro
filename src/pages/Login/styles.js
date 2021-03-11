import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #F2F3F5;
`;

export const LoginSide = styled.div`
  display: flex;
  height: 100vh;
  width: 35vw;
  background-color: #fff;
  padding: 47px 59px 0 59px;

  flex-direction: column;

`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  
  margin: 0 20px 70px;
  

  img {
    width: 70px;
    height: 70px;
    margin-right: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-family: Poppins;
  font-weight: 600;

  color: #FF75A0;

`;

export const DescriptionContainer = styled.div`
  img {
    width: 50px;
    margin: 20px;
  }

  display:  flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;

`;

export const Description = styled.span`
  font-size: 16px;
  font-family: Poppins;
  font-weight: 600;
  color: #2E384D;

  .highlighted {
    color: #F25287;
  }

`;  

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  label {
    color: #2E384D;
    font-family: Poppins;
    font-size: 14px;
    margin-bottom: 10px;
  }

  input {

    border: 1px solid #DCDDE0;
    outline: none;
    height: 42px;
    border-radius: 7px;
    padding: 0 20px;

  }

  button {
    border: none;
    outline: none;
    height: 42px;
    border-radius: 7px;
    background-color: #FFB8B8;
    margin-top: 17px;

    color: #2E384D;
    font-family:  Poppins;
    font-weight: 600;

    transition: all 300ms linear;
  }

  button:hover {
    cursor: pointer;
    background-color: #FF7F7F;
  }


`;