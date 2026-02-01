import Link from "next/link";

export const metadata = {
    title: 'Services',
}

export default function Home() {
  return (
    <div>
      <h1> Services Page </h1>
      <Link href="/services/web-dev">Web Development</Link>
      {/* Learned to create nested routing */}
    </div>
  );
}