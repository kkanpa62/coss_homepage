/**
 * @file ja.ts
 * @description 일본어 화면 문구 전체. 구조는 types.ts의 SiteContent를 따릅니다(한국어와 항목이 1:1로 대응).
 *
 * 번역 기준 — 공식 일본어 사이트 https://knp-law.co.kr/language/jp/
 * - 공식 사이트와 대응되는 항목은 공식 표기를 그대로 씁니다(괄호만 전각으로 통일):
 *   구성원 4명(金成鎬·孫在鏞·朴洋湖·村上浩一)의 이름·학력·경력·소개, K·N·P 설명, 주소, 메뉴 이름.
 * - 공식 사이트에 없는 항목은 공식 사이트의 용어·문체에 맞춥니다:
 *   クライアント(お客様 대신), デザイン(한국 デザイン保護法 기준), 戦略樹立, 国内外, 3カ国語, タッチセンサ, バイオテック.
 * - 회사명은 이 사이트의 이름(COSS KNP Group), 직함은 한국어 페이지와 같게 둡니다(손재용 → 代表弁理士, 무라카미 → 次長).
 * - 한자를 알 수 없는 구성원 이름은 가타카나로 씁니다. 한자 이름에는 reading(읽는 법)을 붙입니다.
 */

import { SiteContent } from './types';

