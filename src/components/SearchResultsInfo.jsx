export default function SearchResultsInfo({ searchInfo }) {
  return (
    <p className="text-gray-600">
      About {searchInfo?.formattedTotalResults} results (
      {searchInfo?.formattedSearchTime} seconds)
    </p>
  );
}
