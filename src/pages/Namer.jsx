import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Type } from 'lucide-react';

const Namer = () => {
  const navigate = useNavigate();

  const [namerStyle, setNamerStyle] = useState('fantasy');
  const [namerKeyword, setNamerKeyword] = useState('');
  const [namerCount, setNamerCount] = useState(8);
  const [namerResults, setNamerResults] = useState([]);
  const [copiedValue, setCopiedValue] = useState('');

  const namerPresets = useMemo(
    () =>
      ({
        fantasy: {
          label: '판타지',
          prefix: ['Ar', 'El', 'Ka', 'Va', 'Ser', 'Rin', 'Ly', 'No', 'Bel', 'Cal', 'Mor', 'Ael'],
          core: ['an', 'en', 'ir', 'or', 'ul', 'a', 'e', 'i', 'o', 'u', 'ryn', 'th', 'v', 'l', 'm', 's'],
          suffix: ['ion', 'iel', 'ara', 'eth', 'wyn', 'dor', 'mir', 'thas', 'riel', 'nys', 'dar', 'len'],
        },
        scifi: {
          label: 'SF',
          prefix: ['Neo', 'X', 'Astra', 'Vega', 'Sol', 'Cy', 'Qu', 'Nova', 'Zen', 'Orbi'],
          core: ['-9', '-7', 'ra', 'xi', 'on', 'tek', 'syn', 'core', 'plex', 'byte', 'ion'],
          suffix: ['Lab', 'Prime', 'Gate', 'Station', 'Unit', 'Drive', 'Arc', 'Node', 'Works'],
        },
        modern: {
          label: '모던',
          prefix: ['Ha', 'Se', 'Ji', 'Min', 'Da', 'Su', 'Ye', 'Jun', 'Hye', 'Yun', 'Eun'],
          core: ['na', 'rin', 'seo', 'jin', 'yeon', 'bin', 'hae', 'woo', 'mi', 'kyu'],
          suffix: ['a', 'i', 'o', 'u', ''],
        },
      }),
    []
  );

  const normalizeKeyword = (value) => value.trim().replace(/\s+/g, ' ');

  const makeName = ({ preset, keyword }) => {
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const base = `${pick(preset.prefix)}${pick(preset.core)}${pick(preset.suffix)}`
      .replace(/\s+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-/, '')
      .replace(/-$/, '');

    const safeKeyword = normalizeKeyword(keyword);
    if (!safeKeyword) return base;

    const keywordPiece = safeKeyword
      .split(' ')
      .slice(0, 2)
      .join(' ');

    const attachMode = Math.random() < 0.5 ? 'prefix' : 'suffix';
    if (attachMode === 'prefix') return `${keywordPiece} ${base}`;
    return `${base} ${keywordPiece}`;
  };

  const generateNames = () => {
    const preset = namerPresets[namerStyle] ?? namerPresets.fantasy;
    const safeCount = Math.max(1, Math.min(12, Number(namerCount) || 8));
    const keyword = normalizeKeyword(namerKeyword);

    const results = [];
    const seen = new Set();
    let guard = 0;

    while (results.length < safeCount && guard < 200) {
      guard += 1;
      const name = makeName({ preset, keyword });
      if (seen.has(name)) continue;
      seen.add(name);
      results.push(name);
    }

    setCopiedValue('');
    setNamerResults(results);
  };

  const copyToClipboard = async (value) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const el = document.createElement('textarea');
        el.value = value;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
      setCopiedValue(value);
      window.setTimeout(() => setCopiedValue(''), 1200);
    } catch {
      setCopiedValue('');
    }
  };

  return (
    <div className="page-wrapper">
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <h1 style={{ marginBottom: '0.5rem' }}>이름 작명소</h1>
          <p style={{ marginBottom: '0' }}>스타일과 키워드를 섞어 캐릭터/지역/물건 이름을 빠르게 뽑아봅니다.</p>
        </div>
        <button className="btn-glass" onClick={() => navigate('/etc')} style={{ whiteSpace: 'nowrap' }}>
          ETC로 돌아가기
        </button>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', display: 'grid', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}>
          <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)' }}>
            <Type size={24} />
          </div>
          <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Namer</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <label style={{ display: 'grid', gap: '0.35rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>스타일</span>
            <select
              className="input-field"
              value={namerStyle}
              onChange={(e) => setNamerStyle(e.target.value)}
              style={{ padding: '0.85rem' }}
            >
              {Object.entries(namerPresets).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.label}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: 'grid', gap: '0.35rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>개수 (1~12)</span>
            <input
              className="input-field"
              type="number"
              min={1}
              max={12}
              value={namerCount}
              onChange={(e) => setNamerCount(e.target.value)}
              style={{ padding: '0.85rem' }}
            />
          </label>
        </div>

        <label style={{ display: 'grid', gap: '0.35rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>키워드 (선택)</span>
          <input
            className="input-field"
            type="text"
            value={namerKeyword}
            onChange={(e) => setNamerKeyword(e.target.value)}
            placeholder="예: 바람, 겨울, 고철, 은빛"
            style={{ padding: '0.85rem' }}
          />
        </label>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="btn-primary" onClick={generateNames} style={{ flex: 1, justifyContent: 'center' }}>
            이름 생성
          </button>
          <button
            className="btn-glass"
            onClick={() => {
              setNamerResults([]);
              setCopiedValue('');
            }}
            style={{ justifyContent: 'center' }}
          >
            초기화
          </button>
        </div>

        {namerResults.length > 0 && (
          <div
            style={{
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
            }}
          >
            {namerResults.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => copyToClipboard(name)}
                className="btn-glass"
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  borderRadius: 0,
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderTop: 'none',
                }}
                title="클릭하면 복사됩니다"
              >
                <span style={{ color: 'var(--text-primary)', textAlign: 'left' }}>{name}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {copiedValue === name ? '복사됨' : '복사'}
                </span>
              </button>
            ))}
          </div>
        )}

        <p style={{ fontSize: '0.85rem', margin: 0 }}>목록을 클릭하면 해당 이름이 클립보드에 복사됩니다.</p>
      </div>
    </div>
  );
};

export default Namer;
