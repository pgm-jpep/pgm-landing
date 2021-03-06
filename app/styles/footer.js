import styled from 'styled-components';

export const FooterContainer = styled.div`
  margin: 12px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const FooterBar = styled.img`
  width: 100%;
  max-width: 1200px;
`;
export const SocialLinks = styled.div`
  margin: 24px auto;
  display: flex;
  justify-content: center;
  gap: 12px;
`;
export const SocialLink = styled.img`
  max-height: 50px;
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