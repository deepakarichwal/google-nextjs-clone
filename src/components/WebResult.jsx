import Link from "next/link";
import parse from "html-react-parser";

export default function WebResult({ result }) {
  return (
    <div className="space-y w-full max-w-2xl break-words">
      <div className="group">
        <Link href={result.link} className="text-[14px] text-green-700">
          {result.formattedUrl}
        </Link>
        <Link href={result.link}>
          <h3 className="group-hover:underline text-xl font-medium text-blue-700 truncate">
            {result.title}
          </h3>
        </Link>
      </div>

      <p className="text-md text-gray-600">{parse(`${result.htmlSnippet}`)}</p>
    </div>
  );
}
