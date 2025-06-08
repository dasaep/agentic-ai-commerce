import React from "react";
import Link from 'next/link';
/**
 * Simple navigation component used in some pages.
 */

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/cart">Cart</Link>
    </nav>
  );
}
