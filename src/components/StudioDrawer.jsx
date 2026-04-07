import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UserCheck, BookOpen, Clock } from 'lucide-react';

const StudioDrawer = ({ isOpen, onClose }) => {
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const drawerVariants = {
    hidden: { x: '100%', opacity: 0.5 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { type: 'spring', damping: 25, stiffness: 200 } 
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            style={styles.overlay}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />
          <motion.div 
            style={styles.drawer}
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="glass-panel"
          >
            <div style={styles.header}>
              <h3>내 작업실</h3>
              <button 
                onClick={onClose} 
                style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>
            </div>

            <div style={styles.content}>
              <div style={styles.section}>
                <h4 style={styles.sectionTitle}><Clock size={16} /> 최근 작업</h4>
                <div style={styles.card}>마법 공학자 캐릭터 설정 구축하기</div>
                <div style={styles.card}>챕터 3 시나리오 분기점 생성</div>
              </div>

              <div style={styles.section}>
                <h4 style={styles.sectionTitle}><UserCheck size={16} /> 저장한 캐릭터</h4>
                <div style={styles.card}>주인공: 엘리안 (마법 기사)</div>
                <div style={styles.card}>조연: 렌 (도적)</div>
              </div>

              <div style={styles.section}>
                <h4 style={styles.sectionTitle}><BookOpen size={16} /> 저장한 시나리오</h4>
                <div style={styles.card}>왕의 암살을 막지 못했을 때의 루트</div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(4px)',
    zIndex: 900,
  },
  drawer: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: 'var(--drawer-width)',
    height: '100vh',
    zIndex: 1000,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 'none',
    borderTop: 'none',
    borderBottom: 'none',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    borderBottom: '1px solid var(--border-subtle)',
    paddingBottom: '1rem'
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  sectionTitle: {
    color: 'var(--text-secondary)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  card: {
    padding: '1rem',
    backgroundColor: 'var(--bg-elevated)',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--border-subtle)',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  }
};

export default StudioDrawer;
