'use client';

import React, { useState } from 'react';

export default function FuturePathAISite() {
  const [showResult, setShowResult] = useState(false);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);

  const toggleField = (field: string) => {
    setSelectedFields((prev) =>
      prev.includes(field)
        ? prev.filter((f) => f !== field)
        : [...prev, field]
    );
  };

  const getResult = () => {
    if (selectedFields.includes('AI・IT・プログラミング') || selectedFields.includes('起業・ビジネス')) {
      return {
        title: 'AI × 起業家タイプ',
        desc: '新しい技術を使って自分で価値を作り出す適性があります。',
        path: 'IT・経営・海外進学・起業',
        roadmap: ['AI基礎を学ぶ', '小さな作品を作る', 'ポートフォリオ化する'],
      };
    }

    if (selectedFields.includes('SNS・YouTube・配信')) {
      return {
        title: '発信者タイプ',
        desc: '人に影響を与え、情報発信で価値を届ける力があります。',
        path: 'メディア・マーケティング・起業',
        roadmap: ['毎週投稿', '分析改善', 'ブランド化'],
      };
    }

    return {
      title: '探求者タイプ',
      desc: '幅広い興味を持ち、自分に合う道を探して成長するタイプです。',
      path: '自己分析・スキル習得・進路探索',
      roadmap: ['自己分析', '1スキル習得', '進路仮決定'],
    };
  };

  const fields = [
    '起業・ビジネス',
    'AI・IT・プログラミング',
    'SNS・YouTube・配信',
    '留学・海外大学',
    '投資・お金の知識',
    '経営・マーケティング',
    '営業・セールス',
    'デザイン・動画編集',
    '教育・コーチング',
    '政治・国際関係',
    '医療・心理',
    'スポーツ・フィットネス',
    'まだ分からない',
  ];

  const affiliateLinks = [
    { title: 'AI学習におすすめのPC', note: 'アフィリエイトリンク掲載枠' },
    { title: '英語学習サービス', note: '留学・IELTS向け掲載枠' },
    { title: 'おすすめ書籍・ガジェット', note: 'Amazon等の提携枠' },
  ];

  const result = getResult();

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white rounded-3xl shadow-sm border p-8">
          <h1 className="text-3xl font-bold mb-2">Future Path AI</h1>
          <p className="text-gray-600 mb-8">高校生向け 将来設計サポート</p>

          <div className="space-y-6">
            <input className="w-full border rounded-2xl p-3" placeholder="例: 16歳 / 高校2年生" />
            <textarea className="w-full border rounded-2xl p-3 h-28" placeholder="例: 将来が見えない" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {fields.map((field) => (
                <label key={field} className="flex items-center gap-3 border rounded-2xl p-3">
                  <input
                    type="checkbox"
                    checked={selectedFields.includes(field)}
                    onChange={() => toggleField(field)}
                  />
                  <span>{field}</span>
                </label>
              ))}
            </div>

            <button
              onClick={() => setShowResult(true)}
              className="w-full rounded-2xl p-4 text-lg font-semibold border"
            >
              AIで将来を分析する
            </button>
          </div>
        </div>

        {showResult && (
          <div className="bg-white rounded-3xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold mb-3">診断結果</h2>
            <p className="text-lg font-semibold mb-2">あなたは「{result.title}」です</p>
            <p className="text-gray-700 mb-4">{result.desc}</p>
            <p className="mb-4"><strong>おすすめ進路:</strong> {result.path}</p>
            <div className="space-y-2">
              <p><strong>今月:</strong> {result.roadmap[0]}</p>
              <p><strong>3か月:</strong> {result.roadmap[1]}</p>
              <p><strong>1年:</strong> {result.roadmap[2]}</p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-sm border p-8">
          <h2 className="text-2xl font-bold mb-4">おすすめリソース</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {affiliateLinks.map((item) => (
              <div key={item.title} className="border rounded-2xl p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.note}</p>
                <button className="w-full border rounded-xl p-2">詳細を見る</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
