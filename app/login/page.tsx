export default function LoginPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="text-center text-4xl font-bold">Welcome back</h1>

        <p className="mt-3 text-center text-zinc-500">
          Sign in to your account
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-black"
            required
          />

          <button
            type="submit"
            className="w-full rounded-full bg-black py-3 font-medium text-white"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}