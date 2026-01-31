import Link from "next/link";

export default async function Home({ searchParams, params}) {
  console.log(await searchParams);
  console.log(await params);
  return (
    <div>
      <h1> Welcome to Home </h1>
      <p><Link href="/about">About</Link></p>  
      {/* learned to create routes, created about route and linked it to the main home page */}
      <p><Link href="/services">Services</Link></p>
    </div>
  );
}
