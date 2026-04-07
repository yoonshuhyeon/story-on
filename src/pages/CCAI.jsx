import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const CCAI = () => {
  return (
    <div className="page-wrapper">
      <h1 className="gradient-text" style={{ marginBottom: '0.5rem' }}>Character Create AI</h1>
      <p style={{ marginBottom: '2rem' }}>새로운 인물의 뼈대를 세우고 생동감을 불어넣으세요.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Left Column: Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3>1. 캐릭터 서사 및 특징 입력</h3>
            <p style={{ fontSize: '0.9rem' }}>생각해둔 캐릭터의 외형이나 성격, 뒷배경을 자유롭게 적어주세요.</p>
            <textarea 
              className="input-field input-area" 
              placeholder="예시: 차가운 인상을 가졌지만 내면은 따뜻한 암살자. 어릴적 기억을 잃었음..."
            ></textarea>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3>2. 성향 키워드 선택</h3>
            <p style={{ fontSize: '0.9rem' }}>원하는 성향의 키워드를 선택해 구체적인 톤을 잡아보세요.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['냉혹함', '정의로움', '광기', '천재', '게으름', '로맨시스트', '철학적'].map(keyword => (
                <div key={keyword} style={{ 
                  padding: '0.5rem 1rem', 
                  borderRadius: 'var(--radius-pill)', 
                  border: '1px solid var(--border-glass)', 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}>
                  {keyword}
                </div>
              ))}
            </div>
          </div>

          <button className="btn-primary" style={{ justifyContent: 'center', padding: '1rem' }}>
            <Sparkles size={18} />
            캐릭터 구체화(생성)
          </button>
        </div>

        {/* Right Column: Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3>생성 결과</h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', background: 'rgba(254, 74, 144, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>Draft. 1</span>
            </div>
            
            {/* Dummy Skeleton Data */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              <div>
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>이름 제안</h4>
                <p style={{ fontWeight: 600, fontSize: '1.25rem' }}>아르크시온 (Arxion)</p>
              </div>
              
              <div style={{ backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)', padding: '1rem' }}>
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>메타데이터 분석</h4>
                {/* Dummy Progress Bars / Radar alternative */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[{ label: '독립성', val: 80 }, { label: '감정표현', val: 30 }, { label: '신뢰도', val: 50 }].map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem' }}>
                      <span style={{ width: '60px' }}>{item.label}</span>
                      <div style={{ flex: 1, height: '6px', backgroundColor: 'var(--bg-base)', borderRadius: '3px', overflow: 'hidden' }}>
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: `${item.val}%` }} 
                          style={{ height: '100%', background: 'var(--gradient-main)' }} 
                        />
                      </div>
                      <span style={{ width: '30px', textAlign: 'right' }}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>배경 스토리 제안</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  이전 암살 길드의 최고 요원이었으나, 모종의 사건으로 기억의 일부를 잃고 뒷골목에서 깨어났습니다. 차가운 겉모습과 달리 본능적으로 타인을 돕는 모순적인 행동을 보입니다.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem' }}>
              <button className="btn-glass" style={{ flex: 1, justifyContent: 'center' }}>재생성</button>
              <button className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}><Check size={18}/> 저장하기</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CCAI;
