import { Link } from 'react-router-dom';
export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed text-gray-800 antialiased" 
         style={{ backgroundImage: "url('/img/seu-fundo.jpg')" }}>
         
      {/* Cabeçalho IFMA */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <img src="/img/Screenshot 2026-03-26 104657.png" alt="logo IFMA" className="w-20 h-auto object-contain" />
        <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          <p className="font-bold text-gray-900">INSTITUTO FEDERAL DE CIÊNCIA E TECNOLOGIA DO MARANHÃO</p>
          <p>PROF. Dr. joão carlos</p>
          <p className="font-semibold text-emerald-700">LABORATÓRIO DE BANCO DE DADOS</p>
          <p>Acadêmico: Valter Oliveira</p>
        </div>
      </div>

      {/* Header & Menu */}
      <header className="bg-slate-900/90 backdrop-blur-md text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-bold tracking-tight">Cadastro de livros (book.net)</h2>
          <nav className="flex flex-col sm:flex-row items-center gap-6">
            <ul className="flex gap-5 text-sm font-medium text-slate-300">
              {/* No React, usamos <Link to="..."> ao invés de <a href="..."> */}
              <li><Link to="/" className="text-white font-bold">Início</Link></li>
              <li><Link to="/cadastro" className="hover:text-white transition-colors">Cadastrar Livros</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal (Cards Métricas) */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Saldo */}
          <div className="bg-emerald-600 rounded-xl shadow-md flex flex-col justify-between overflow-hidden text-white transition-transform hover:scale-[1.02]">
            <div className="p-5 flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">Saldo Atual</p>
                <h2 className="text-2xl font-bold mt-1">697.75</h2>
              </div>
              <div className="p-2 bg-emerald-700/50 rounded-lg backdrop-blur-sm">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 640 640"><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 152C192 165.3 202.7 176 216 176L264 176C277.3 176 288 165.3 288 152C288 138.7 277.3 128 264 128L216 128C202.7 128 192 138.7 192 152zM192 248C192 261.3 202.7 272 216 272L264 272C277.3 272 288 261.3 288 248C288 234.7 277.3 224 264 224L216 224C202.7 224 192 234.7 192 248zM304 324L304 328C275.2 328.3 252 351.7 252 380.5C252 406.2 270.5 428.1 295.9 432.3L337.6 439.3C343.6 440.3 348 445.5 348 451.6C348 458.5 342.4 464.1 335.5 464.1L280 464C269 464 260 473 260 484C260 495 269 504 280 504L304 504L304 508C304 519 313 528 324 528C335 528 344 519 344 508L344 503.3C369 499.2 388 477.6 388 451.5C388 425.8 369.5 403.9 344.1 399.7L302.4 392.7C296.4 391.7 292 386.5 292 380.4C292 373.5 297.6 367.9 304.5 367.9L352 367.9C363 367.9 372 358.9 372 347.9C372 336.9 363 327.9 352 327.9L344 327.9L344 323.9C344 312.9 335 303.9 324 303.9C313 303.9 304 312.9 304 323.9z"/></svg>
              </div>
            </div>
            <div className="bg-emerald-700 px-5 py-2.5 text-xs text-emerald-100 font-medium hover:bg-emerald-800 cursor-pointer transition-colors">
              Mais informações ►
            </div>
          </div>

          {/* Card 2: Contas a pagar */}
          <div className="bg-green-950 rounded-xl shadow-md flex flex-col justify-between overflow-hidden text-amber-200 transition-transform hover:scale-[1.02]">
            <div className="p-5 flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Contas a pagar hoje</p>
                <h2 className="text-2xl font-bold mt-1">1,234</h2>
              </div>
              <div className="p-2 bg-emerald-700/50 rounded-lg backdrop-blur-sm">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 640 640"><path d="M297.4 41.4C309.9 28.9 330.2 28.9 342.7 41.4L470.7 169.4C479.9 178.6 482.6 192.3 477.6 204.3C472.6 216.3 460.9 224 448 224L384 224L384 560C384 586.5 362.5 608 336 608L304 608C277.5 608 256 586.5 256 560L256 224L192 224C179.1 224 167.4 216.2 162.4 204.2C157.4 192.2 160.2 178.5 169.4 169.4L297.4 41.4z"/></svg>
              </div>
            </div>
            <div className="bg-lime-400 px-5 py-2.5 text-xs text-emerald-100 font-medium hover:bg-emerald-800 cursor-pointer transition-colors">
              Mais informações ►
            </div>
          </div>

          {/* Card 3: Contas a receber */}
          <div className="bg-orange-600 rounded-xl shadow-md flex flex-col justify-between overflow-hidden text-white transition-transform hover:scale-[1.02]">
            <div className="p-5 flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Contas receber</p>
                <h2 className="text-2xl font-bold mt-1">1,234</h2>
              </div>
              <div className="p-2 bg-pink-500 rounded-lg backdrop-blur-sm">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 640 640"><path d="M297.4 598.6C309.9 611.1 330.2 611.1 342.7 598.6L470.7 470.6C479.9 461.4 482.6 447.7 477.6 435.7C472.6 423.7 460.9 416 448 416L384 416L384 80C384 53.5 362.5 32 336 32L304 32C277.5 32 256 53.5 256 80L256 416L192 416C179.1 416 167.4 423.8 162.4 435.8C157.4 447.8 160.2 461.5 169.4 470.6L297.4 598.6z"/></svg>
              </div>
            </div>
            <div className="bg-purple-700 px-5 py-2.5 text-xs text-emerald-100 font-medium hover:bg-emerald-800 cursor-pointer transition-colors">
              Mais informações ►
            </div>
          </div>

          {/* Card 4: Agendados para hoje */}
          <div className="bg-red-600 rounded-xl shadow-md flex flex-col justify-between overflow-hidden text-white transition-transform hover:scale-[1.02]">
            <div className="p-5 flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Agendados para hoje</p>
                <h2 className="text-2xl font-bold mt-1">50</h2>
              </div>
              <div className="p-2 bg-blue-700/50 rounded-lg backdrop-blur-sm">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 640 640"><path d="M224 64C206.3 64 192 78.3 192 96L192 128L160 128C124.7 128 96 156.7 96 192L96 240L544 240L544 192C544 156.7 515.3 128 480 128L448 128L448 96C448 78.3 433.7 64 416 64C398.3 64 384 78.3 384 96L384 128L256 128L256 96C256 78.3 241.7 64 224 64zM96 288L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 288L96 288z"/></svg>
              </div>
            </div>
            <div className="bg-blue-700 px-5 py-2.5 text-xs text-emerald-100 font-medium hover:bg-emerald-800 cursor-pointer transition-colors">
              Mais informações ►
            </div>
          </div>

          {/* Card 5: Orcamentos pendentes */}
          <div className="bg-blue-600 rounded-xl shadow-md flex flex-col justify-between overflow-hidden text-white transition-transform hover:scale-[1.02]">
            <div className="p-5 flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Orcamentos pendentes</p>
                <h2 className="text-2xl font-bold mt-1">1,234</h2>
              </div>
              <div className="p-2 bg-blue-700/50 rounded-lg backdrop-blur-sm">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 640 640"><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L192 64zM224 128L416 128C433.7 128 448 142.3 448 160L448 192C448 209.7 433.7 224 416 224L224 224C206.3 224 192 209.7 192 192L192 160C192 142.3 206.3 128 224 128zM240 296C240 309.3 229.3 320 216 320C202.7 320 192 309.3 192 296C192 282.7 202.7 272 216 272C229.3 272 240 282.7 240 296zM320 320C306.7 320 296 309.3 296 296C296 282.7 306.7 272 320 272C333.3 272 344 282.7 344 296C344 309.3 333.3 320 320 320zM448 296C448 309.3 437.3 320 424 320C410.7 320 400 309.3 400 296C400 282.7 410.7 272 424 272C437.3 272 448 282.7 448 296zM216 416C202.7 416 192 405.3 192 392C192 378.7 202.7 368 216 368C229.3 368 240 378.7 240 392C240 405.3 229.3 416 216 416zM344 392C344 405.3 333.3 416 320 416C306.7 416 296 405.3 296 392C296 378.7 306.7 368 320 368C333.3 368 344 378.7 344 392zM424 416C410.7 416 400 405.3 400 392C400 378.7 410.7 368 424 368C437.3 368 448 378.7 448 392C448 405.3 437.3 416 424 416zM192 488C192 474.7 202.7 464 216 464L328 464C341.3 464 352 474.7 352 488C352 501.3 341.3 512 328 512L216 512C202.7 512 192 501.3 192 488zM424 464C437.3 464 448 474.7 448 488C448 501.3 437.3 512 424 512C410.7 512 400 501.3 400 488C400 474.7 410.7 464 424 464z"/></svg>
              </div>
            </div>
            <div className="bg-blue-700 px-5 py-2.5 text-xs text-emerald-100 font-medium hover:bg-emerald-800 cursor-pointer transition-colors">
              Mais informações ►
            </div>
          </div>

          {/* Card 6: Reposição de produtos */}
          <div className="bg-cyan-600 rounded-xl shadow-md flex flex-col justify-between overflow-hidden text-white transition-transform hover:scale-[1.02]">
            <div className="p-5 flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Reposição de produtos</p>
                <h2 className="text-2xl font-bold mt-1">1,234</h2>
              </div>
              <div className="p-2 bg-blue-700/50 rounded-lg backdrop-blur-sm">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 640 640"><path d="M320 64C326.6 64 332.9 66.7 337.4 71.5L481.4 223.5L481.9 224L560 224C577.7 224 592 238.3 592 256C592 270.5 582.4 282.7 569.2 286.7L523.1 493.9C516.6 523.2 490.6 544 460.6 544L179.3 544C149.3 544 123.3 523.2 116.8 493.9L70.8 286.7C57.6 282.8 48 270.5 48 256C48 238.3 62.3 224 80 224L158.1 224L158.6 223.5L302.6 71.5C307.1 66.7 313.4 64 320 64zM320 122.9L224.2 224L415.8 224L320 122.9zM240 328C240 314.7 229.3 304 216 304C202.7 304 192 314.7 192 328L192 440C192 453.3 202.7 464 216 464C229.3 464 240 453.3 240 440L240 328zM320 304C306.7 304 296 314.7 296 328L296 440C296 453.3 306.7 464 320 464C333.3 464 344 453.3 344 440L344 328C344 314.7 333.3 304 320 304zM448 328C448 314.7 437.3 304 424 304C410.7 304 400 314.7 400 328L400 440C400 453.3 410.7 464 424 464C437.3 464 448 453.3 448 440L448 328z"/></svg>
              </div>
            </div>
            <div className="bg-blue-700 px-5 py-2.5 text-xs text-emerald-100 font-medium hover:bg-emerald-800 cursor-pointer transition-colors">
              Mais informações ►
            </div>
          </div>

          {/* Card 7: Manutençaõ de clientes */}
          <div className="bg-lime-400 rounded-xl shadow-md flex flex-col justify-between overflow-hidden text-white transition-transform hover:scale-[1.02]">
            <div className="p-5 flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Manutençaõ de clientes</p>
                <h2 className="text-2xl font-bold mt-1">1,234</h2>
              </div>
              <div className="p-2 bg-blue-700/50 rounded-lg backdrop-blur-sm">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 640 640"><path d="M500.7 138.7L512 149.4L512 96C512 78.3 526.3 64 544 64C561.7 64 576 78.3 576 96L576 224C576 241.7 561.7 256 544 256L416 256C398.3 256 384 241.7 384 224C384 206.3 398.3 192 416 192L463.9 192L456.3 184.8C456.1 184.6 455.9 184.4 455.7 184.2C380.7 109.2 259.2 109.2 184.2 184.2C109.2 259.2 109.2 380.7 184.2 455.7C259.2 530.7 380.7 530.7 455.7 455.7C463.9 447.5 471.2 438.8 477.6 429.6C487.7 415.1 507.7 411.6 522.2 421.7C536.7 431.8 540.2 451.8 530.1 466.3C521.6 478.5 511.9 490.1 501 501C401 601 238.9 601 139 501C39.1 401 39 239 139 139C238.9 39.1 400.7 39 500.7 138.7z"/></svg>
              </div>
            </div>
            <div className="bg-blue-700 px-5 py-2.5 text-xs text-emerald-100 font-medium hover:bg-emerald-800 cursor-pointer transition-colors">
              Mais informações ►
            </div>
          </div>

          {/* Card 8: Inadiplências*/}
          <div className="bg-blue-600 rounded-xl shadow-md flex flex-col justify-between overflow-hidden text-white transition-transform hover:scale-[1.02]">
            <div className="p-5 flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Inadiplências</p>
                <h2 className="text-2xl font-bold mt-1">1,234</h2>
              </div>
              <div className="p-2 bg-blue-700/50 rounded-lg backdrop-blur-sm">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 640 640"><path d="M448 96C474.5 96 496 117.5 496 144C496 150.3 494.7 156.2 492.6 161.7C513 167.2 528 185.8 528 208C528 217.1 525.4 225.6 521 232.9C543.2 237.1 560 256.6 560 280C560 299.7 548.1 316.6 531.1 324C548.1 331.4 560 348.3 560 368C560 394.5 538.5 416 512 416L352 416L380.2 486.4C382.7 492.7 384 499.5 384 506.3L384 510.5C384 537.8 361.9 559.9 334.6 559.9C315.9 559.9 298.8 549.3 290.4 532.6L234.1 420.3C227.4 407 224 392.3 224 377.4L224 190.8C224 171.4 232.9 153 248 140.8L260.2 131.1C288.6 108.4 323.8 96 360.1 96L448 96zM144 160C161.7 160 176 174.3 176 192L176 448C176 465.7 161.7 480 144 480L96 480C78.3 480 64 465.7 64 448L64 192C64 174.3 78.3 160 96 160L144 160z"/></svg>
              </div>
            </div>
            <div className="bg-blue-700 px-5 py-2.5 text-xs text-emerald-100 font-medium hover:bg-emerald-800 cursor-pointer transition-colors">
              Mais informações ►
            </div>
          </div>


         {/* ... ABAIXO DO DASHBOARD ... */}
        </section>
                <section class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Acesso Rápido</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                
                <div class="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-100 cursor-pointer group transition-all">
                    <svg class="w-8 h-8 fill-slate-600 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="50 50 800 800"><path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>
                    <p class="text-xs font-semibold text-slate-700 mt-2">Clientes</p>
                </div>

                <div class="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-100 cursor-pointer group transition-all">
                    <svg class="w-8 h-8 fill-slate-600 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="50 50 800 800"><path d="M224 64C206.3 64 192 78.3 192 96L192 128L160 128C124.7 128 96 156.7 96 192L96 240L544 240L544 192C544 156.7 515.3 128 480 128L448 128L448 96C448 78.3 433.7 64 416 64C398.3 64 384 78.3 384 96L384 128L256 128L256 96C256 78.3 241.7 64 224 64zM96 288L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 288L96 288z"/></svg>
                    <p class="text-xs font-semibold text-slate-700 mt-2">Agenda</p>
                </div>

                <div class="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-100 cursor-pointer group transition-all">
                    <svg class="w-8 h-8 fill-slate-600 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="50 50 800 800"><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L192 64zM224 128L416 128C433.7 128 448 142.3 448 160L448 192C448 209.7 433.7 224 416 224L224 224C206.3 224 192 209.7 192 192L192 160C192 142.3 206.3 128 224 128zM240 296C240 309.3 229.3 320 216 320C202.7 320 192 309.3 192 296C192 282.7 202.7 272 216 272C229.3 272 240 282.7 240 296zM320 320C306.7 320 296 309.3 296 296C296 282.7 306.7 272 320 272C333.3 272 344 282.7 344 296C344 309.3 333.3 320 320 320zM448 296C448 309.3 437.3 320 424 320C410.7 320 400 309.3 400 296C400 282.7 410.7 272 424 272C437.3 272 448 282.7 448 296zM216 416C202.7 416 192 405.3 192 392C192 378.7 202.7 368 216 368C229.3 368 240 378.7 240 392C240 405.3 229.3 416 216 416zM344 392C344 405.3 333.3 416 320 416C306.7 416 296 405.3 296 392C296 378.7 306.7 368 320 368C333.3 368 344 378.7 344 392zM424 416C410.7 416 400 405.3 400 392C400 378.7 410.7 368 424 368C437.3 368 448 378.7 448 392C448 405.3 437.3 416 424 416zM192 488C192 474.7 202.7 464 216 464L328 464C341.3 464 352 474.7 352 488C352 501.3 341.3 512 328 512L216 512C202.7 512 192 501.3 192 488zM424 464C437.3 464 448 474.7 448 488C448 501.3 437.3 512 424 512C410.7 512 400 501.3 400 488C400 474.7 410.7 464 424 464z"/></svg>
                    <p class="text-xs font-semibold text-slate-700 mt-2">Orçamento</p>
                </div>

                <div class="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-100 cursor-pointer group transition-all">
                    <svg class="w-8 h-8 fill-slate-600 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="50 50 800 800"><path d="M433.2 103.1L581.4 253.4C609.1 281.5 609.1 326.5 581.4 354.6L425 512.9C415.7 522.3 400.5 522.4 391.1 513.1C381.7 503.8 381.6 488.6 390.9 479.2L547.3 320.8C556.5 311.5 556.5 296.4 547.3 287.1L399 136.9C389.7 127.5 389.8 112.3 399.2 103C408.6 93.7 423.8 93.8 433.1 103.2zM64.1 293.5L64.1 160C64.1 124.7 92.8 96 128.1 96L261.6 96C278.6 96 294.9 102.7 306.9 114.7L450.9 258.7C475.9 283.7 475.9 324.2 450.9 349.2L317.4 482.7C292.4 507.7 251.9 507.7 226.9 482.7L82.9 338.7C70.9 326.7 64.2 310.4 64.2 293.4zM208.1 208C208.1 190.3 193.8 176 176.1 176C158.4 176 144.1 190.3 144.1 208C144.1 225.7 158.4 240 176.1 240C193.8 240 208.1 225.7 208.1 208z"/></svg>
                    <p class="text-xs font-semibold text-slate-700 mt-2">Vendas</p>
                </div>

                <div class="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-100 cursor-pointer group transition-all">
                    <svg class="w-8 h-8 fill-slate-600 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="50 50 800 800"><path d="M160 64C124.7 64 96 92.7 96 128C96 163.3 124.7 192 160 192L208 192L208 224L151 224C119.4 224 92.5 247.1 87.7 278.4L65.1 428.1C64.4 432.8 64 437.6 64 442.4L64 512C64 547.3 92.7 576 128 576L512 576C547.3 576 576 547.3 576 512L576 442.4C576 437.6 575.6 432.8 574.9 428L552.2 278.4C547.5 247.1 520.6 224 489 224L272 224L272 192L320 192C355.3 192 384 163.3 384 128C384 92.7 355.3 64 320 64L160 64zM160 112L320 112C328.8 112 336 119.2 336 128C336 136.8 328.8 144 320 144L160 144C151.2 144 144 136.8 144 128C144 119.2 151.2 112 160 112zM128 488C128 474.7 138.7 464 152 464L488 464C501.3 464 512 474.7 512 488C512 501.3 501.3 512 488 512L152 512C138.7 512 128 501.3 128 488zM176 328C162.7 328 152 317.3 152 304C152 290.7 162.7 280 176 280C189.3 280 200 290.7 200 304C200 317.3 189.3 328 176 328zM296 304C296 317.3 285.3 328 272 328C258.7 328 248 317.3 248 304C248 290.7 258.7 280 272 280C285.3 280 296 290.7 296 304zM224 408C210.7 408 200 397.3 200 384C200 370.7 210.7 360 224 360C237.3 360 248 370.7 248 384C248 397.3 237.3 408 224 408zM392 304C392 317.3 381.3 328 368 328C354.7 328 344 317.3 344 304C344 290.7 354.7 280 368 280C381.3 280 392 290.7 392 304zM320 408C306.7 408 296 397.3 296 384C296 370.7 306.7 360 320 360C333.3 360 344 370.7 344 384C344 397.3 333.3 408 320 408zM488 304C488 317.3 477.3 328 464 328C450.7 328 440 317.3 440 304C440 290.7 450.7 280 464 280C477.3 280 488 290.7 488 304zM416 408C402.7 408 392 397.3 392 384C392 370.7 402.7 360 416 360C429.3 360 440 370.7 440 384C440 397.3 429.3 408 416 408z"/></svg>
                    <p class="text-xs font-semibold text-slate-700 mt-2">Caixa</p>
                </div>

                <div class="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-100 cursor-pointer group transition-all">
                    <svg class="w-8 h-8 fill-slate-600 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="50 50 800 800"><path d="M128 96C110.3 96 96 110.3 96 128L96 512C96 529.7 110.3 544 128 544C145.7 544 160 529.7 160 512L160 128C160 110.3 145.7 96 128 96zM216 96C202.7 96 192 106.7 192 120L192 520C192 533.3 202.7 544 216 544C229.3 544 240 533.3 240 520L240 120C240 106.7 229.3 96 216 96zM288 128L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128zM496 120L496 520C496 533.3 506.7 544 520 544C533.3 544 544 533.3 544 520L544 120C544 106.7 533.3 96 520 96C506.7 96 496 106.7 496 120zM400 120L400 520C400 533.3 410.7 544 424 544C437.3 544 448 533.3 448 520L448 120C448 106.7 437.3 96 424 96C410.7 96 400 106.7 400 120z"/></svg>
                    <p class="text-xs font-semibold text-slate-700 mt-2">Produtos</p>
                </div>

            </div>
        </section>


      </main>

      {/* Rodapé */}
      <footer className="bg-slate-900/90 backdrop-blur-md text-slate-400 text-xs py-6 mt-auto border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>Copyright © 2026 - Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}