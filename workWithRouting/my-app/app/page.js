import Link from "next/link";

export const metadata = {
    title: 'Welcome Home',
}

export default async function Home({ searchParams, params}) {
  console.log(await searchParams);
  console.log(await params);
  return (
    <div>
      <h1> Welcome to Home </h1>
      <p><Link href="/about">About</Link></p>  
      {/* learned to create routes, created about route and linked it to the main home page */}
      <p><Link href="/services">Services</Link></p>
      <p><Link href="/files">Files</Link></p>
    </div>
  );
}

// When creating an optional catch all route [[filef]] on the root directory fo app
// then its creates an error and not allowed
// but when we delete this main page.js then it chooses the optional catch route as the main file