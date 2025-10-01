/**
 * COSS KNP Group의 차별화된 강점 섹션 컴포넌트
 * 
 * 회사의 핵심 강점을 3가지로 나누어 소개합니다.
 * 혁신적 기술 전문성, 전문 변리사팀, 글로벌 네트워크를 카드 형태로 표시합니다.
 */

import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { SectionHeader } from '../common/SectionHeader';
import { ImageWithFallback } from '../figma/ImageWithFallback';

/**
 * 강점 섹션 데이터
 * 각 강점 카드에 사용될 이미지 URL을 정의합니다.
 */
const strengthsData = [
  {
    title: '혁신적 기술 전문성',
    description: '메타버스, AI, 로봇, 바이오텍, 화학 등 첨단 기술 분야에서 축적된 전문 지식과 경험을 바탕으로 고객의 혁신적인 아이디어를 효과적으로 보호합니다.',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkxNjQyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: '전문 변리사팀',
    description: '각 분야 전문가들이 고객 맞춤형 솔루션을 제공하며, 지속적인 연구와 학습을 통해 최신 법률 동향에 발빠르게 대응합니다.',
    image: 'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGF0YXxlbnwxfHx8fDE3NTkxMzE3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: '글로벌 네트워크',
    description: 'PCT, 마드리드 의정서 등 국제 출원 시스템과 전 세계 현지 대리인 네트워크를 활용하여 글로벌 시장에서의 지식재산권 보호를 지원합니다.',
    image: 'https://images.unsplash.com/photo-1681505526188-b05e68c77582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwYnVzaW5lc3MlMjBwYXJ0bmVyc2hpcHxlbnwxfHx8fDE3NTkzMDM3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

/**
 * ProjectsSection 컴포넌트
 * COSS KNP Group의 3가지 핵심 강점을 소개합니다.
 */
export function ProjectsSection() {
  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 - SectionHeader 컴포넌트 사용으로 일관성 유지 */}
        <SectionHeader
          title="차별화된 강점"
          description="전문성과 글로벌 네트워크를 바탕으로 고객의 지식재산권을 보호합니다"
        />

        {/* 강점 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengthsData.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 group">
                {/* 이미지 영역 */}
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={strength.image}
                    alt={strength.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* 텍스트 영역 */}
                <div className="p-6">
                  <h3 className="mb-2">{strength.title}</h3>
                  <p className="text-muted-foreground">
                    {strength.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
