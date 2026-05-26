export function Footer() {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Production Launch Service. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
