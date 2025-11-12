'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sun } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para /sobre após 2 segundos
    const timer = setTimeout(() => {
      router.push('/sobre');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
      color: 'white'
    }}>
      <Sun 
        size={80} 
        style={{ 
          animation: 'pulse 2s infinite',
          marginBottom: '2rem'
        }} 
      />
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 4rem)',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        EcoInova
      </h1>
      <p style={{
        fontSize: '1.25rem',
        opacity: 0.9
      }}>
        Carregando...
      </p>
    </div>
  );
}