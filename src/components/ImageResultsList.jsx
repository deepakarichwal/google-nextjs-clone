import ImageResult from "./ImageResult";

export default function ImageResultsList({ results }) {
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {results?.items?.map((result) => (
        <ImageResult key={result.link} result={result} />
      ))}
    </div>
  );
}
