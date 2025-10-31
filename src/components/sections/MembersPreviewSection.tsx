import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { members } from '../../constants/members';
import { SectionHeader } from '../common/SectionHeader';
import { cn } from '../ui/utils';

interface MembersPreviewSectionProps {
  onMemberClick: (memberId: number) => void;
}

const AUTO_ROTATE_INTERVAL = 4000;
const SECTION_TITLE = '구성원';
const SECTION_DESCRIPTION =
  '각 분야 최고의 전문가들이 함께합니다.';

export function MembersPreviewSection({ onMemberClick }: MembersPreviewSectionProps) {
  const displayMembers = useMemo(() => {
    const previewOrder = [1, 6, 7, 2, 5, 8];
    return members
      .filter((member) => previewOrder.includes(member.id))
      .sort((a, b) => previewOrder.indexOf(a.id) - previewOrder.indexOf(b.id));
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (displayMembers.length <= 1) {
      return undefined;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayMembers.length);
    }, AUTO_ROTATE_INTERVAL);

    return () => window.clearInterval(timer);
  }, [displayMembers.length, isPaused]);

  const currentMember = displayMembers[activeIndex] ?? displayMembers[0];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/10 to-background">
      <div className="container mx-auto px-4">
        <SectionHeader title={SECTION_TITLE} description={SECTION_DESCRIPTION} />

        <div className="max-w-4xl mx-auto px-6">
          <div
            className="relative mx-auto max-w-md"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              {currentMember && (
                <motion.div
                  key={currentMember.id}
                  initial={{ x: '100%', opacity: 0 }}
                  animate={{ x: '0%', opacity: 1 }}
                  exit={{ x: '-100%', opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <Card
                    className="overflow-hidden transition-all duration-300 hover:shadow-xl group cursor-pointer"
                    onClick={() => onMemberClick(currentMember.id)}
                  >
                    <div className="relative overflow-hidden aspect-[4/5]">
                      <ImageWithFallback
                        src={currentMember.images.preview}
                        alt={currentMember.name}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="mb-1 text-white">{currentMember.name}</h3>
                        <p className="text-white/80">{currentMember.position}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <p className="text-muted-foreground">{currentMember.department}</p>
                        <ArrowRight className="w-5 h-5 text-primary transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {displayMembers.map((member, index) => (
              <button
                key={member.id}
                type="button"
                className={cn(
                  'h-2.5 w-2.5 rounded-full border border-primary/40 transition-colors',
                  index === activeIndex ? 'bg-primary' : 'bg-transparent',
                )}
                onClick={() => setActiveIndex(index)}
                aria-current={index === activeIndex}
                aria-label={`${member.name} 보기`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
