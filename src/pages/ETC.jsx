import React from 'react';
import { motion } from 'framer-motion';
import { Globe, PenTool, Type, HelpCircle } from 'lucide-react';

const ETC = () => {
  const tools = [
    { id: 1, title: '세계관 제너레이터', icon: <Globe size={24} />, desc: '행성의 연대기부터 기후, 문명 수준까지 디테일한 세계관을 설계하세요.' },
    { id: 2, title: '이름 작명소 (Namer)', icon: <Type size={24} />, desc: '특정 문화권이나 판타지 테마에 어울리는 캐릭터/지역/물건의 이름을 생성합니다.' },
    { id: 3, title: '플롯 구조화 마법사', icon: <PenTool size={24} />, desc: '영웅의 여정(Hero\'s Journey)이나 3막 구조 템플릿에 맞게 스토리를 배열합니다.' },
    { id: 4, title: '설정 오류 검사기', icon: <HelpCircle size={24} />, desc: '(준비 중) 작성된 문서들을 기반으로 모순된 설정이나 타임라인 오류를 찾아냅니다.' }
  ];

  return (
    <div className="page-wrapper">
      <h1 style={{ marginBottom: '0.5rem' }}>작가의 도구 상자</h1>
      <p style={{ marginBottom: '3rem' }}>스토리텔링의 빈틈을 채워줄 다양한 보조 툴킷입니다. 필요한 도구를 선택해 자유롭게 활용하세요.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
        {tools.map((tool) => (
          <motion.div 
            key={tool.id}
            whileHover={{ y: -5 }}
            className="glass-panel" 
            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)' }}>
                {tool.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{tool.title}</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', flex: 1 }}>{tool.desc}</p>
            <button className="btn-glass" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>
              도구 열기
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ETC;
