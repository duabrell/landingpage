'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'

interface FormData {
  email: string
  telefone: string
  nome: string
  negocio: string
  faturamento: string
  desafio: string
  objetivo: string
}

export default function CapturaPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    email: '',
    telefone: '',
    nome: '',
    negocio: '',
    faturamento: '',
    desafio: '',
    objetivo: ''
  })
  const [loading, setLoading] = useState(false)

  const totalSteps = 7

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const validateStep = () => {
    switch (step) {
      case 1:
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(formData.email)
      case 2:
        return formData.telefone.length >= 10
      case 3:
        return formData.nome.trim().length >= 3
      case 4:
        return formData.negocio.trim().length >= 3
      case 5:
        return formData.faturamento !== ''
      case 6:
        return formData.desafio.trim().length >= 10
      case 7:
        return formData.objetivo.trim().length >= 10
      default:
        return false
    }
  }

  const handleNext = async () => {
    if (!validateStep()) return

    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      await submitToGoogleSheets()
    }
  }

  const submitToGoogleSheets = async () => {
    setLoading(true)
    try {
      // Enviar para Google Sheets
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          origem: 'Landing Page Nathalia Abrell'
        })
      })

      // Redirecionar para WhatsApp
      const message = encodeURIComponent(
        `Olá Nathalia! Acabei de preencher o formulário.\n\nNome: ${formData.nome}\nEmail: ${formData.email}`
      )
      window.location.href = `https://wa.me/32471990930?text=${message}`
    } catch (error) {
      console.error('Erro ao enviar:', error)
      alert('Erro ao enviar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Transforme Suas Vendas em <span className="text-gradient">30 Dias</span>
              </h1>
              <p className="text-xl text-gray-600">
                Descubra as estratégias que já ajudaram mais de 500 empreendedores
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Qual é o seu melhor e-mail?</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:outline-none text-lg"
                autoFocus
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfeito! 🎉</h2>
              <p className="text-xl text-gray-600">
                Agora preciso do seu telefone para enviar conteúdo exclusivo
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Qual é o seu WhatsApp?</label>
              <input
                type="tel"
                value={formData.telefone}
                onChange={(e) => handleInputChange('telefone', e.target.value)}
                placeholder="+32 471 99 09 30"
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:outline-none text-lg"
                autoFocus
              />
              <p className="text-sm text-gray-500 mt-2">Inclua o código do país e DDD</p>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como posso te chamar?</h2>
              <p className="text-xl text-gray-600">
                Vou personalizar todo o conteúdo para você
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Seu nome completo</label>
              <input
                type="text"
                value={formData.nome}
                onChange={(e) => handleInputChange('nome', e.target.value)}
                placeholder="Maria Silva"
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:outline-none text-lg"
                autoFocus
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Qual é o seu negócio, {formData.nome.split(' ')[0]}?
              </h2>
              <p className="text-xl text-gray-600">
                Quero entender melhor sua área de atuação
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Descreva seu negócio</label>
              <input
                type="text"
                value={formData.negocio}
                onChange={(e) => handleInputChange('negocio', e.target.value)}
                placeholder="Ex: Consultoria de marketing digital"
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:outline-none text-lg"
                autoFocus
              />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Qual o faturamento mensal?</h2>
              <p className="text-xl text-gray-600">
                Isso me ajuda a criar a estratégia ideal para você
              </p>
            </div>
            <div className="space-y-3">
              {[
                { value: 'ate-5k', label: 'Até R$ 5.000' },
                { value: '5k-20k', label: 'R$ 5.000 - R$ 20.000' },
                { value: '20k-50k', label: 'R$ 20.000 - R$ 50.000' },
                { value: '50k-100k', label: 'R$ 50.000 - R$ 100.000' },
                { value: 'acima-100k', label: 'Acima de R$ 100.000' },
                { value: 'ainda-nao', label: 'Ainda não faturei' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleInputChange('faturamento', option.value)}
                  className={`w-full px-6 py-4 border-2 rounded-xl text-left font-semibold transition ${
                    formData.faturamento === option.value
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-300 hover:border-primary-300'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Qual é o seu maior desafio hoje?
              </h2>
              <p className="text-xl text-gray-600">
                Vou focar exatamente no que você precisa
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Descreva seu principal desafio</label>
              <textarea
                value={formData.desafio}
                onChange={(e) => handleInputChange('desafio', e.target.value)}
                placeholder="Ex: Tenho dificuldade em converter leads em clientes..."
                rows={5}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:outline-none text-lg resize-none"
                autoFocus
              />
              <p className="text-sm text-gray-500 mt-2">Mínimo 10 caracteres</p>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Última pergunta!</h2>
              <p className="text-xl text-gray-600">
                Onde você quer estar daqui a 6 meses?
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Seu objetivo principal</label>
              <textarea
                value={formData.objetivo}
                onChange={(e) => handleInputChange('objetivo', e.target.value)}
                placeholder="Ex: Quero faturar R$ 50.000 por mês e ter uma equipe..."
                rows={5}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:outline-none text-lg resize-none"
                autoFocus
              />
              <p className="text-sm text-gray-500 mt-2">Seja específico, isso é importante!</p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500">
              <Image
                src="/images/nathalia-profile.jpg"
                alt="Nathalia Abrell"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">Nathalia Abrell</h3>
              <p className="text-sm text-gray-600">Mentora de Negócios</p>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-4 mb-8">
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">
              Etapa {step} de {totalSteps}
            </span>
            <span className="text-sm font-semibold text-primary-600">
              {Math.round((step / totalSteps) * 100)}%
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 pb-20">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            {renderStep()}

            {/* Navigation Button */}
            <div className="mt-8">
              <button
                onClick={handleNext}
                disabled={!validateStep() || loading}
                className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition flex items-center justify-center gap-2 ${
                  validateStep() && !loading
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {loading ? (
                  'Enviando...'
                ) : step === totalSteps ? (
                  'Finalizar e Falar com Nathalia'
                ) : (
                  <>
                    Continuar
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            {/* Back Button */}
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="w-full mt-4 py-3 text-gray-600 hover:text-gray-800 font-semibold"
              >
                ← Voltar
              </button>
            )}
          </div>

          {/* Trust Elements */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              🔒 Seus dados estão seguros e protegidos
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Mais de 500 empreendedores já confiaram na Nathalia
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
