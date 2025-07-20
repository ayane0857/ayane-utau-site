import Link from "next/link";

export function Footer() {
  const version = process.env.npm_package_version;
  return (
    <footer className="text-center py-6 md:py-12 px-6 md:px-12">
      <nav>
        <ul className="flex justify-center space-x-6 text-lg md:text-xl">
          <li className="mb-4">
            <Link href={"/license"}>LICENSE & CREDIT</Link>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} 彩音. All rights reserved. v{version}
        </p>
      </div>
    </footer>
  );
}
