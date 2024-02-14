import Image from "next/image";
import Link from "next/link";

export default function ImageResult({ result }) {
  return (
    <div className="group ">
      <Link href={result.image.contextLink}>
        <img
          src={result.link}
          alt={result.title}
          className="h-60 w-full object-contain group-hover:shadow-lg transition-shadow duration-300 p-4 rounded-xl"
        />
      </Link>
      <Link
        href={result.image.contextLink}
        className="group-hover:underline text-sm"
      >
        {result.displayLink}
      </Link>
      <Link href={result.image.contextLink}>
        <p className="truncate text-[15px]">{result.title}</p>
      </Link>
    </div>
  );
}
