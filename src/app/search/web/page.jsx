import ErrorComponent from "@/components/Error";
import Pagination from "@/components/Pagination";
import WebResultsList from "@/components/WebResultsList";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

export default async function WebSearchPage({ searchParams }) {
  const searchTerm = searchParams.searchTerm;
  const startIndex = searchParams.start || "1";

  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}x&cx=${CONTEXT_KEY}&q=${searchTerm}&start=${startIndex}`
  );

  if (!res.ok) throw new Error("Something went wrong!");

  const results = await res.json();

  if (!results) return <ErrorComponent />;

  return (
    <section>
      {results && <WebResultsList results={results} />}
      <Pagination />
    </section>
  );
}
