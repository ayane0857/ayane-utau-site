import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="flex flex-col items-center justify-center h-128">
        <h2 className="text-2xl font-bold mb-2 text-gray-800" lang="en-bold">
          Not Found
        </h2>
        <p className="mb-6 text-gray-500" lang="en">
          Could not find requested resource
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
          lang="en"
        >
          Return Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
