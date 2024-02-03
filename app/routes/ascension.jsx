import {
  AscensionPageContainer,
} from "../styles/ascension";

import PageLayout from '~/components/PageLayout';
import { Variations } from '../components/Footer';

export default function Ascension() {
  return (
    <PageLayout
      splashImagePath="/PGM%20website%20files/Untitled_Artwork%204_OIrZlgLLTp.gif?updatedAt=1706237718372"
      bannerImagePath="/PGM%20website%20files/Green%20page%20gif_jDmTfwIY2.gif?updatedAt=1706237715855"
      footerVariation={Variations.YELLOW}
      footerText="Ascension."
      PageContainerComponent={AscensionPageContainer}
    />
  );
}
