export function FooterSection() {
  return (
    <footer className="px-6 py-5 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto flex items-center justify-center">
        <p className="text-xs text-zinc-600 text-center">
          © {new Date().getFullYear()} Военная полиция фракции «Воинская часть» | Официальный портал для личного состава | Версия 1.11
        </p>
      </div>
    </footer>
  )
}
