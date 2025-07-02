import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h2 className="text-2xl font-bold mb-2 text-gray-800" lang="en-bold">Not Found</h2>
      <p className="mb-6 text-gray-500" lang="en">Could not find requested resource</p>
      <Link href="/" className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition" lang="en">Return Home</Link>
    </div>
  )
}