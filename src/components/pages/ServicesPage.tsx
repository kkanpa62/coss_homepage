/**
 * 업무분야 페이지 컴포넌트
 * 
 * COSS KNP GROUP이 제공하는 지식재산권 관련 서비스를 소개합니다.
 * 6개의 주요 서비스 영역으로 구성되어 있습니다.
 */

import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { SectionHeader } from '../common/SectionHeader';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../../constants/services';

/**
 * ServicesPage 컴포넌트
 * 업무분야 페이지의 메인 컴포넌트입니다.
 */
export function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* 페이지 헤더 */}
        <SectionHeader 
          title="업무분야"
          description="지식재산권 전 분야에 걸친 차별화된 전문 서비스를 제공합니다"
        />

        {/* 서비스 섹션들 */}
        <div className="max-w-7xl mx-auto space-y-16">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const colorClass = `text-${service.color}`;
            const bgGradient = `bg-gradient-to-br from-${service.color}/5 via-background to-background`;
            const iconGradient = index % 2 === 0 
              ? `bg-gradient-to-br from-${service.color} to-chart-5` 
              : `bg-gradient-to-br from-${service.color} to-chart-3`;
            
            return (
              <motion.div
                key={service.id}
                id={`service-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}>
                    {/* 좌측: 메인 정보 영역 */}
                    <div className={bgGradient}>
                      <div className="p-8 lg:p-12">
                        {/* 아이콘 + 제목 통합 */}
                        <div className={`${iconGradient} flex items-center gap-5 px-8 py-5 rounded-full mb-8 shadow-lg w-full sm:w-3/4 lg:w-1/2`}>
                          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex-shrink-0">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <h2 className="text-white m-0 font-bold">{service.title}</h2>
                        </div>
                        
                        {/* 설명 */}
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                          {service.description}
                        </p>

                        {/* 주요 서비스 하이라이트 */}
                        <div className="space-y-4">
                          {service.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className={`mt-1 flex-shrink-0 ${colorClass}`}>
                                <CheckCircle2 className="w-5 h-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="mb-1 break-keep">{highlight.title}</h4>
                                <p className="text-muted-foreground">
                                  {highlight.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 우측: 서비스 범위 영역 */}
                    <div className="p-8 lg:p-12 bg-accent/30">
                      <div className="flex items-center gap-2 mb-6">
                        <div className={`${iconGradient} w-8 h-8 rounded-lg flex items-center justify-center`}>
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <h3>서비스 범위</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.services.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 0.3 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="w-full py-3 px-4 justify-start hover:shadow-md transition-shadow"
                            >
                              <span className="w-full text-left">{item}</span>
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
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