export const ja: SiteContent = {
  meta: {
    title: 'COSS KNP GROUP',
    description: '高度なAI技術と豊富な実務経験で、クライアントの成長の原動力を確保し、差別化された知的財産ソリューションをお届けします。',
  },

  labels: {
    more: '詳しく見る',
    allMembers: '全体を見る',
    home: 'ホームへ移動',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    mainMenu: 'メインメニュー',
    scrollDown: '下へスクロール',
    serviceIndex: '業務紹介の目次',
    railPrev: '前の項目を見る',
    railNext: '次の項目を見る',
    themeToLight: 'ライトテーマに切り替え',
    themeToDark: 'ダークテーマに切り替え',
    language: '言語の選択',
  },

  navigation: {
    home: 'ホーム',
    about: '会社紹介',
    services: '業務紹介',
    members: 'プロフィール紹介',
    news: 'ニュース',
    location: '交通アクセス',
  },

  home: {
    hero: {
      eyebrow: 'COSS KNP GROUP',
      title: ['人工知能で', '未来を設計します'],
      description:
        '高度なAI技術と豊富な実務経験で、クライアントの成長の原動力を確保し、差別化された知的財産ソリューションをお届けします。',
    },
    sections: {
      members: { title: 'プロフィール紹介', description: '各分野の最高の専門家がそろっています。' },
      expertise: { title: '業務紹介', description: '知的財産権の全分野にわたり、差別化された専門サービスを提供します' },
      strengths: { title: '私たちの強み', description: '専門性とグローバルネットワークで、クライアントの知的財産権を守ります' },
    },
    strengths: {
      technology: {
        title: '先端技術の専門性',
        description: 'メタバース、AI、ロボット、バイオテック、化学など、先端技術分野で培った専門知識と経験をもとに、クライアントの革新的なアイデアを効果的に保護します。',
      },
      team: {
        title: '専門弁理士チーム',
        description: '各分野の専門家がクライアントに合わせたソリューションを提供し、継続的な研究と研鑽によって最新の法律動向にいち早く対応します。',
      },
      network: {
        title: 'グローバルネットワーク',
        description: 'PCTやマドリッド協定議定書などの国際出願制度と、世界各国の現地代理人ネットワークを活用し、グローバル市場における知的財産権の保護を支援します。',
      },
    },
  },

  about: {
    intro: {
      eyebrow: 'About COSS KNP GROUP',
      title: ['COSS KNPとともに', '知的財産権の未来へ'],
    },
    paragraphs: [
      'COSS KNP Groupは、急速に変化する技術環境の中で、クライアントの革新的なアイデアや創作物を法的に保護し、その価値を極大化することを目指して設立されました。',
      '私たちは単なる法律サービスにとどまらず、クライアントの事業戦略と連動した総合的な知的財産ソリューションを提供し、クライアントの競争力強化に貢献しています。',
    ],
    coss: {
      lead: 'COSS',
      before: ' KNP Groupは、創造的かつ独創的な戦略と標準（',
      after: '）を生み出し、クライアントの革新的なアイデアを守り、発展させることを目指しています。',
    },
    knpIntro: {
      title: 'KNP',
      subtitle: 'Key Strategy · New Technology · Partner',
    },
    // 공식 사이트 "KNP紹介文"과 같은 문장(회사명만 COSS KNP Group)
    knp: {
      K: {
        title: 'Key Strategy',
        subtitle: '核心戦略樹立の専門家',
        description: 'COSS KNP Groupは、クライアントのための核心戦略樹立の専門家です。クライアントのIPとコンサルティングを通じたクライアントの知的財産の価値を極大化し、新たな市場をクライアントと共に開いていきます。',
      },
      N: {
        title: 'New Technology',
        subtitle: 'Navigation of your high technology',
        description: 'COSS KNP Groupは、メタバース、ロボット、AI、タッチセンサ、バイオテック、化学分野等の先端技術の専門家です。クライアントの先端技術の航路を開拓し、特許を発掘します。',
      },
      P: {
        title: 'Partner',
        subtitle: 'クライアントの心強いパートナー',
        description: 'COSS KNP Groupは、クライアントを満足させることができる最高の知的財産サービスと最善のソリューションを提供します。いつでも信頼されるクライアントの心強いパートナーになります。',
      },
    },
  },

  services: {
    intro: {
      eyebrow: 'Services',
      title: ['業務紹介'],
      description: '知的財産権の全分野にわたり、差別化された専門サービスを提供します',
    },
    scopeLabel: '対応業務',
    items: {
      1: {
        title: '特許',
        description: '革新的な発明や技術を法的に保護し、競争優位を確保できるよう、特許出願から登録、活用までの全過程を支援します。AI技術特許を含む先端技術分野の専門的な特許戦略を提供します。',
        highlights: [
          { title: '特許出願', description: '国内外の特許出願代理とAI技術特許の戦略樹立' },
          { title: '特許分析', description: '先行技術調査と特許マップの作成' },
        ],
        services: [
          '特許出願及び中間処理',
          '実用新案の出願及び登録',
          '先行技術調査及び特許性の判断',
          '特許ポートフォリオの構築及び管理',
          '無効審判及び訂正審判',
          '特許ライセンス及び技術移転',
        ],
      },
      2: {
        title: '標準特許',
        description: '国際標準及び産業標準に必須の技術に関する特許について、標準化の過程における特許戦略の樹立とFRANDライセンスを支援します。',
        highlights: [
          { title: '標準化戦略', description: '標準特許ポートフォリオの構築' },
          { title: 'FRANDライセンス', description: '公正かつ合理的なライセンス' },
        ],
        services: [
          '標準必須特許（SEP）の分析',
          '標準化機関への対応戦略',
          'FRAND宣言及び管理',
          'パテントプールへの参加支援',
          '標準特許の価値評価',
          '標準特許紛争への対応',
        ],
      },
      3: {
        title: '商標',
        description: 'ブランド価値を保護し、市場での競争力を強化できるよう、商標出願から権利保護まで総合的なサービスを提供します。',
        highlights: [
          { title: 'ブランド保護', description: '商標権の確保及び管理' },
          { title: '国際商標', description: 'マドリッド協定議定書の活用' },
        ],
        services: [
          '商標出願及び登録',
          '商標調査及び登録可能性の調査',
          'サービスマークの出願及び登録',
          '商標の更新及び管理',
          '商標の異議申立て及び取消審判',
          '商標権侵害への対応及び訴訟',
        ],
      },
      4: {
        title: 'IPコンサルティング',
        description: '企業の知的財産権戦略の樹立からポートフォリオ管理まで、体系的かつ専門的なコンサルティングサービスを提供します。',
        highlights: [
          { title: '戦略樹立', description: 'IPポートフォリオの企画' },
          { title: '技術分析', description: '特許マップ及びFTO分析' },
        ],
        services: [
          'IPポートフォリオ戦略の樹立',
          '特許マップの作成及び技術動向分析',
          '自由実施分析（FTO Analysis）',
          'IPデューデリジェンス（Due Diligence）',
          '技術移転及びライセンス戦略',
          'IP教育及び役職員研修',
        ],
      },
      5: {
        title: 'デザイン',
        description: '製品の独創的な外観デザインを保護し、市場での差別化と競争優位の確保を支援します。',
        highlights: [
          { title: 'デザイン登録', description: '製品の外観デザインの保護' },
          { title: '海外デザイン', description: '国際的なデザイン保護戦略' },
        ],
        services: [
          'デザイン出願及び登録',
          'デザイン調査及び登録可能性の調査',
          '複数デザイン出願の戦略樹立',
          'デザイン権侵害の分析及び対応',
          '無効審判及び権利範囲確認審判',
          'ハーグ協定による海外出願',
        ],
      },
      6: {
        title: '訴訟及び紛争',
        description: '知的財産権の侵害及び紛争において、効果的な法的対応によりクライアントの権益を保護し、最適な解決策を提示します。',
        highlights: [
          { title: '侵害対応', description: '迅速な権利救済' },
          { title: '紛争解決', description: '戦略的な訴訟遂行' },
        ],
        services: [
          '特許侵害訴訟及び防御',
          '商標権紛争の解決',
          '無効審判及び取消審判',
          '権利範囲確認審判',
          '損害賠償請求訴訟',
          '裁判外紛争解決（ADR）',
        ],
      },
    },
  },

  members: {
    intro: {
      eyebrow: 'Members',
      title: ['プロフィール紹介'],
      description: 'COSS KNP GROUPの専門家を紹介します',
    },
    detailLabels: {
      back: '目録へ戻る',
      bio: '紹介',
      education: '学歴',
      experience: '経歴',
      expertise: '専門分野',
    },
    items: {
      // 공식 사이트 대응: 金成鎬（キム・ソンホ）
      1: {
        name: '金成鎬',
        reading: 'キム・ソンホ',
        position: 'Kim, Sung ho. Patent Attorney.',
        department: '代表弁理士',
        bio: 'KAIST電気電子工学専攻出身で、国内外の特許実務経験が豊富な弁理士です。韓国語、英語、日本語の3カ国語を活用し、国際特許業務を行っています。',
        education: ['韓国科学技術院（KAIST）電気電子工学学士', '韓国科学技術院（KAIST）電気電子工学修士'],
        experience: ['第33回弁理士試験合格', '金・張法律事務所', '新樹グローバル・アイピー特許業務法人（日本）', 'ベンチャー法律支援センター', 'アンダーソン・毛利・友常法律事務所'],
        expertise: ['大企業、中堅企業の特許出願、特許審判、特許訴訟', '特許コンサルティング', '日本企業の特許コンサルティング', '国内外特許出願', '韓国語、英語、日本語の3カ国語活用業務'],
      },
      // 공식 사이트 대응: 孫在鏞（ソン・ジェヨン）— 직함은 한국어 페이지와 같게 代表弁理士
      2: {
        name: '孫在鏞',
        reading: 'ソン・ジェヨン',
        position: 'Son, Jae Yong. Patent Attorney.',
        department: '代表弁理士',
        bio: 'KAIST機械工学専攻出身で、標準特許の発掘及び大学研究所の特許業務に専門性を備えた弁理士です。韓国語、英語、日本語の3カ国語を活用し、国際特許業務を行っています。',
        education: ['韓国科学技術院（KAIST）機械工学学士', '韓国科学技術院（KAIST）自動化及び設計工学修士'],
        experience: ['第40回弁理士試験合格', '大宇重工業 鉄道車両研究所', 'ALSTOM社 技術研修（フランス）', '元 新樹グローバル・アイピー特許業務法人（日本）'],
        expertise: ['標準特許の発掘及び登録', '大学研究所の特許出願、特許審判、特許訴訟', '特許コンサルティング', '日本企業の特許コンサルティング', '国内外特許出願', '韓国語、英語、日本語の3カ国語活用業務'],
      },
      // 공식 사이트 대응: 朴洋湖（パク・ヤンホ）
      3: {
        name: '朴洋湖',
        reading: 'パク・ヤンホ',
        position: 'Park, Yang ho. Patent Attorney.',
        department: 'パートナー弁理士',
        bio: '光云大学で電気工学、高麗大学で電子コンピュータ工学を専攻し、スタートアップ及び中小/中堅企業の特許業務に専門性を備えた弁理士です。商標及びデザインのコンサルティング分野でも豊富な経験を有しています。',
        education: ['光云大学電気工学学士', '高麗大学電子コンピュータ工学修士'],
        experience: ['大韓電線株式会社 電力機器技術開発チーム', '第39回弁理士試験合格', '特許法人ロイヤル', 'ウィズ特許法律事務所代表', '京畿地域創業保育センター特許コンサルティング諮問役'],
        expertise: ['スタートアップ、中小/中堅企業の特許コンサルティング', '特許審判、特許訴訟', '商標/デザインコンサルティング'],
      },
      4: {
        name: 'オ・ヨンテク',
        position: 'Oh, Yong Taek. Senior Expert.',
        department: 'シニアエキスパート',
        bio: 'ソウル科学技術大学電子情報工学専攻出身で、電気、電子、通信、半導体分野の標準特許の発掘及び登録に専門性を備えたシニアエキスパートです。',
        education: ['ソウル科学技術大学電子情報工学学士'],
        experience: ['COSS-KNP'],
        expertise: ['標準特許の発掘及び登録', '電気/電子/通信/半導体', 'ディスプレイ/LEDパッケージ/照明', 'タッチセンサ/圧力センサ/マシンラーニング', '機械/機構の特許コンサルティング', '特許出願', '国際特許出願'],
      },
      5: {
        name: 'ムン・ヒョンドン',
        position: 'Moon, Hyun Don. Patent Attorney.',
        department: '弁理士',
        bio: '高麗大学化工生命工学専攻出身で、バイオテック及び人工知能技術分野の特許業務に専門性を備えた弁理士です。技術価値評価業務も行っています。',
        education: ['高麗大学化工生命工学科学士'],
        experience: ['COSS-KNP 特許弁理士'],
        expertise: ['標準特許の発掘及び登録', '応用生化学/高分子化学/ナノ化学工学', '半導体工学/生物工程工学/石油工業化学', 'バイオテック及びマシンラーニング/ディープラーニングモデル', '人工知能(AI)技術', '特許コンサルティング/特許出願/技術価値評価', '国際特許出願'],
      },
      6: {
        name: 'ソン・ジンソル',
        position: 'Sung, Jin Sol. Patent Attorney.',
        department: '弁理士',
        bio: '中央大学（韓国）化学新素材工学部専攻出身で、電子材料、有機材料、高分子材料分野の特許業務に専門性を備えた弁理士です。商標及びデザイン分野も扱っています。',
        education: ['中央大学（韓国）化学新素材工学部学士'],
        experience: ['COSS-KNP 特許弁理士'],
        expertise: ['標準特許の発掘及び登録', '電子材料/有機材料/高分子材料/エネルギー素材', '化学反応工学（Chemical reaction engineering）', '生体材料/工程システム/ナノ材料', '特許コンサルティング/特許出願/特許審判', '商標/デザイン'],
      },
      7: {
        name: 'キル・ジンソン',
        position: 'Gil, Jin Sung. Patent Attorney.',
        department: '弁理士',
        bio: 'ソウル大学化学部専攻出身で、生体工学、医療機器分野及び人工知能技術分野の特許業務に専門性を備えた弁理士です。技術価値評価業務も行っています。',
        education: ['ソウル大学化学部学士'],
        experience: ['COSS-KNP 特許弁理士'],
        expertise: ['標準特許の発掘及び登録', '生体工学/医療機器/光工学', '人工知能/マシンラーニング/ディープラーニング', '有機/無機化学/分子生化学/高分子化学/ナノ素材化学', '特許コンサルティング/特許出願/技術価値評価', '国際特許出願'],
      },
      // 공식 사이트 대응: 村上浩一（ムラカミ・コウイチ）— 소개·경력은 공식 표기, 직함은 한국어 페이지와 같게 次長
      9: {
        name: '村上浩一',
        reading: 'ムラカミ・コウイチ',
        position: 'Murakami, Koichi. KNP Advisor.',
        department: '次長',
        bio: '主に日本からの韓国業務の管理/クライアントとの連絡/特許明細書の翻訳を担当しています。',
        experience: ['大一国際特許法律事務所（2002〜2003）', '崔金特許事務所（2003〜2012）', '現）COSS-KNP特許法律事務所（2012〜現在）'],
      },
    },
  },

  news: {
    intro: {
      eyebrow: 'News',
      title: ['ニュース'],
      description: 'COSS KNP GROUPの最新情報と知的財産権業界の動向をご確認ください',
    },
    linkLabel: '記事を読む（韓国語）',
    items: {
      1: {
        title: '「スライドでロック解除」特許訴訟、アップルの勝訴が確定',
        date: '2025年9月5日',
        description: '米連邦最高裁判所は、アップルの「スライドでロック解除（slide to unlock）」特許をめぐる訴訟で、アップル勝訴の最終判決を下しました。スマートフォンのUI特許の重要性を改めて示した判例と評価されています。',
        source: 'The Guru',
      },
      2: {
        title: '韓国特許庁、「知識財産処」への格上げを本格推進',
        date: '2025年8月19日',
        description: '韓国政府は、特許庁を「知識財産処」に格上げする方針を本格的に推進すると発表しました。知的財産権の重要性が高まる中、政府レベルでの政策推進力を強化し、国家知的財産戦略の司令塔としての役割を拡大する予定です。',
        source: '韓国日報',
      },
    },
  },

  reports: {
    listIntro: { title: '月刊 知的財産ニュース', description: '韓国の知的財産に関する主な報道を毎月まとめてご紹介します' },
    newsListIntro: { title: 'お知らせ' },
    eyebrow: 'Monthly IP News',
    sections: {
      litigation: '紛争',
      administration: '政策・行政',
      other: '技術・産業',
      features: '注目記事',
    },
    articleCount: '記事 {count}件',
    sectionCount: '{count}件',
    open: 'レポートを見る',
    readFull: '全文を読む',
    collapse: '閉じる',
    back: 'ニュース一覧へ',
    sectionIndex: 'レポートの目次',
    newer: '翌月',
    older: '前月',
    loading: 'レポートを読み込んでいます',
    loadFailed: 'レポートを読み込めませんでした。',
    reload: '再読み込み',
    link: { original: '元記事', related: '関連記事' },
    sourceLanguageNote: '（韓国語）',
  },

  location: {
    intro: {
      eyebrow: 'Location',
      title: ['交通アクセス'],
    },
    contactLabels: {
      address: '住所',
      phone: '電話',
      email: 'Eメール',
      postalCode: '郵便番号',
    },
    // 공식 사이트 표기: ソウル市江南区道谷路111、ミジンビル5階 (화면에서는 두 줄로 나눠 표시)
    address: {
      street: 'ソウル市江南区道谷路111',
      building: 'ミジンビル5階',
    },
    phoneDisplay: '+82-2-552-8381',
    businessHours: {
      weekday: '平日 09:00〜18:00',
      lunch: '昼休み 12:00〜13:00',
    },
    emailInfo: {
      availability: '24時間受付',
      responseTime: '営業日基準で24時間以内にご返信いたします',
    },
    map: {
      iframeTitle: 'COSS KNP GROUP 会社の位置',
      loading: '地図を読み込んでいます...',
      missingKeyTitle: '地図を読み込めません',
      missingKeyMessage: 'Google Maps APIキーが設定されていません。',
      errorTitle: '地図の読み込みエラー',
      errorMessage: 'Google マップを表示できません。インターネット接続またはAPIキーの設定をご確認ください。',
      retry: '再試行',
      openInMaps: 'Google マップで見る',
      openLarge: 'Google マップで大きく見る',
    },
  },

  footer: {
    addressTitle: 'ADDRESS',
    contactTitle: 'CONTACT',
  },
};
