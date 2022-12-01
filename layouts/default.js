import { Header } from '../components/Header'
import Footer from '../components/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div id="page">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout
