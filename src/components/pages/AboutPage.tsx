/**
 * 회사소개 페이지 컴포넌트
 * 
 * COSS KNP GROUP의 비전, 미션, 그리고 KNP의 의미를 소개합니다.
 * 세 개의 주요 섹션으로 구성됩니다:
 * 1. 회사 소개 및 비전
 * 2. COSS의 의미
 * 3. K, N, P 각각의 의미와 전문성
 */

import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { Lightbulb, Rocket, Users, Sparkles } from 'lucide-react';

/**
 * AboutPage 컴포넌트
 * 회사소개 페이지의 메인 컴포넌트입니다.
 */
export function AboutPage() {
  /**
   * KNP 설명 데이터
   * Key Strategy, New Technology, Partner 각각의 정보를 담고 있습니다.
   */
  const knpItems = [
    {
      letter: 'K',
      title: 'Key Strategy',
      subtitle: '핵심 전략 수립의 전문가',
      description: 'COSS KNP Group은 고객을 위한 핵심전략 수립의 전문가입니다. 고객의 IP와 컨설팅을 통해 고객의 지식재산 가치를 극대화하고, 새로운 시장을 고객과 함께 열어나갑니다.',
      icon: Lightbulb,
    },
    {
      letter: 'N',
      title: 'New Technology',
      subtitle: 'Navigation of your high technology',
      description: 'COSS KNP Group은 메타버스, 로봇, AI, 터치센서, 바이오텍, 화학 분야 등 첨단기술의 전문가입니다. 고객의 첨단 기술 항로를 개척하고 특허를 발굴합니다.',
      icon: Rocket,
    },
    {
      letter: 'P',
      title: 'Partner',
      subtitle: '고객의 든든한 파트너',
      description: 'COSS KNP Group은 고객을 만족시킬 수 있는 최고의 지식재산 서비스와 최선의 솔루션을 제공합니다. 언제나 신뢰받을 수 있는 고객의 든든한 파트너가 되겠습니다.',
      icon: Users,
    },
  ];
  const iconBackgrounds = ['bg-chart-1/10', 'bg-chart-2/10', 'bg-chart-5/10'];
  const iconAccentColors = ['text-chart-1', 'text-chart-2', 'text-chart-5'];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* 첫 번째 영역: 회사 소개 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">About COSS KNP GROUP</span>
            </motion.div>

            <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl">
              COSS KNP와 함께하는
              <br />
              <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-5 bg-clip-text text-transparent">
                지식재산권의 미래
              </span>
            </h1>

            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                COSS KNP Group은 급변하는 기술 환경에서 고객의 혁신적인 아이디어와 창작물을 법적으로 보호하고, 그 가치를 극대화하는 것을 목표로 설립되었습니다.
              </p>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                우리는 단순한 법률 서비스를 넘어서, 고객의 사업 전략과 연계된 종합적인 지식재산권 솔루션을 제공하여 고객의 경쟁력 강화에 기여하고 있습니다.
              </p>
            </div>
          </div>
        </motion.section>

        <Separator className="mb-24 max-w-4xl mx-auto" />

        {/* 두 번째 영역: COSS 의미 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-24 max-w-5xl mx-auto"
        >
          <Card className="overflow-hidden border-2 shadow-xl">
            <div className="bg-gradient-to-br from-primary/5 via-chart-1/5 to-chart-5/5 p-8 md:p-12 lg:p-16">
              <div className="text-center space-y-6">
                <div className="inline-block">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2">
                    <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-5 bg-clip-text text-transparent">
                      Creation of Original
                      <br />
                      Strategic & Standard
                    </span>
                  </h2>
                  <div className="h-1 bg-gradient-to-r from-primary via-chart-1 to-chart-5 rounded-full" />
                </div>

                <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                  <span className="text-foreground">COSS</span> KNP Group은 창조적이고 독창적인 전략과 표준
                  (<span className="text-foreground">C</span>reation of{' '}
                  <span className="text-foreground">O</span>riginal{' '}
                  <span className="text-foreground">S</span>trategic &{' '}
                  <span className="text-foreground">S</span>tandard)을 만들어가며, 고객의 혁신적인 아이디어를 보호하고 발전시키는 것을 목표로 합니다.
                </p>
              </div>
            </div>
          </Card>
        </motion.section>

        <Separator className="mb-24 max-w-4xl mx-auto" />

        {/* 세 번째 영역: KNP 설명 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-5 bg-clip-text text-transparent">
                KNP
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Key Strategy · New Technology · Partner
            </p>
          </div>

          <div className="relative p-1 rounded-2xl border border-border/30 bg-gradient-to-br from-background via-accent/10 to-background">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 bg-gradient-to-br from-background via-accent/5 to-background rounded-xl p-8">
              {knpItems.map((item, index) => {
                const Icon = item.icon;
                const iconBackground = iconBackgrounds[index] ?? 'bg-primary/5';
                const accentColor = iconAccentColors[index] ?? 'text-primary';
                return (
                  <motion.div
                    key={item.letter}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.15, duration: 0.6 }}
                    className="h-full"
                  >
                    <Card className="p-6 lg:p-8 h-full bg-gradient-to-br from-background via-accent/5 to-background border border-border/20 transition-all duration-300 hover:shadow-xl">
                      {/* 헤더 영역 */}
                      <div className="flex flex-col items-center text-center mb-6 pb-6 border-b border-border/20">
                        <div
                          className={`relative inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl ${iconBackground} mb-4 border border-border/30`}
                        >
                          <span className={`text-3xl lg:text-4xl font-semibold ${accentColor}`}>{item.letter}</span>
                          <Icon
                            className={`absolute -bottom-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 ${accentColor} rounded-full p-1`}
                          />
                        </div>

                        <h3 className="text-xl lg:text-2xl mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground italic">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* 설명 영역 */}
                      <div className="space-y-4">
                        <p className="text-foreground/70 leading-relaxed text-sm lg:text-base">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
