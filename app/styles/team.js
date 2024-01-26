import styled from "styled-components";
import { HomePageContainer } from "./home";

export const TeamPageContainer = styled(HomePageContainer)`
  background-image: url(https://ik.imagekit.io/pgm/yellow-background-final-2_7DhPl_vM7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652305741932)
`;

export const FlexList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${({ alignCenter }) => alignCenter && `
    justify-content: center
  `}
`;
export const FlexListItem = styled.div`
  flex: 1 1 30%;
  display: flex;
  ${({ alignCenter }) => alignCenter && `justify-content: center`}
`;