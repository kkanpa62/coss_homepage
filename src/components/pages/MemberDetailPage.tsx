/**
 * 구성원 상세 페이지 컴포넌트
 * 
 * 선택된 구성원의 상세 정보를 표시합니다.
 * 프로필 이미지, 소개, 학력, 경력, 전문 분야 등을 포함합니다.
 */

import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, GraduationCap, Briefcase, Award } from 'lucide-react';
import { Member } from '../../types';

interface MemberDetailPageProps {
  member: Member;    // 표시할 구성원 정보
  onBack: () => void; // 뒤로 가기 핸들러
}

/**
 * MemberDetailPage 컴포넌트
 * 
 * @param member - 표시할 구성원 데이터
 * @param onBack - 구성원 목록으로 돌아가는 함수
 */
export function MemberDetailPage({ member, onBack }: MemberDetailPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-chart-2/5 to-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 뒤로 가기 버튼 */}
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            구성원 목록으로
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 좌측: 프로필 카드 (스크롤 시 고정) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="overflow-hidden sticky top-24">
                {/* 프로필 이미지 */}
                <div className="relative aspect-square">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                {/* 기본 정보 */}
                <div className="p-6">
                  <h2 className="mb-2">{member.name}</h2>
                  <p className="text-muted-foreground mb-1">{member.position}</p>
                  <p className="text-muted-foreground">{member.department}</p>
                </div>
              </Card>
            </motion.div>

            {/* 우측: 상세 정보 영역 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* 소개 섹션 */}
              <Card className="p-6">
                <h3 className="mb-4">소개</h3>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </Card>

              {/* 학력 섹션 (있는 경우에만 표시) */}
              {member.education && (
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-chart-3/10 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-chart-3" />
                    </div>
                    <h3>학력</h3>
                  </div>
                  <ul className="space-y-2">
                    {member.education.map((edu, index) => (
                      <li key={index} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* 경력 섹션 (있는 경우에만 표시) */}
              {member.experience && (
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-chart-4/10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-chart-4" />
                    </div>
                    <h3>경력</h3>
                  </div>
                  <ul className="space-y-2">
                    {member.experience.map((exp, index) => (
                      <li key={index} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* 전문 분야 섹션 (있는 경우에만 표시) */}
              {member.expertise && (
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-chart-5/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-chart-5" />
                    </div>
                    <h3>전문 분야</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}