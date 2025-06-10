import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
/**
 * Layout component used to provide a consistent page structure.
 * Renders a header above and footer below the supplied children.
 */

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="container">
        {children}
      </main>
      <Footer />
    </>
  );
}
