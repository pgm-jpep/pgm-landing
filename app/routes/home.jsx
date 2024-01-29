import PageLayout from '~/components/PageLayout';
import { Variations } from '~/components/Footer';

export default function Home() {
  return (
    <PageLayout 
      splashImagePath="/PGM%20website%20files/Untitled_Artwork%203_O1c4PqmNX.gif?updatedAt=1706237717815" 
      bannerImagePath="/PGM%20website%20files/Pink%20page%20gif_TFZUIeOWN.gif?updatedAt=1706237708422"
      footerVariation={Variations.PINK}
      footerText="Deliverance."
    />
  );
}
