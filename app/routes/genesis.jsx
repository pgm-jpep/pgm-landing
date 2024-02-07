import {
  GenesisPageContainer,
} from "../styles/genesis";

import PageLayout from '~/components/PageLayout';
import { Variations } from '../components/Footer';

export default function Genesis() {
  return (
    <PageLayout
      splashImagePath="/PGM%20website%20files/Purple%20gif%20compress_qPJZxzRyN.gif?updatedAt=1707272662413"
      bannerImagePath="/PGM%20website%20files/Purple%20page%20gif_ghWkHmfJ6v.gif?updatedAt=1706237718166"
      footerVariation={Variations.PURPLE}
      footerText="Genesis."
      PageContainerComponent={GenesisPageContainer}
    />
  );
}
