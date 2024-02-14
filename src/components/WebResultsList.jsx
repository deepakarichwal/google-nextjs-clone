import SearchResultsInfo from "./SearchResultsInfo";
import WebResult from "./WebResult";

export default function WebResults({ results }) {
  const searchInfo = results?.searchInformation;
  return (
    <div className="space-y-6 px-4 sm:px-0 pb-10 pt-3 w-full max-w-5xl m-auto">
      <SearchResultsInfo searchInfo={searchInfo} />
      {results?.items?.map((result) => (
        <WebResult key={result.title} result={result} />
      ))}
    </div>
  );
}
