import Head from "../components/Head.tsx";

export default function NotFound({ path }: { path: string }) {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <h1>Page or file not found</h1>
      <p>
        The page at <code>{path}</code> was not found.
      </p>
    </>
  );
}
