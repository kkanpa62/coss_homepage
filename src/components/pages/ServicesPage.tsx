/**
 * 업무분야 페이지 컴포넌트
 * 
 * COSS KNP GROUP이 제공하는 지식재산권 관련 서비스를 소개합니다.
 * 6개의 주요 서비스 영역으로 구성되어 있습니다.
 */

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { Sparkles } from 'lucide-react';
import { servicesData } from '../../constants/services';

/**
 * ServicesPage 컴포넌트
 * 업무분야 페이지의 메인 컴포넌트입니다.
 */
export function ServicesPage() {
  const location = useLocation();
  const navigate = useNavigate();

  /**
   * 홈 섹션에서 전달된 서비스 ID 상태를 감지해 해당 카드로 스크롤합니다.
   * 스크롤 처리 후 replace 네비게이션으로 state를 비워 재실행을 방지합니다.
   */
  useEffect(() => {
    const state = location.state as { targetServiceId?: number } | undefined;
    if (!state?.targetServiceId) {
      return;
    }

    const element = document.getElementById(`service-${state.targetServiceId}`);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    navigate(location.pathname, { replace: true });
  }, [location, navigate]);

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
            const theme = service.theme;
            const leftCardStyle = {
              background: theme.leftCardGradient,
              borderColor: theme.leftCardBorderColor,
            };
            const headerStyle = { background: theme.headerGradient };
            const iconStyle = { background: theme.iconGradient };
            const descriptionStyle = { color: theme.descriptionColor };
            const highlightTitleStyle = { color: theme.highlightTitleColor };
            const highlightDescStyle = { color: theme.highlightDescriptionColor };
            const bulletRingStyle = { borderColor: theme.bulletRingColor };
            const bulletDotStyle = { background: theme.bulletDotColor };
            const rightCardStyle = {
              background: theme.rightCardGradient,
              borderColor: theme.rightCardBorderColor,
            };
            const rightIconStyle = { background: theme.rightIconBackground };

            return (
              <motion.div
                key={service.id}
                id={`service-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="services-section">
                  <div className="services-column services-column--left">
                    <div className="services-card services-card--left" style={leftCardStyle}>
                      <div className="services-card__glow services-card__glow--top" />
                      <div className="services-card__glow services-card__glow--bottom" />

                      <div className="services-card__header" style={headerStyle}>
                        <div className="services-card__icon" style={iconStyle}>
                          <Icon className="services-card__icon-svg" />
                        </div>
                        <span className="services-card__title">{service.title}</span>
                      </div>

                      <p className="services-card__description" style={descriptionStyle}>
                        {service.description}
                      </p>

                      <div className="services-card__highlights">
                        {service.highlights.map((highlight, idx) => (
                          <div key={idx} className="services-card__highlight">
                            <div className="services-card__bullet" style={bulletRingStyle}>
                              <span className="services-card__bullet-dot" style={bulletDotStyle} />
                            </div>
                            <div className="services-card__highlight-text">
                              <h4 className="services-card__highlight-title" style={highlightTitleStyle}>
                                {highlight.title}
                              </h4>
                              <p className="services-card__highlight-desc" style={highlightDescStyle}>
                                {highlight.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="services-column services-column--right">
                    <div className="services-card services-card--right" style={rightCardStyle}>
                      <div className="services-card__header services-card__header--right">
                        <div className="services-card__icon services-card__icon--right" style={rightIconStyle}>
                          <Sparkles className="services-card__icon-svg" />
                        </div>
                        <h3 className="services-card__title services-card__title--right">서비스 범위</h3>
                      </div>

                      <div className="services-card__services">
                        {service.services.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.04, duration: 0.3 }}
                            className="services-card__service-item"
                            style={{
                              background: theme.serviceItemBackground,
                              borderColor: theme.serviceItemBorderColor,
                              color: theme.serviceItemTextColor,
                            }}
                          >
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
