import React from 'react';
import { Sun, Leaf, TrendingUp, DollarSign, Users, Sparkles, ArrowRight } from 'lucide-react';
import './sobre.css';

export default function Sobre() {
  return (
    <div className="container">
      {/* Hero Section - Manifesto */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            EcoInova – Energia limpa ao alcance de todos 🌞
          </h1>
          <div className="manifesto-box">
            <div className="manifesto-item">
              <h2 className="manifesto-label">Missão</h2>
              <p className="manifesto-text">
                Democratizar o acesso à energia limpa no Brasil.
              </p>
            </div>
            <div className="manifesto-divider"></div>
            <div className="manifesto-item">
              <h2 className="manifesto-label">Visão</h2>
              <p className="manifesto-text">
                Ser líder em soluções de energia solar residencial até 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section">
        <div className="section-content">
          <h2 className="section-title">Nossa História</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3 className="timeline-title">O Início</h3>
                <p className="timeline-text">
                  A EcoInova nasceu da visão de três engenheiros brasileiros que perceberam 
                  o enorme potencial solar do Brasil e a dificuldade de acesso das famílias 
                  a essa tecnologia. Com investimento inicial de R$ 500 mil, iniciamos 
                  nossa jornada em São Paulo.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Expansão</h3>
                <p className="timeline-text">
                  Instalamos mais de 200 sistemas solares residenciais, economizando 
                  mais de R$ 2 milhões em contas de luz para nossos clientes. Expandimos 
                  para Rio de Janeiro e Minas Gerais.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Inovação</h3>
                <p className="timeline-text">
                  Lançamos nossa plataforma de financiamento próprio, tornando a energia 
                  solar ainda mais acessível. Hoje, atendemos todo o território nacional 
                  com soluções personalizadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="valores-section">
        <div className="section-content">
          <h2 className="section-title-light">Nossos Valores</h2>
          <div className="valores-grid">
            <div className="valor-card">
              <div className="valor-icon">
                <Leaf size={40} color="#10b981" />
              </div>
              <h3 className="valor-title">Sustentabilidade</h3>
              <p className="valor-text">
                Comprometidos com o planeta, cada projeto reduz a emissão de CO₂ 
                e contribui para um futuro mais verde.
              </p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">
                <Sparkles size={40} color="#f59e0b" />
              </div>
              <h3 className="valor-title">Inovação</h3>
              <p className="valor-text">
                Utilizamos as tecnologias mais avançadas em painéis solares e 
                sistemas de armazenamento de energia.
              </p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">
                <TrendingUp size={40} color="#3b82f6" />
              </div>
              <h3 className="valor-title">Transparência</h3>
              <p className="valor-text">
                Orçamentos claros, sem taxas ocultas. Você sabe exatamente quanto 
                vai economizar desde o primeiro dia.
              </p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">
                <DollarSign size={40} color="#10b981" />
              </div>
              <h3 className="valor-title">Custo-benefício</h3>
              <p className="valor-text">
                Oferecemos as melhores soluções com retorno garantido sobre o 
                investimento em até 5 anos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Equipe */}
      <section className="section">
        <div className="section-content">
          <h2 className="section-title">Conheça Nossa Equipe</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-photo team-photo-1">
                <Users size={60} color="#10b981" />
              </div>
              <h3 className="team-name">Maria Silva</h3>
              <p className="team-role">CEO & Fundadora</p>
              <p className="team-bio">
                Engenheira Elétrica com MBA em Sustentabilidade. 15 anos de 
                experiência em energia renovável.
              </p>
            </div>
            <div className="team-card">
              <div className="team-photo team-photo-2">
                <Users size={60} color="#3b82f6" />
              </div>
              <h3 className="team-name">João Santos</h3>
              <p className="team-role">CTO</p>
              <p className="team-bio">
                Especialista em IoT e sistemas inteligentes de energia. 
                Responsável pela inovação tecnológica.
              </p>
            </div>
            <div className="team-card">
              <div className="team-photo team-photo-3">
                <Users size={60} color="#f59e0b" />
              </div>
              <h3 className="team-name">Ana Costa</h3>
              <p className="team-role">CFO</p>
              <p className="team-bio">
                Economista com expertise em financiamento de projetos 
                sustentáveis e microcrédito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Pronto para economizar e ajudar o planeta?
          </h2>
          <p className="cta-text">
            Faça uma simulação gratuita e descubra quanto você pode economizar 
            com energia solar.
          </p>
          <button className="cta-button">
            Faça um Orçamento Gratuito
            <ArrowRight size={20} style={{marginLeft: '8px'}} />
          </button>
        </div>
      </section>
    </div>
  );
}