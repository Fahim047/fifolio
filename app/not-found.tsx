import Link from "next/link";

export const metadata = {
  title: "404 • Page Not Found | Fahimul Islam",
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md space-y-6">
        {/* Big error code */}
        <h1 className="text-7xl font-extrabold tracking-tight text-muted-foreground">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold">Page not found</h2>

        {/* Description */}
        <p className="text-muted-foreground">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md
                       bg-primary px-4 py-2 text-sm font-medium text-primary-foreground
                       transition hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
