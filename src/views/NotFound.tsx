export default function NotFound({ path }: { path: string }) {
  return (
    <>
      <h1>Page or file not found</h1>
      <p>
        The page at <code>{path}</code> was not found.
      </p>
    </>
  );
}
