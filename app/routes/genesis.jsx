import {
  GenesisPageContainer,
} from "../styles/genesis";

import PageLayout from '~/components/PageLayout';
import { Variations } from '../components/Footer';

export default function Genesis() {
  return (
    <PageLayout
      splashImagePath="/PGM%20website%20files/Untitled_Artwork%202_58orFnQqa.gif?updatedAt=1706237708132"
      bannerImagePath="/PGM%20website%20files/Purple%20page%20gif_ghWkHmfJ6v.gif?updatedAt=1706237718166"
      footerVariation={Variations.PURPLE}
      footerText="Genesis."
      PageContainerComponent={GenesisPageContainer}
    />
  );
}
