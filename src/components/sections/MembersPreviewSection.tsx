/**
 * 구성원 미리보기 섹션 (홈페이지용)
 * 
 * 홈페이지에서 주요 구성원 5명을 가로 스크롤로 표시하는 컴포넌트입니다.
 * 김성호, 성진솔, 길진성, 손재용, 문현돈 순서로 표시됩니다.
 */

import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { members } from '../../constants/members';
import { SectionHeader } from '../common/SectionHeader';

interface MembersPreviewSectionProps {
  onMemberClick: (memberId: number) => void;  // 구성원 클릭 핸들러
}

/**
 * MembersPreviewSection 컴포넌트
 * 
 * @param onMemberClick - 구성원 카드 클릭 시 실행될 함수
 */
export function MembersPreviewSection({ onMemberClick }: MembersPreviewSectionProps) {
  // 홈페이지에 표시할 주요 구성원 5명
  const displayMembers = members.filter(m => [1, 6, 7, 2, 5].includes(m.id)); // 김성호, 성진솔, 길진성, 손재용, 문현돈

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/10 to-background">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="구성원"
          description="각 분야 최고의 전문가들이 함께합니다"
        />
        
        {/* 가로 스크롤 컨테이너 */}
        <div className="max-w-7xl mx-auto overflow-x-auto pb-4 px-6">
          <div className="flex gap-6 w-max">
            {displayMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="w-80"
              >
                <Card
                  className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => onMemberClick(member.id)}
                >
                  {/* 프로필 이미지 영역 */}
                  <div className="relative overflow-hidden aspect-square p-3">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* 그라데이션 오버레이 */}
                    <div className="absolute inset-3 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {/* 이름 및 직책 */}
                    <div className="absolute bottom-3 left-3 right-3 p-4 text-white">
                      <h3 className="text-white mb-1">{member.name}</h3>
                      <p className="text-white/80">{member.position}</p>
                    </div>
                  </div>
                  {/* 부서 정보 */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-muted-foreground">{member.department}</p>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}