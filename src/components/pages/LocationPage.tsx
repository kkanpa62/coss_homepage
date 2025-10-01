/**
 * LocationPage 컴포넌트
 * 
 * COSS KNP GROUP의 위치 및 연락처 정보를 표시하는 페이지입니다.
 * 주소, 전화번호, 이메일, 운영시간 정보와 함께 구글맵을 제공합니다.
 */

import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { locationInfo } from '../../constants/location';

/**
 * 연락처 정보 아이템 컴포넌트
 */
interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  colorClass: string;
}

function ContactItem({ icon, title, content, colorClass }: ContactItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className={`w-12 h-12 rounded-lg ${colorClass} flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="mb-1">{title}</h4>
        <div className="text-muted-foreground">
          {content}
        </div>
      </div>
    </div>
  );
}

/**
 * 구글맵 컴포넌트
 */
function GoogleMap() {
  const { address, googleMapsApiKey } = locationInfo;
  
  return (
    <div className="space-y-4">
      {/* 구글맵 임베드 */}
      <Card className="overflow-hidden aspect-video bg-muted hover:shadow-xl transition-all duration-300">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodeURIComponent(address.fullAddress)}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="COSS KNP GROUP 위치"
        />
      </Card>
      
      {/* 구글맵에서 보기 버튼 */}
      <a 
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.fullAddress)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-chart-1 to-chart-5 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
      >
        <MapPin className="w-5 h-5" />
        <span>구글맵에서 크게 보기</span>
      </a>
    </div>
  );
}

export function LocationPage() {
  const { address, contact, businessHours, emailInfo } = locationInfo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-chart-5/5 to-background py-20">
      <div className="container mx-auto px-4">
        {/* 페이지 헤더 */}
        <SectionHeader 
          title="오시는길"
        />

        <div className="max-w-5xl mx-auto">
          {/* 연락처 정보 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* 주소 카드 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <ContactItem
                  icon={<MapPin className="w-6 h-6 text-chart-1" />}
                  title="주소"
                  content={
                    <>
                      {address.street}
                      <br />
                      {address.building}
                      <br />
                      우편번호: {address.postalCode}
                    </>
                  }
                  colorClass="bg-chart-1/10"
                />
              </Card>
            </motion.div>

            {/* 전화번호 카드 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <ContactItem
                  icon={<Phone className="w-6 h-6 text-chart-2" />}
                  title="전화번호"
                  content={
                    <>
                      {contact.phone}
                      <br />
                      <br />
                      {businessHours.weekday}
                      <br />
                      {businessHours.lunch}
                    </>
                  }
                  colorClass="bg-chart-2/10"
                />
              </Card>
            </motion.div>

            {/* 이메일 카드 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <ContactItem
                  icon={<Mail className="w-6 h-6 text-chart-3" />}
                  title="이메일"
                  content={
                    <>
                      {contact.email}
                      <br />
                      <br />
                      {emailInfo.availability}
                      <br />
                      {emailInfo.responseTime}
                    </>
                  }
                  colorClass="bg-chart-3/10"
                />
              </Card>
            </motion.div>
          </div>

          {/* 지도 영역 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <GoogleMap />
          </motion.div>
        </div>
      </div>
    </div>
  );
}