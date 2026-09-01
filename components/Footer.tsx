export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div>
            <h2 className="font-bold">MINIMA</h2>
            <p className="mt-2 text-sm text-zinc-500">
              Simple products for modern life.
            </p>
          </div>

          <p className="text-sm text-zinc-500">
            © 2026 MINIMA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}