import { IKImage } from "imagekitio-react";
import {
  InputContainer,
  InputBracketBox,
  InputFieldBox,
  InputField,
  InputIconBox,
} from "../styles/forms";

export const Variations = {
  GREEN: 'green',
  PINK: 'pink',
  YELLOW: 'yellow'
}

export const getInputColor = (variation) => {
  return {
    [Variations.PINK]: '#443050',
    [Variations.YELLOW]: '#485508',
    [Variations.GREEN]: '#53702c',
  }[variation]
}

export const getInputIconColor = (variation) => {
  return {
    [Variations.PINK]: '#e3afff',
    [Variations.YELLOW]: '#CAD913',
    [Variations.GREEN]: '#263A0B',
  }[variation]
}

const getLeftBracketPath = (variation) => {
  return {
    [Variations.PINK]: '/left-bracket-pink_6K2LI739qq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647916171574',
    [Variations.YELLOW]: '/left-bracket-yellow_i0Hxi4GbTw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647916234146',
    [Variations.GREEN]: '/left-bracket-green_cv5DIzo-6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647922205783',
  }[variation]
}
const getRightBracketPath = (variation) => {
  return {
    [Variations.PINK]: '/right-bracket-pink_Vjhzhsrc5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647916185573',
    [Variations.YELLOW]: '/right-bracket-yellow_7zGMd1buh8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647916234119',
    [Variations.GREEN]: '/right-bracket-green_MiZlkJC722.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647922205791',
  }[variation]
}



const EmailInput = ({ variation = Variations.PINK}) => {
  const inputColor = getInputColor(variation);
  const inputIconColor = getInputIconColor(variation);
  const leftBracketPath = getLeftBracketPath(variation);
  const rightBracketPath = getRightBracketPath(variation);
  return (
    <InputContainer>
      <InputBracketBox>
      <IKImage
          path={leftBracketPath}
          transformation={[{
            height: "56"
          }]}
        />
      </InputBracketBox>
      <InputFieldBox >
        <InputField color={inputColor} type='email' placeholder="Email address" />
      </InputFieldBox>
      <InputIconBox color={inputIconColor}>
        <IKImage
          path="/dotted-arrow_Q-88Z_X2q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647711227720"
          transformation={[{
            height: "32"
          }]}
        />
      </InputIconBox>
      <InputBracketBox>
      <IKImage
          path={rightBracketPath}
          transformation={[{
            height: "56"
          }]}
        />
      </InputBracketBox>
    </InputContainer>
  )
}

export default EmailInput;