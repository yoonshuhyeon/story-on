import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, BrainCircuit, Route, Layers } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - var(--header-height))', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ maxWidth: '800px', marginBottom: '4rem' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <span style={{ padding: '0.5rem 1rem', background: 'rgba(254, 74, 144, 0.1)', color: 'var(--accent-primary)', borderRadius: 'var(--radius-pill)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={16} /> 당신만의 이야기를 완성하세요
          </span>
        </div>
        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
          차원이 다른 <span className="gradient-text">창작 보조 AI 플랫폼</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          캐릭터의 영혼을 불어넣고, 무한한 시나리오의 가능성을 탐구하세요. Story-On이 작가님의 상상력을 현실로 만들어 드립니다.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', width: '100%', marginBottom: '4rem' }}>
        <motion.div 
          className="glass-panel" 
          style={{ padding: '2rem', textAlign: 'left' }}
          whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
        >
          <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(96, 91, 255, 0.2), rgba(0, 210, 255, 0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-tertiary)' }}>
            <BrainCircuit size={24} />
          </div>
          <h3>Character Create AI</h3>
          <p>몇 가지 키워드와 설정만으로 생동감 넘치고 입체적인 캐릭터 프로필과 백스토리를 생성합니다.</p>
        </motion.div>

        <motion.div 
          className="glass-panel" 
          style={{ padding: '2rem', textAlign: 'left' }}
          whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
        >
          <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(254, 74, 144, 0.2), rgba(96, 91, 255, 0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
            <Route size={24} />
          </div>
          <h3>Scenario Choice AI</h3>
          <p>이야기의 분기점에서 선택에 따른 다양한결과를 시뮬레이션하여 가장 흥미로운 전개를 찾아냅니다.</p>
        </motion.div>

        <motion.div 
          className="glass-panel" 
          style={{ padding: '2rem', textAlign: 'left' }}
          whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
        >
          <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            <Layers size={24} />
          </div>
          <h3>ETC Tools</h3>
          <p>세계관 생성, 이름 작명, 플롯 구조화 등 창작에 도움이 되는 다양한 미니 툴킷을 제공합니다.</p>
        </motion.div>
      </div>

      <motion.button 
        className="btn-primary" 
        style={{ padding: '1rem 3rem', fontSize: '1.25rem' }}
        onClick={() => navigate('/main')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        시작하기 (Main으로 이동)
      </motion.button>
    </div>
  );
};

export default Home;
