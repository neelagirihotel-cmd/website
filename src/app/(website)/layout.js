import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CookieBanner from '../../components/CookieBanner';
import { Analytics } from '@vercel/analytics/next';

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
      <Analytics />
    </>
  );
}
