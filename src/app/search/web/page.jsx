import Error from "@/components/Error";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

export default async function WebSearchPage({ searchParams }) {
  const searchTerm = searchParams.searchTerm;

  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`
  );

  if (!res.ok) throw new Error("Something went wrong!");

  const data = await res.json();
  const results = data.items;

  if (!results) {
    return <Error />;
  }

  return (
    <div>
      {results.map((result) => (
        <h3 key={result.title}>{result.title}</h3>
      ))}
    </div>
  );
}
