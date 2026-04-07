import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BrainCircuit, Route, Layers, ArrowRight } from 'lucide-react';

const Main = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - var(--header-height))' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
        어떤 작업을 시작하시겠습니까?
      </h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'flex', gap: '2rem', width: '100%', maxWidth: '1000px', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {/* CC AI Action Button */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.03, y: -10 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/cc-ai')}
          style={{ flex: '1 1 300px', position: 'relative', cursor: 'pointer', borderRadius: 'var(--radius-lg)', padding: '3px', background: 'var(--gradient-main)' }}
        >
          <div style={{ background: 'var(--bg-elevated)', borderRadius: 'calc(var(--radius-lg) - 3px)', height: '100%', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}
            >
              <BrainCircuit size={64} />
            </motion.div>
            <h3 style={{ fontSize: '1.75rem' }}>Character Create AI</h3>
            <p>매력적인 캐릭터를 설계하고 세부 설정을 자동 생성합니다.</p>
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
              시작하기 <ArrowRight size={18} />
            </div>
          </div>
        </motion.div>

        {/* SCS AI Action Button */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.03, y: -10 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/scs-ai')}
          style={{ flex: '1 1 300px', position: 'relative', cursor: 'pointer', borderRadius: 'var(--radius-lg)', padding: '3px', background: 'var(--gradient-scs)' }}
        >
          <div style={{ background: 'var(--bg-elevated)', borderRadius: 'calc(var(--radius-lg) - 3px)', height: '100%', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}
            >
              <Route size={64} />
            </motion.div>
            <h3 style={{ fontSize: '1.75rem' }}>Scenario Choice AI</h3>
            <p>상황을 입력하고 전개 가능한 다양한 시나리오 분기를 확인하세요.</p>
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-secondary)', fontWeight: 600 }}>
              시작하기 <ArrowRight size={18} />
            </div>
          </div>
        </motion.div>

        {/* ETC Action Button */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.03, y: -10 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/etc')}
          style={{ flex: '1 1 300px', position: 'relative', cursor: 'pointer', borderRadius: 'var(--radius-lg)', padding: '3px', background: 'var(--border-glass)' }}
        >
          <div style={{ background: 'var(--bg-elevated)', borderRadius: 'calc(var(--radius-lg) - 3px)', height: '100%', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              <Layers size={64} />
            </div>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--text-secondary)' }}>기타 도구 (ETC)</h3>
            <p>보조적인 창작 도구들을 모아두었습니다.</p>
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              둘러보기 <ArrowRight size={18} />
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Main;
