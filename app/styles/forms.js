import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputFieldBox = styled.div`
    width: 600px;
`;
export const InputField = styled.input`
  ${({ color }) => color && `
    background: ${color};
    border: 1px solid ${color}
  `};
  width: 600px;
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
  ${({ color }) => color && `
  background: ${color};
  border: 1px solid ${color};
  `}
  border-radius: 4px;
`;
export const InputBracketBox = styled.div`
  height: 56px;
`;