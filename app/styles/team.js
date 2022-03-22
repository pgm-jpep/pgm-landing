import styled from "styled-components";
import { HomePageContainer } from "./home";

export const TeamPageContainer = styled(HomePageContainer)`
  background-image: url(https://ik.imagekit.io/pgm/team-page-background_P2sNYIzXW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647920620750)
`;

export const FlexList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const FlexListItem = styled.div`
  flex: 1 1 30%;
`;