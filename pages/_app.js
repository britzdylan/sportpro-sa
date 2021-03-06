import '../styles/index.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import SimpleReactLightbox from 'simple-react-lightbox'
import { DefaultSeo } from 'next-seo';


function MyApp({ Component, pageProps }) {
  return (
    <>

      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_UK',
          url: 'https://www.sportprosa.co.za',
          site_name: 'Sportpro South Africa',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            }
          ]
        }}
      />
      <SimpleReactLightbox>
      <Component {...pageProps} />
      </SimpleReactLightbox>
    </>
  )
}

export default MyApp
