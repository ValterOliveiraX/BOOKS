import { Link } from 'react-router-dom';

export default function Cadastro() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed text-gray-800 antialiased" 
         style={{ backgroundImage: "url('/img/seu-fundo.jpg')" }}>
      
      {/* Cabeçalho IFMA */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <img src="/img/Screenshot 2026-03-26 104657.png" alt="logo IFMA" className="w-20 h-auto object-contain" />
        <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          <p className="font-bold text-gray-900">INSTITUTO FEDERAL DE CIÊNCIA E TECNOLOGIA DO MARANHÃO</p>
          <p>PROF. DR. JOÃO CARLOS</p>
          <p className="font-semibold text-emerald-700">DESENVOLVIMENTO WEB I</p>
          <p>Acadêmico: Valter Oliveira</p>
        </div>
      </div>

      {/* Header & Menu */}
      <header className="bg-slate-900/90 backdrop-blur-md text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-bold tracking-tight">Cadastro & busca de livros (book.net)</h2>
          <nav className="flex flex-col sm:flex-row items-center gap-6">
            <ul className="flex gap-5 text-sm font-medium text-slate-300">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/cadastro" className="text-white font-bold">Cadastrar Livros</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo Form e Tabela */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-8">
        <section className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 class="text-lg font-bold text-gray-800 mb-6 border-b pb-3 border-gray-200">📝 Novo Cadastro</h3>
          <form className="space-y-6">
            {/* ... Seus inputs aqui adaptados para JSX ... */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="titulo" className="text-xs font-semibold text-gray-600">Título do Livro</label>
              <input type="text" id="titulo" placeholder="Ex: O Senhor dos Anéis" required className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" />
            </div>
            <button type="submit" className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg shadow-sm transition-colors uppercase tracking-wider">SALVAR</button>
          </form>
        </section>
      </main>
    </div>
  );
}