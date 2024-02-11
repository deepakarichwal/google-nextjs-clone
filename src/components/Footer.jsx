import Link from "next/link";
import CountryLookup from "./CountryLookup";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm mt-auto w-full">
      <div className="py-3 px-8">
        <CountryLookup />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 items-center sm:justify-between py-3 px-8 border-t border-gray-300">
        <div className="space-x-6">
          <Link href={""} className="hover:underline">
            About
          </Link>
          <Link href={""} className="hover:underline">
            Advertising
          </Link>
          <Link href={""} className="hover:underline">
            Business
          </Link>
          <Link href={""} className="hover:underline">
            How Search works
          </Link>
        </div>

        <div className="space-x-6">
          <Link href={""} className="hover:underline">
            Privacy
          </Link>
          <Link href={""} className="hover:underline">
            Terms
          </Link>
          <Link href={""} className="hover:underline">
            Settings
          </Link>
        </div>
      </div>
    </footer>
  );
}
