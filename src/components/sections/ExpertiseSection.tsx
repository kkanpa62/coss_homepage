/**
 * 홈 페이지 업무분야 미리보기 섹션
 * 
 * 주요 업무분야 4개(특허, 표준특허, 상표, IP 컨설팅)를 카드 형식으로 표시합니다.
 * 각 카드 클릭 시 업무분야 페이지의 해당 섹션으로 이동합니다.
 * 
 * 주요 기능:
 * - 4열 그리드 레이아웃 (반응형)
 * - 호버 시 "자세히 보기" 표시
 * - 업무분야 페이지로 스크롤 타겟과 함께 이동
 */

import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { SectionHeader } from '../common/SectionHeader';
import { featuredServices } from '../../constants/services';
import { PageType, NavigationOptions } from '../../types';
import { ArrowRight } from 'lucide-react';

interface ExpertiseSectionProps {
  onNavigate: (page: PageType, options?: NavigationOptions) => void;  // 페이지 이동 핸들러
}

/**
 * ExpertiseSection 컴포넌트
 * 
 * @param onNavigate - 페이지 이동 함수 (옵션으로 특정 섹션 ID 전달 가능)
 */
export function ExpertiseSection({ onNavigate }: ExpertiseSectionProps) {
  return (
    <div className="py-20 bg-gradient-to-br from-background via-chart-2/5 to-background">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <SectionHeader 
          title="업무분야"
          description="지식재산권 전 분야에 걸친 차별화된 전문 서비스를 제공합니다"
        />

        {/* 업무분야 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            // 업무분야 페이지와 동일한 그라데이션 로직 사용
            const iconGradient = index % 2 === 0 
              ? `bg-gradient-to-br from-${service.color} to-chart-5` 
              : `bg-gradient-to-br from-${service.color} to-chart-3`;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card 
                  className="p-6 h-full hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => onNavigate('services', { serviceId: service.id })}
                >
                  <div className="flex flex-col h-full">
                    {/* 아이콘 */}
                    <div className={`w-14 h-14 rounded-xl ${iconGradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* 제목 */}
                    <h3 className="mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* 설명 */}
                    <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">
                      {service.description}
                    </p>

                    {/* 자세히 보기 */}
                    <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm">자세히 보기</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>


      </div>
    </div>
  );
}
