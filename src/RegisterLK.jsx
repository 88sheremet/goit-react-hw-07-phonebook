import styled from 'styled-components';
import svgLogo from '../src/images/LogoRegisterLK.svg';
import LogoImg from '../src/images/RegisterLK.png';
import check from '../src/images/check.svg';
export const RegisterLK = () => {
  const onClick = () => {
    document.getElementById('item').classList.toggle('oncheck');
  };

  const onClick2 = () => {
    document.getElementById('item2').classList.toggle('oncheck2');
  };

  return (
    <Container>
      <FormContainer>
        <img src={svgLogo} alt="" />
        <h1>Реєстрація</h1>
        <p>Зареструйтесь всього у декілька кроків</p>
      </FormContainer>

      <List>
        <li id="item">
          <InputContainer>
            <label>
              <input type="checkbox" onClick={onClick} />
              <span></span>Я постачальник
            </label>
          </InputContainer>
        </li>
        <li id="item2">
          <InputContainer>
            <label>
              <input type="checkbox" onClick={onClick2} />
              <span></span>Я є власником закладу
            </label>
          </InputContainer>
        </li>
      </List>
      <ComeInContainer>
        <p>У вас вже є аккаунт?</p>
        <a href='dddd'>Вхід</a>
      </ComeInContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 118px 40px 130px 150px;
  background-image: url('${LogoImg}');
  background-repeat: no-repeat;
  background-position: right;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
  gap: 20px;
  img {
    display: block;
    width: 136.23px;
    height: 29.98px;
  }
  h1 {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 66px;
    color: #222222;
    margin: 0;
  }
  p {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: rgba(34, 34, 34, 0.5);
    margin: 0;
    margin-bottom: 68px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 16px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;
  height: 72px;
  /* background-color: #FFFFFF; */
  border: 1px solid #e8e8e8;
  border-radius: 10px;

&:hover{
  border: 1px solid #E8E8E8;
box-shadow: 0px 2px 6px 2px rgba(232, 232, 232, 0.5);
}

  label {
    cursor: pointer;

    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #222222;
    padding-left: 20px;
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    padding-left: 40px;
  }

  span {
    position: absolute;
    border: 1px solid #e8e8e8;
    width: 20px;
    height: 20px;
    border-radius: 90px;
    margin-left: 400px;
    cursor: pointer;
  }

  input:checked + span {
    border: 1px solid #ffa451;
    background-image: url('${check}');
    background-repeat: no-repeat;
    background-position: center;
  }

  input:checked + span + label + div {
    background-color: #ffa451;
  }
`;

const ComeInContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 0;

  p {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    color: #222222;
  }
  a {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #ffa451;
    display: flex;
    align-items: center;
  }
`;


//for index.css
// li,a{
//     list-style: none;
//   text-decoration: none;
//   }
  
//   *{
//     box-sizing: border-box;
//   }
  
//   .oncheck{
//     display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 480px;
//   height: 72px;
//     background-color: #FFF9F3;
//     border: 2px solid #FFA451;
//     border-radius: 10px;
//   }
  
//   .oncheck2{
//     display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 480px;
//   height: 72px;
//     background-color: #FFF9F3;
//     border: 2px solid #FFA451;
//     border-radius: 10px;
//   }