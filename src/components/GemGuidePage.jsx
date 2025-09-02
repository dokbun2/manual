import { useState } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Edit, Wand2, Palette, BookOpen, Film, Image, Layers, Music, Copy, Check } from 'lucide-react'
import gemGuideImage from '@/assets/Snipaste_2025-09-02_18-36-17.jpg'
import overlayImage from '@/assets/2.jpg'

const GemGuidePage = () => {
  const [activeStage, setActiveStage] = useState(1);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const stages = [
    {
      id: 1,
      title: "[공통사항] 젬 지침 만들기",
      shortTitle: "영화&CF 프레임워크",
      icon: <BookOpen className="h-5 w-5" />,
      displayIcon: <BookOpen className="h-8 w-8 text-blue-600" />,
      content: "위의 스테이지별 젬 제목은 사용하시기 편하게 우측 끝에 복사버튼을 만들어놓았습니다.",
      process: "이제 영화와 CF의 젬지침을 설정하셨으면 젬에서 JSON 파일을 출력하여 멋진 영상 만드세요"
    },
    {
      id: 2,
      title: "JSON EDITOR 사용방법",
      shortTitle: "JSON EDITOR 사용법",
      icon: <Edit className="h-5 w-5" />,
      displayIcon: <Edit className="h-8 w-8 text-green-600" />,
      content: "시놉시스를 바탕으로 구체적인 시나리오를 작성하는 단계입니다. 스테이지1에서 창출한 아이디어를 활용하여 장면별 대사, 동작, 감정선을 상세하게 구성합니다. AIFI는 시나리오 작성 템플릿과 포맷팅 도구를 제공하여 전문적인 스크립트를 효율적으로 완성할 수 있도록 지원합니다.",
      process: "JSON 에디터를 사용하는 방법"
    }
  ];
  
  // 스테이지 3~8의 데이터는 유지하되 사이드바에서만 제외
  const allStages = [
    ...stages,
    {
      id: 3,
      title: "[스테이지3] 컨셉아트 단계",
      shortTitle: "컨셉아트",
      icon: <Palette className="h-5 w-5" />,
      displayIcon: <Palette className="h-8 w-8 text-purple-600" />,
      content: "시나리오를 시각적으로 구현하기 위한 컨셉아트 제작 단계입니다. 스테이지2에서 작성한 시나리오를 바탕으로 주요 장면의 비주얼 컨셉, 색감, 분위기를 설정합니다. AIFI의 아트 도구와 레퍼런스 시스템을 활용하여 영상의 전체적인 톤앤매너를 확립할 수 있습니다.",
      process: "2번 넣기 - 시나리오 기반 비주얼 설정"
    },
    {
      id: 4,
      title: "[스테이지4] 컨셉아트 프롬프트 생성단계",
      shortTitle: "아트 프롬프트",
      icon: <Wand2 className="h-5 w-5" />,
      displayIcon: <Wand2 className="h-8 w-8 text-orange-600" />,
      content: "컨셉아트를 AI로 생성하기 위한 프롬프트 작성 단계입니다. 스테이지3에서 설정한 비주얼 컨셉을 구체적인 AI 프롬프트로 변환합니다. AIFI의 프롬프트 최적화 도구를 활용하여 원하는 스타일과 분위기를 정확하게 표현할 수 있는 텍스트 명령어를 생성합니다.",
      process: "3번 넣기 - 컨셉아트를 프롬프트로 변환"
    },
    {
      id: 5,
      title: "[스테이지5] 장면분할 단계",
      shortTitle: "장면분할",
      icon: <Layers className="h-5 w-5" />,
      displayIcon: <Layers className="h-8 w-8 text-pink-600" />,
      content: "시나리오와 컨셉아트 프롬프트를 바탕으로 영상을 세부 장면으로 분할하는 단계입니다. 스테이지2의 시나리오와 스테이지4의 프롬프트를 활용하여 각 장면의 시작과 끝, 전환점을 명확하게 정의합니다. AIFI의 스토리보드 도구로 장면별 타이밍과 연출을 체계적으로 계획할 수 있습니다.",
      process: "2,4번 넣기 - 시나리오와 프롬프트 통합"
    },
    {
      id: 6,
      title: "[스테이지6] 이미지프롬프트 생성단계",
      shortTitle: "이미지 프롬프트",
      icon: <Image className="h-5 w-5" />,
      displayIcon: <Image className="h-8 w-8 text-indigo-600" />,
      content: "각 장면에 필요한 이미지를 생성하기 위한 상세 프롬프트 작성 단계입니다. 스테이지4의 컨셉아트 프롬프트와 스테이지5의 장면분할 정보를 통합하여 각 장면별로 구체적인 이미지 생성 프롬프트를 만듭니다. AIFI의 프롬프트 라이브러리와 최적화 기능으로 일관성 있는 비주얼을 구현할 수 있습니다.",
      process: "4,5번 넣기 - 장면별 이미지 프롬프트 생성"
    },
    {
      id: 7,
      title: "[스테이지7] 영상 프롬프트 생성단계",
      shortTitle: "영상 프롬프트",
      icon: <Film className="h-5 w-5" />,
      displayIcon: <Film className="h-8 w-8 text-teal-600" />,
      content: "정적인 이미지를 동적인 영상으로 변환하기 위한 프롬프트 작성 단계입니다. 스테이지5의 장면분할과 스테이지6의 이미지프롬프트를 결합하여 카메라 움직임, 트랜지션, 애니메이션 효과를 포함한 영상 생성 프롬프트를 만듭니다. AIFI의 모션 템플릿과 타이밍 도구로 생동감 있는 영상을 제작할 수 있습니다.",
      process: "5,6번 넣기 - 동적 영상 프롬프트 생성"
    },
    {
      id: 8,
      title: "[스테이지8] 오디오 프롬프트 생성단계",
      shortTitle: "오디오 프롬프트",
      icon: <Music className="h-5 w-5" />,
      displayIcon: <Music className="h-8 w-8 text-red-600" />,
      content: "영상에 어울리는 오디오 요소를 생성하기 위한 프롬프트 작성 단계입니다. 스테이지5의 장면분할 정보를 활용하여 배경음악, 효과음, 앰비언스 사운드 등의 오디오 프롬프트를 생성합니다. AIFI의 사운드 디자인 도구와 음향 라이브러리로 영상의 몰입감을 극대화할 수 있습니다.",
      process: "5번 넣기 - 장면별 오디오 프롬프트 생성"
    }
  ];

  const currentStage = allStages.find(stage => stage.id === activeStage);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-lg border-r border-gray-200 fixed h-full overflow-y-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">GEM지침</h2>
            <p className="text-sm text-gray-600 mb-6">GEMINI 스테이지별 가이드</p>
            <nav className="space-y-2">
              {stages.filter(stage => stage.id !== 2).map((stage) => (
                <Button
                  key={stage.id}
                  variant={activeStage === stage.id ? "default" : "ghost"}
                  className="w-full justify-start text-left"
                  onClick={() => setActiveStage(stage.id)}
                >
                  {stage.icon}
                  <span className="ml-2 text-sm">{stage.shortTitle}</span>
                </Button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-80 p-8">
          {currentStage && (
            <motion.div
              key={currentStage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{currentStage.title}</h1>
                <p className="text-lg text-blue-600 font-medium">{currentStage.process}</p>
              </div>

              <Card className="shadow-xl">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      {currentStage.displayIcon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl">JSON EDITOR 사용법</CardTitle>
                      <div className="text-sm text-gray-500 mt-1">아래를 보시고 쉽게 아실 수 있으세요</div>
                    </div>
                  </div>
                </CardHeader>
                
                {/* 이미지 섹션 추가 - 스테이지 1일 때만 표시 */}
                {activeStage === 1 && (
                  <div className="px-6 py-4">
                    <div className="w-full space-y-4">
                      {/* 텍스트 섹션 */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                        <h2 className="text-gray-800 text-xl font-bold mb-2">1. 제미나이 로그인을 하고 젬 지침을 생성합니다.</h2>
                        <p className="text-gray-600 text-sm">젬 지침을 업로드할때 헷갈리시는 부분이 있으시니 아래를 보고 차분히 따라하세요</p>
                      </div>
                      
                      {/* Gem 생성 가이드 이미지 (위) */}
                      <div className="w-full overflow-hidden rounded-lg shadow-md">
                        <img 
                          src={overlayImage} 
                          alt="Gem 생성 가이드" 
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      
                      {/* AIFI Gem 지침 가이드 이미지 (아래) */}
                      <div className="w-full overflow-hidden rounded-lg shadow-md">
                        <img 
                          src={gemGuideImage} 
                          alt="AIFI Gem 지침 가이드" 
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      
                      {/* 젬 지침 제목 참조 */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-gray-800 font-bold mb-3 text-xl">2. 젬 지침 제목 참조</h3>
                        <div className="space-y-2">
                          {[
                            "영화&CF프레임워크 지침만들기",
                            "JSON EDITOR 사용방법",
                            "[스테이지3] 컨셉아트 단계(2번 넣기)",
                            "[스테이지4] 컨셉아트 프롬프트 생성단계(3번 넣기)",
                            "[스테이지5] 장면분할 단계(2,4번 넣기)",
                            "[스테이지6] 이미지프롬프트 생성단계(4,5번 넣기)",
                            "[스테이지7] 영상 프롬프트 생성단계(5, 6번넣기)",
                            "[스테이지8] 오디오 프롬프트 생성단계(5번 넣기)"
                          ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md transition-colors">
                              <span className="text-gray-700">{item}</span>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="ml-2 h-7 px-2"
                                onClick={() => {
                                  navigator.clipboard.writeText(item);
                                  setCopiedIndex(index);
                                  setTimeout(() => setCopiedIndex(null), 2000);
                                }}
                              >
                                {copiedIndex === index ? (
                                  <Check className="h-4 w-4 text-green-600" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <CardContent>
                  <CardDescription className="text-lg leading-relaxed text-gray-700">
                    {currentStage.content}
                  </CardDescription>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">💡 CF 젬지침도 동일하게 적용</h3>
                    <p className="text-blue-800">{currentStage.process}</p>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GemGuidePage;


