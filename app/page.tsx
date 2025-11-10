'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MessageCircle, ArrowRight, Lock, Sparkles, TrendingUp, Calendar, Clock, Video } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Enviar para API
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          nome,
          timestamp: new Date().toISOString(),
          origem: 'Sala Secreta - Landing Page'
        })
      })

      // Redirecionar para WhatsApp
      const message = encodeURIComponent(
        `Olá Nathalia! Me inscrevi na Sala Secreta.\n\nNome: ${nome}\nEmail: ${email}`
      )
      window.location.href = `https://wa.me/32471990930?text=${message}`
    } catch (error) {
      console.error('Erro:', error)
    }
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section - Foto à Esquerda, Conteúdo à Direita */}
      <section className="min-h-screen flex items-center py-8 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[1.3fr,0.9fr] gap-3 lg:gap-4 items-center max-w-[1600px] mx-auto">
            
            {/* FOTO À ESQUERDA - EFEITO 3D COM FUNDO REMOVIDO */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full aspect-[3/4] max-w-2xl mx-auto lg:max-w-none lg:ml-auto" style={{ maxHeight: '92vh' }}>
                {/* Foto PNG sem fundo com efeito 3D */}
                <Image
                  src="/images/nathalia-profile.png"
                  alt="Nathalia Abrell"
                  fill
                  className="object-contain"
                  style={{
                    filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.9)) drop-shadow(0 10px 30px rgba(0,0,0,0.7))',
                  }}
                  priority
                />
              </div>
            </div>

            {/* CONTEÚDO À DIREITA */}
            <div className="order-1 lg:order-2 lg:pl-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-3">
                <Lock className="w-3.5 h-3.5" />
                Acesso Exclusivo
              </div>

              {/* Título Principal */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-white">
                <span className="text-primary-400">Sala Secreta:</span><br />
                Remodele Seu Modelo de Dinheiro
              </h1>

              {/* Data e Horários - HORIZONTAL COMPACTO (estilo da imagem) */}
              <div className="mb-3 bg-white/5 border-2 border-white/10 rounded-xl p-3 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  {/* Data */}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary-400" />
                    <span className="text-white font-bold text-base">20/11</span>
                  </div>
                  
                  {/* Separador */}
                  <div className="w-px h-6 bg-white/20"></div>
                  
                  {/* Hora */}
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary-400" />
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-sm">19:00 🇧🇪</span>
                      <span className="text-gray-400 text-xs">15:00 🇧🇷</span>
                    </div>
                  </div>
                  
                  {/* Separador */}
                  <div className="w-px h-6 bg-white/20"></div>
                  
                  {/* Plataforma */}
                  <div className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-primary-400" />
                    <span className="text-white font-bold text-sm">Google Meet</span>
                  </div>
                </div>
              </div>

              {/* Alerta de Urgência - Vagas Limitadas */}
              <a 
                href="#inscricao" 
                className="block mb-3 bg-yellow-500/20 border-2 border-yellow-500/50 rounded-lg p-3 animate-pulse hover:bg-yellow-500/30 transition cursor-pointer"
              >
                <p className="text-yellow-300 font-bold text-center text-xs md:text-sm mb-1">
                  ⚠️ Aula Exclusiva Gratuita
                </p>
                <p className="text-yellow-200 text-center text-xs">
                  Somente para as 30 Primeiras Inscrições!
                </p>
                <div className="flex justify-center mt-1">
                  <p className="text-yellow-400 text-xs font-semibold animate-bounce">
                    👇 Clique aqui para se inscrever
                  </p>
                </div>
              </a>

              {/* Subtítulo */}
              <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
                E aprenda a <strong className="text-white">vender com leveza</strong>, gerar resultados com <strong className="text-white">previsibilidade</strong> e realizar seus sonhos.
              </p>

              {/* Benefícios */}
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-300">Transforme sua <strong className="text-white">relação com dinheiro</strong> e vendas</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-300">Venda mais com <strong className="text-white">leveza e autenticidade</strong></p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-300">Crie <strong className="text-white">previsibilidade</strong> no seu faturamento</p>
                </div>
              </div>

              {/* Formulário de Captura */}
              <div id="inscricao" className="bg-white rounded-2xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Se Inscreva Gratuitamente Aqui</h3>
                <p className="text-gray-600 mb-4 text-sm">Garanta sua vaga na Sala Secreta e transforme sua relação com vendas</p>
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-gray-700">
                      Seu nome completo
                    </label>
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Maria Silva"
                      required
                      className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-gray-700">
                      Seu melhor e-mail
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      required
                      className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-primary-700 transition flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl animate-pulse hover:animate-none"
                  >
                    Garantir Minha Vaga Gratuita
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-3">
                  🔒 Seus dados estão seguros e protegidos
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="py-8 px-4 bg-black text-center border-t border-gray-900">
        <p className="text-gray-400 mb-2">&copy; {new Date().getFullYear()} Nathalia Abrell - Mentora de Negócios</p>
        <p className="text-sm text-gray-500">Todos os direitos reservados</p>
      </footer>
    </main>
  )
}
