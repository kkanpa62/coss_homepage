/**
 * 섹션 헤더 공통 컴포넌트
 * 
 * 페이지 내 각 섹션의 제목과 설명을 일관된 스타일로 표시하기 위한 재사용 가능한 컴포넌트입니다.
 * "About COSS KNP GROUP" 스타일의 라벨 + 큰 제목 조합을 사용합니다.
 */

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface SectionHeaderProps {
  title: string;          // 섹션 라벨 (상단의 작은 텍스트)
  subtitle?: string;      // 실제 큰 제목 (선택적)
  description?: string;   // 섹션 설명 (선택적)
  className?: string;     // 추가 CSS 클래스 (선택적)
}

/**
 * SectionHeader 컴포넌트
 * 
 * @param title - 섹션 라벨 (예: "About COSS KNP GROUP")
 * @param subtitle - 실제 큰 제목 (선택적)
 * @param description - 섹션 설명 (선택적)
 * @param className - 추가 스타일링을 위한 CSS 클래스 (선택적)
 * 
 * @example
 * <SectionHeader 
 *   title="구성원" 
 *   subtitle="각 분야 최고의 전문가들"
 *   description="COSS KNP GROUP의 핵심 인재진을 소개합니다" 
 * />
 */
export function SectionHeader({ title, subtitle, description, className = '' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-12 ${className}`}
    >
      {/* 상단 라벨 (아이콘 + 텍스트) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6"
      >
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-sm text-primary">{title}</span>
      </motion.div>

      {/* 메인 제목 */}
      {subtitle && (
        <h2 className="mb-6">{subtitle}</h2>
      )}

      {/* 설명 */}
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
