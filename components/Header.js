import React from "react";
import Link from 'next/link';

/**
 * Global site header displayed across all pages.
 * Contains navigation links for primary routes.
 */
export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/account">Account</Link>
      </nav>
    </header>
  );
}
