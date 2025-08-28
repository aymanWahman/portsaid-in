import Link from "@/components/link";

export default function NotFound() {
  return (
    <html>
      <body>
        <main className='container pt-24 items-center'>
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href='/'>Return Home</Link>
        </main>
      </body>
    </html>
  );
}
