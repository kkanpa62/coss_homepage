import { useMemo, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SectionHeader } from '../common/SectionHeader';
import { members } from '../../constants/members';

interface MembersCarouselSectionProps {
  onMemberClick?: (memberId: number) => void;
}

const CAROUSEL_ORDER = [1, 6, 7, 2, 5, 3, 4, 8];

export function MembersCarouselSection({ onMemberClick }: MembersCarouselSectionProps) {
  const autoplay = useRef<ReturnType<typeof Autoplay>>(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    }),
  );

  const displayMembers = useMemo(
    () =>
      members
        .filter((member) => CAROUSEL_ORDER.includes(member.id))
        .sort((a, b) => CAROUSEL_ORDER.indexOf(a.id) - CAROUSEL_ORDER.indexOf(b.id)),
    [],
  );

  return (
    <section className="py-16 bg-gradient-to-br from-background via-accent/10 to-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="구성원"
          description="각 분야 최고의 전문가들이 함께합니다."
        />

        <Carousel
          opts={{ align: 'start', loop: true }}
          plugins={[autoplay.current]}
          onMouseEnter={() => autoplay.current?.stop()}
          onMouseLeave={() => autoplay.current?.play()}
          className="relative"
        >
          <CarouselContent className="-ml-2 md:-ml-3 lg:-ml-4">
            {displayMembers.map((member) => (
              <CarouselItem
                key={member.id}
                className="carousel-member-item pl-2 md:pl-3 lg:pl-4"
              >
                <Card
                  className="group h-full overflow-hidden border border-border/30 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl cursor-pointer"
                  onClick={() => onMemberClick?.(member.id)}
                >
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <ImageWithFallback
                      src={member.images.preview}
                      alt={member.name}
                      className="h-full w-full object-cover object-top transition duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 px-5 py-6 text-center">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">{member.name}</h3>
                    <p className="text-sm text-muted-foreground sm:text-base">{member.position}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex left-2 sm:-left-10 top-1/2 -translate-y-1/2 border-border/50 bg-background/70 backdrop-blur hover:bg-background" />
          <CarouselNext className="hidden sm:flex right-2 sm:-right-10 top-1/2 -translate-y-1/2 border-border/50 bg-background/70 backdrop-blur hover:bg-background" />
        </Carousel>
      </div>
    </section>
  );
}
