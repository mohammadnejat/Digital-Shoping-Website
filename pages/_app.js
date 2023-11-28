import '@/styles/globals.css'
import '@/styles/Cards.css'
import '@/styles/Footer.css'
import '@/styles/Header.css'
import '@/styles/HomeImageSwiper.css'
import '@/styles/ProductsComponent.css'
import '@/styles/SellCards.css'
import '@/styles/Sidebar.css'
import '@/styles/UserPersonalInfoModal.css'
import '@/styles/UserProfileMenu.css'
import { Provider } from 'react-redux'
import { configRedux } from '@/redux/store'

export default function App ({ Component, pageProps }) {
  const store = configRedux()
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
