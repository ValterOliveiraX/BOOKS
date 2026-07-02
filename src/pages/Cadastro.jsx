import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Cadastro() {
  // 1. Criando os estados para armazenar os dados do formulário
  const [livro, setLivro] = useState({
    titulo: '',
    autor: '',
    isbn: '',
    categoria: '',
    sinopse: ''
  });

  const [listaLivros, setListaLivros] = useState([]); // Estado para armazenar a lista de livros cadastrados

  // 2. Função que atualiza o estado toda vez que o usuário digita algo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLivro((estadoAnterior) => ({
      ...estadoAnterior,
      [name]: value
    }));
  };

  // 3. Função que lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Validação: Se não preencher, para o código aqui!
    if (!livro.titulo || !livro.autor) {
      alert("Por favor, preencha pelo menos o Título e o Autor!");
      return; 
    }

    // 🟢 SUCESSO: O formulário está correto, agora sim salvamos na lista!
    setListaLivros((listaAnterior) => [...listaAnterior, livro]);

    console.log("Dados do livro prontos para salvar:", livro);
    alert(`Livro "${livro.titulo}" cadastrado com sucesso!`);

    // Limpa o formulário após salvar com sucesso
    setLivro({ titulo: '', autor: '', isbn: '', categoria: '', sinopse: '' });
  };

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
          <h3 className="text-lg font-bold text-slate-800 mb-6 border-b pb-3 border-gray-200">📝 Novo Cadastro</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            {/* Campo: Título */}
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-800">Título do Livro *</label>
              <input
                type="text"
                name="titulo"
                value={livro.titulo}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-fuchsia-500 text-gray-700"
                placeholder="Ex: O Senhor dos Anéis"
              />
            </div>

            {/* Campo: Autor */}
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-800">Autor *</label>
              <input
                type="text"
                name="autor"
                value={livro.autor}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-fuchsia-500 text-gray-700"
                placeholder="Ex: J.R.R. Tolkien"
              />
            </div>

            {/* Dois campos na mesma linha (ISBN e Categoria) */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-slate-800">ISBN</label>
                <input
                  type="text"
                  name="isbn"
                  value={livro.isbn}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-fuchsia-500 text-gray-700"
                  placeholder="000-00-0000-000-0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-slate-800">Categoria</label>
                <select
                  name="categoria"
                  value={livro.categoria}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-fuchsia-500 text-gray-700"
                >
                  <option value="">Selecione...</option>
                  <option value="Ficção">Ficção Científica</option>
                  <option value="Fantasia">Fantasia</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Biografia">Biografia</option>
                </select>
              </div>
            </div>

            {/* Campo: Sinopse */}
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-800">Sinopse / Descrição</label>
              <textarea
                name="sinopse"
                value={livro.sinopse}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-fuchsia-500 text-gray-700 resize-none"
                placeholder="Breve resumo sobre a história do livro..."
              />
            </div>

            {/* Botões */}
            <div className="pt-4 flex space-x-3">
              <button
                type="button"
                className="w-1/3 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg font-medium transition"
                onClick={() => setLivro({ titulo: '', autor: '', isbn: '', categoria: '', sinopse: '' })}
              >
                Limpar
              </button>
              <button type="submit" className="w-2/3 px-4 py-2 bg-fuchsia-700 hover:bg-fuchsia-600 text-white rounded-lg font-medium shadow-lg transition">
                Salvar Livro
              </button>
            </div>
          </form>

          {/* Seção da Lista de Livros Atualizada */}
          <div className="border-t pt-6 border-gray-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">📚 Livros Cadastrados ({listaLivros.length})</h3>
            <div className="space-y-3">
              {listaLivros.length === 0 ? (
                <p className="text-gray-400 text-center italic py-4">Nenhum livro cadastrado ainda.</p>
              ) : (
                listaLivros.map((item, index) => (
                  <div key={index} className="bg-slate-50 p-4 rounded-lg border-l-4 border-fuchsia-500 flex justify-between items-center shadow-sm border border-gray-100">
                    <div>
                      <h4 className="font-bold text-slate-900">{item.titulo}</h4>
                      <p className="text-sm text-gray-600">Autor: {item.autor}</p>
                      {item.isbn && <p className="text-xs text-gray-400 mt-1">ISBN: {item.isbn}</p>}
                    </div>
                    <span className="text-xs bg-fuchsia-100 text-fuchsia-800 px-2 py-1 rounded font-medium">
                      {item.categoria || "Geral"}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

        </section>
      </main>

      <footer className="bg-slate-900/90 backdrop-blur-md text-slate-400 text-xs py-6 mt-auto border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>Copyright © 2026 - Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}