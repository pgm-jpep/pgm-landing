import Footer from '../components/Footer';

import {
  SplashPageContainer,
  SplashLogoContainer,
  SplashLogo,
  SplashBanner,
  SplashButton,
} from "../styles/splash";
import { IKContext, IKImage } from "imagekitio-react";
import PasswordInput, { Variations } from '~/components/PasswordInput';
import { useLoaderData } from '@remix-run/react'
import { useState } from 'react';


export async function loader() {
  return process.env.BETA_PASSWORD || null
}
export default function Index() {
  const beta  = useLoaderData();
  const [password, setPassword] = useState('');
  const onChange = (e) => {
    setPassword(e.target.value);
  }
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/pgm">

      <SplashPageContainer>
        <PasswordInput variation={Variations.PINK} onChange={onChange} value={password} />
        
          <div 
            onClick={() => {
              if(password === beta) {
                window.location.href = "/home"
              } else {
                alert('Invalid password. Please try again.')
              }
            }}
          >
            <IKImage
              path="/enter-button-final_4i9f4_Ec8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651981728961"
              transformation={[{
                "width": "350"
              }]}
              loading="lazy"
              lqip={{active: true}}
              style={{
                "margin": "auto"
              }}
            />
          </div>
      </SplashPageContainer>
    </IKContext>
  );
}
