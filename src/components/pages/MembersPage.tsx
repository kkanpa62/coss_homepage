/**
 * 구성원 페이지 컴포넌트
 * 
 * 전체 구성원 9명을 4열 그리드로 표시하는 페이지입니다.
 */

import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { members } from '../../constants/members';
import { SectionHeader } from '../common/SectionHeader';

interface MembersPageProps {
  onMemberClick: (memberId: number) => void;  // 구성원 클릭 핸들러
}

/**
 * MembersPage 컴포넌트
 * 
 * @param onMemberClick - 구성원 카드 클릭 시 실행될 함수
 */
export function MembersPage({ onMemberClick }: MembersPageProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/10 to-background">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="구성원"
          description="COSS KNP GROUP의 전문가들을 소개합니다"
        />
        
        {/* 4열 그리드 컨테이너 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <Card
                className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => onMemberClick(member.id)}
              >
                {/* 프로필 이미지 영역 */}
                <div className="relative overflow-hidden aspect-square">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* 그라데이션 오버레이 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {/* 이름 및 직책 */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
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
    </section>
  );
}