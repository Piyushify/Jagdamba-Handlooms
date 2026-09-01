export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div>
            <h2 className="font-bold">Jagdamba Handlooms</h2>
            <p className="mt-2 text-sm text-zinc-500">
              Tradition from the abode of clouds.
            </p>
          </div>

          <p className="text-sm text-zinc-500">
            © 2026 Jagdamba Handlooms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}