/**
 * NewsPage 컴포넌트
 * 
 * COSS KNP GROUP의 최신 뉴스 및 소식을 표시하는 페이지입니다.
 * 지식재산권 관련 주요 뉴스와 업계 동향을 소개합니다.
 */

import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { SectionHeader } from '../common/SectionHeader';
import { Calendar, ExternalLink, Newspaper } from 'lucide-react';
import { newsItems } from '../../constants/news';

/**
 * 뉴스 카드 컴포넌트
 */
interface NewsCardProps {
  title: string;
  date: string;
  description: string;
  source: string;
  url: string;
  index: number;
}

function NewsCard({ title, date, description, source, url, index }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 flex flex-col">
        {/* 날짜 및 출처 */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{date}</span>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Newspaper className="w-3 h-3" />
            {source}
          </Badge>
        </div>

        {/* 제목 */}
        <h3 className="mb-4 break-keep">
          {title}
        </h3>

        {/* 설명 */}
        <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
          {description}
        </p>

        {/* 자세히 보기 버튼 */}
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button 
            variant="outline" 
            className="w-full group hover:bg-gradient-to-r hover:from-chart-1 hover:to-chart-5 hover:text-white hover:border-transparent transition-all duration-300"
          >
            <span>자세히 보기</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </Card>
    </motion.div>
  );
}

export function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-chart-4/5 to-background py-20">
      <div className="container mx-auto px-4">
        {/* 페이지 헤더 */}
        <SectionHeader 
          title="뉴스 / 소식"
          description="COSS KNP GROUP의 최신 소식과 지식재산권 업계 동향을 확인하세요"
        />

        {/* 뉴스 그리드 */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((news, index) => (
            <NewsCard
              key={news.id}
              title={news.title}
              date={news.date}
              description={news.description}
              source={news.source}
              url={news.url}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}