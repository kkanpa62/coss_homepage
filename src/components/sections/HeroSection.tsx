/**
 * Hero 섹션 컴포넌트 (홈페이지용)
 * 
 * 홈페이지 최상단에 표시되는 메인 비주얼 영역입니다.
 * 회사의 핵심 메시지와 브랜드 아이덴티티를 전달합니다.
 * 
 * 주요 기능:
 * - 그라데이션 배경과 장식 요소로 시각적 임팩트 제공
 * - 메인 타이틀, 서브 타이틀 애니메이션
 * - 스크롤 다운 인디케이터
 */

import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { PageType } from '../../types';

interface HeroSectionProps {
  onNavigate: (page: PageType) => void;  // 페이지 이동 핸들러
}

/**
 * HeroSection 컴포넌트
 * 
 * @param onNavigate - 버튼 클릭 시 실행될 페이지 이동 함수
 */
export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-1/10 to-chart-5/5" />
      
      {/* 장식용 배경 요소들 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-chart-1/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-chart-5/20 rounded-full blur-3xl" />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* 메인 타이틀 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6 text-5xl sm:text-6xl md:text-7xl"
          >
            인공지능으로
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-5 bg-clip-text text-transparent">
              미래를 설계합니다
            </span>
          </motion.h1>

          {/* 서브 타이틀 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8 text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            고도화된 AI 기술력과 풍부한 실무 경험으로 고객의 성장 동력을 확보하고
            차별화된 지식재산 솔루션을 선사합니다.
          </motion.p>

          {/* 스크롤 다운 인디케이터 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16"
          >
            <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}