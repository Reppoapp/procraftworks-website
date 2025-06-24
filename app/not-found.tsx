import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <div className="text-9xl font-bold text-red-600 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold uppercase tracking-wide transition-colors duration-200"
          >
            Go Home
          </Link>
          <div className="block">
            <Link
              href="/contact"
              className="text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              Or contact us for help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 