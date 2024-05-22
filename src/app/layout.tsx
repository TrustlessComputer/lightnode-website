import '@/styles/index.scss';

import { Metadata, Viewport } from 'next';

import StoreProvider from '@/providers/StoreProvider';
import ModalManager from '@/components/ModalManage';
import ToastOverlay from '@/components/ToastOverlay';
import { MetadataConfig, ViewportConfig } from '@/config';
import chakraThemes from '@/themes/chakra-themes';
import { ChakraProvider } from '@chakra-ui/react';
import Script from 'next/script';

export const metadata: Metadata = MetadataConfig;
export const viewport: Viewport = ViewportConfig;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D9T7LSF6BJ"
        ></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-D9T7LSF6BJ');`}
        </Script>
        <Script>
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ktq824k12x");`}
        </Script>
      </head>
      <body>
        <StoreProvider>
          <ChakraProvider theme={chakraThemes}>
            <ModalManager />
            {children}
            <ToastOverlay />
          </ChakraProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
