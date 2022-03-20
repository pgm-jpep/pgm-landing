import styled from 'styled-components';
import HelveticaNeueLTPro from '../assets/fonts/HelveticaNeueLTPro-Blk.otf';


export const HomePageContainer = styled.div`
  background-image: url(https://ik.imagekit.io/pgm/main-page-background_BxJCwGSlS.png);
  background-size: 100% auto;
  height: 100%;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  @font-face {
    font-family: 'Neue Helvetica Pro 95 Black';
    src: url(${HelveticaNeueLTPro});
  }
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 100%;
  padding: 32px;
`;
export const ParagraphText = styled.p`
  font-size: 1.4em;
  color: #e3afff;
`;
export const HeaderText = styled.h1`
  text-align: center;
  font-size: 2.4em;
  font-weight: 900;
  margin: 24px 0px;
`;
export const SubheaderText = styled.h3`
  text-align: center;
  font-size: 1.8em;
  font-weight: 800;
  margin: 24px 0px;
`;

export const MainSection = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  margin: 24px 0px;
  ${({ center }) => center && `
    text-align: center
  `};
  ${({ column }) => column && `
    display: flex;
    flex-direction: column;
    gap: 64px;
  `}
`;

export const Divider = styled.div`
  background-color: #e3afff;
  width: 100%;
  max-width: 1200px;
  height: 4px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;
export const InputFieldBox = styled.div`
    width: 600px;
`;
export const InputField = styled.input`
  background: #443050;
  width: 600px;
  border: 1px solid #443050;
  border-radius: 4px;
  line-height:28px;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: white;
    font-size: 16px;
  }
`;
export const InputIconBox = styled.div`
  height: 32px;
  width: 32px;
  ${({ solid }) => solid && `
  background: #e3afff;
  border: 1px solid #e3afff;
  `}
  border-radius: 4px;
`;
export const InputBracketBox = styled.div`
  height: 56px;
`;

// #e3afff
