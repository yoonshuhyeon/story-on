import React from 'react';
import { motion } from 'framer-motion';
import { Route, Save, Dna } from 'lucide-react';

const SCSAI = () => {
  return (
    <div className="page-wrapper">
      <h1 className="gradient-text" style={{ marginBottom: '0.5rem', backgroundImage: 'var(--gradient-scs)' }}>Scenario Choice AI</h1>
      <p style={{ marginBottom: '2rem' }}>현재 상황에서 뻗어나갈 수 있는 무한한 스토리 분기를 확인하세요.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Top: Context Input Layer */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3>현재 스토리 상황 정보</h3>
          <p style={{ fontSize: '0.9rem' }}>주인공들이 직면한 갈등이나 현재 놓인 상황을 자세히 서술해주세요.</p>
          <textarea 
            className="input-field input-area" 
            style={{ marginTop: '1rem', minHeight: '100px' }}
            placeholder="주인공 일행이 던전 최하층 보스를 쓰러뜨렸지만 그 뒤에는 더 큰 타락한 제국의 황제가 기다리고 있다. 체력은 바닥인 상태..."
          ></textarea>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button className="btn-primary" style={{ background: 'var(--gradient-scs)' }}>
              <Dna size={18} /> 시나리오 분기 생성을 위한 분석
            </button>
          </div>
        </div>

        {/* Bottom: Results Layer */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>시뮬레이션 결과 (3개의 루트)</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) minmax(250px, 1fr) minmax(250px, 1fr)', gap: '1.5rem', overflowX: 'auto' }}>
            
            {/* Route A */}
            <motion.div whileHover={{ y: -5 }} className="glass-panel" style={{ padding: '1.5rem', borderTop: '4px solid var(--accent-secondary)' }}>
              <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Route size={16} /> 루트 A: 정면 돌파 강행
              </h4>
              <p style={{ fontSize: '0.95rem', height: '120px' }}>
                남은 모든 힘을 쥐어짜내어 황제에게 치명상을 입히지만, 주인공 중 한 명이 영구적인 부상을 입게 되는 비장한 전개.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <button className="btn-glass" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}><Save size={16}/> 이 루트 채택</button>
              </div>
            </motion.div>

            {/* Route B */}
            <motion.div whileHover={{ y: -5 }} className="glass-panel" style={{ padding: '1.5rem', borderTop: '4px solid var(--accent-tertiary)' }}>
              <h4 style={{ color: 'var(--accent-tertiary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Route size={16} /> 루트 B: 전략적 후퇴
              </h4>
              <p style={{ fontSize: '0.95rem', height: '120px' }}>
                비밀 통로를 이용해 도주. 황제는 세계를 장악하기 시작하며, 2부(레지스탕스) 스토리로 넘어가는 자연스러운 다리 역할.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <button className="btn-glass" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}><Save size={16}/> 이 루트 채택</button>
              </div>
            </motion.div>

            {/* Route C */}
            <motion.div whileHover={{ y: -5 }} className="glass-panel" style={{ padding: '1.5rem', borderTop: '4px solid #f5a623' }}>
              <h4 style={{ color: '#f5a623', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Route size={16} /> 루트 C: 의외의 조력자 등장
              </h4>
              <p style={{ fontSize: '0.95rem', height: '120px' }}>
                과거에 도움을 주었던 떠돌이 마법사가 황제의 진격을 막아주며 목숨을 빚지게 되는 고전적인 왕도물 전개.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <button className="btn-glass" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}><Save size={16}/> 이 루트 채택</button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SCSAI;
