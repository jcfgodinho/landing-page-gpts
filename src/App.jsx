import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Star, Clock, Users, Zap, Target, TrendingUp, Shield, ArrowRight, Play, Search, FileText } from 'lucide-react'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 01,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const gpts = [
    {
      name: "AIDA GPT",
      description: "Cria anúncios irresistíveis usando a fórmula AIDA que captura atenção e gera desejo instantâneo",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Headlines que param o scroll", "Copy que converte", "CTAs irresistíveis"]
    },
    {
      name: "StoryBrand GPT", 
      description: "Transforma sua mensagem em narrativas envolventes que conectam emocionalmente com seu público",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Narrativas persuasivas", "Posicionamento claro", "Conexão emocional"]
    },
    {
      name: "Hooks Psicológicos GPT",
      description: "Especialista em psicologia aplicada que cria ganchos que prendem atenção instantaneamente",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Ganchos irresistíveis", "Curiosidade instantânea", "Parar o scroll"]
    },
    {
      name: "Copy Eugene Schwartz GPT",
      description: "Mestre em persuasão baseado nos 5 Níveis de Consciência para copy que realmente vende",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Copy científica", "Persuasão avançada", "Vendas garantidas"]
    },
    {
      name: "P.A.S. GPT",
      description: "Estrutura mensagens com a poderosa fórmula Problema-Agitação-Solução para copy que converte",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["Identificação de problemas", "Agitação emocional", "Soluções persuasivas"]
    },
    {
      name: "Criador de Pesquisas GPT",
      description: "Desvenda dores e desejos ocultos do seu público com pesquisas estratégicas profissionais",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Insights profundos", "Pesquisas estratégicas", "Conhecer o cliente"]
    },
    {
      name: "Análise Competitiva GPT",
      description: "Visão clara do mercado revelando oportunidades e diferenciais competitivos únicos",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Análise de mercado", "Oportunidades", "Vantagem competitiva"]
    },
    {
      name: "Análise de Insights Ocultos GPT",
      description: "Identifica padrões e tendências não óbvias nos dados de mercado que seus concorrentes não veem",
      icon: <Search className="w-6 h-6" />,
      benefits: ["Tendências ocultas", "Oportunidades invisíveis", "Vantagem estratégica"]
    },
    {
      name: "Estrategista de Conteúdo GPT",
      description: "Planeja posts, reels e stories para Instagram que engajam, convertem e fazem crescer",
      icon: <Star className="w-6 h-6" />,
      benefits: ["Conteúdo viral", "Engajamento alto", "Crescimento orgânico"]
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empreendedora Digital",
      content: "Meu faturamento triplicou em 3 meses usando estes GPTs. A qualidade do conteúdo é impressionante!",
      rating: 5
    },
    {
      name: "Carlos Santos", 
      role: "Agência de Marketing",
      content: "Economizo 15 horas por semana na criação de campanhas. Meus clientes estão vendo resultados incríveis.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Copywriter Freelancer", 
      content: "Consegui aumentar meus preços em 200% com a qualidade que estes GPTs me proporcionam.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold">
              🚀 REVOLUÇÃO DA IA NO MARKETING
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Destrave Suas <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Vendas</span> e Conteúdo com o Poder da IA
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              O Pack Essencial de GPTs para Marketing e Vendas que está transformando negócios em todo o Brasil. 
              <strong className="text-white"> 9 especialistas em IA trabalhando 24/7 para você!</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                ASSISTIR VSL COMPLETA
              </Button>
              
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full">
                QUERO MEU PACK AGORA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Urgency Timer */}
            <div className="bg-red-600/90 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <p className="text-white font-semibold mb-3">⚡ OFERTA EXPIRA EM:</p>
              <div className="flex justify-center gap-4 text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-sm">HORAS</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-sm">MIN</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-sm">SEG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Você Está <span className="text-red-400">Perdendo Vendas</span> Todos os Dias...
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-slate-700/50 p-6 rounded-2xl border border-red-500/30">
                <div className="text-red-400 text-4xl mb-4">😰</div>
                <h3 className="text-xl font-semibold text-white mb-3">Bloqueio Criativo</h3>
                <p className="text-gray-300">Horas perdidas olhando para a tela em branco, sem saber como criar conteúdo que converte</p>
              </div>
              
              <div className="bg-slate-700/50 p-6 rounded-2xl border border-red-500/30">
                <div className="text-red-400 text-4xl mb-4">📉</div>
                <h3 className="text-xl font-semibold text-white mb-3">Campanhas Fracas</h3>
                <p className="text-gray-300">Investindo em anúncios que não geram resultados porque a mensagem não conecta</p>
              </div>
              
              <div className="bg-slate-700/50 p-6 rounded-2xl border border-red-500/30">
                <div className="text-red-400 text-4xl mb-4">❓</div>
                <h3 className="text-xl font-semibold text-white mb-3">Não Conhece o Cliente</h3>
                <p className="text-gray-300">Atirando no escuro sem entender as verdadeiras dores e desejos do seu público</p>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              <strong className="text-white">A verdade é dura:</strong> Enquanto você luta com essas dificuldades, seus concorrentes estão dominando o mercado com estratégias de IA que você nem imagina que existem. <strong className="text-red-400">Cada dia que passa é dinheiro deixado na mesa.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              A Solução Que Vai <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Transformar</span> Seu Negócio
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Imagine ter um time de <strong className="text-white">9 especialistas em marketing</strong> trabalhando para você 24 horas por dia, 7 dias por semana, por uma fração do custo de contratar um único profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {gpts.map((gpt, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white">
                      {gpt.icon}
                    </div>
                    <CardTitle className="text-white text-lg">{gpt.name}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {gpt.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {gpt.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Resultados <span className="text-yellow-400">Comprovados</span> de Quem Já Usa
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-gray-400">Empreendedores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">300%</div>
                <div className="text-gray-400">Aumento Médio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15h</div>
                <div className="text-gray-400">Economizadas/Semana</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-gray-400">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/50 shadow-2xl">
              <CardContent className="p-12 text-center">
                <Badge className="mb-6 bg-red-600 text-white px-4 py-2 text-sm font-semibold">
                  🔥 OFERTA LIMITADA
                </Badge>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Garanta Seu Pack Completo
                </h2>
                
                <p className="text-xl text-gray-300 mb-8">
                  Normalmente, contratar um time de especialistas como esses custaria <strong className="text-white">R$ 15.000/mês</strong>
                </p>

                <div className="mb-8">
                  <div className="text-gray-400 text-2xl line-through mb-2">De R$ 397</div>
                  <div className="text-5xl font-bold text-white mb-2">
                    Por apenas <span className="text-green-400">R$ 17</span>
                  </div>
                  <div className="text-gray-300">Pagamento único • Acesso vitalício</div>
                </div>

                <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4">
                  🚀 QUERO MEU PACK AGORA - R$ 17
                </Button>

                <div className="flex items-center justify-center gap-2 mb-6">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Garantia incondicional de 7 dias</span>
                </div>

                <div className="flex items-center justify-center gap-2 mb-6">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Pagamento 100% seguro • Acesso imediato após confirmação</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Perguntas Frequentes
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Como funciona o acesso aos GPTs?</h3>
                <p className="text-gray-300">
                  Após a compra, você receberá imediatamente os links de acesso para todos os 9 GPTs personalizados. Basta clicar e começar a usar no ChatGPT.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Preciso ter conhecimento técnico?</h3>
                <p className="text-gray-300">
                  Não! Os GPTs são super fáceis de usar. Basta fazer perguntas em português normal e eles farão todo o trabalho pesado para você.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">A garantia é real?</h3>
                <p className="text-gray-300">
                  Sim! Você tem 7 dias para testar tudo. Se não ficar 100% satisfeito, devolvemos seu dinheiro sem perguntas.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Funciona para qualquer nicho?</h3>
                <p className="text-gray-300">
                  Absolutamente! Os GPTs são versáteis e funcionam para qualquer área: e-commerce, consultoria, infoprodutos, serviços locais, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Não Deixe Essa Oportunidade Escapar
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            A revolução da IA está acontecendo AGORA. Você pode ser parte dela ou ficar para trás. <strong className="text-white">A escolha é sua.</strong>
          </p>

          <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8">
            🔥 GARANTIR MEU ACESSO AGORA - R$ 17
          </Button>

          <p className="text-gray-400 text-sm">
            ⚡ Restam poucas vagas com este preço promocional
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Pack Essencial de GPTs. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Este produto não garante resultados. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
