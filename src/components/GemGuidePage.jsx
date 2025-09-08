import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Edit, Wand2, Palette, BookOpen, Film, Image, Layers, Music, Copy, Check, FileText, CheckCircle, FileJson, AlertTriangle } from 'lucide-react'
import gemGuideImage from '@/assets/Snipaste_2025-09-02_18-36-17.jpg'
import overlayImage from '@/assets/2.jpg'
import stage2Image from '@/assets/stage2.jpg'
import warningImage from '@/assets/1-1.jpg'
import stagefolderImage from '@/assets/stagefolder.jpg'
import stageguideImage from '@/assets/stageguide.png'

const GemGuidePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [selectedStage, setSelectedStage] = useState(null);

  const stages = [
    {
      id: 1,
      title: "▶ 1단계 : 젬 지침 만들기 - 영화 & CF 공통사항",
      shortTitle: "1단계 : 젬지침 만들기",
      icon: <BookOpen className="h-5 w-5" />,
      content: "👉 위의 스테이지별 젬 제목은 복사해서 사용하시고 <span class='text-red-600 font-bold'>스테이지 1,2,5</span>는 <span class='text-blue-600 font-bold'>영화</span>와 <span class='text-violet-600 font-bold'>CF</span>를 구분하세요",
      process: "이제 영화와 CF의 젬지침을 설정하셨으면 젬에서 JSON 파일을 출력하여 멋진 영상 만드세요"
    },
    {
      id: 2,
      title: "2단계 : AIFI 프레임워크란?",
      shortTitle: "2단계 : 전체흐름 살펴보기",
      icon: <Film className="h-5 w-5" />,
      content: "Google Gemini Gem을 통해 출력된 JSON파일 중 스테이지 2, 4, 5, 6, 7, 8번 파일로 AIFI 웹페이지를 통해 영상 제작을 합니다.",
      process: "AIFI 프레임워크에 입문하기 전에 간단하게 Workflow를 확인하세요"
    },
    {
      id: 3,
      title: "3단계: JSON 출력하기",
      shortTitle: "3단계 : JSON 출력하기",
      icon: <FileJson className="h-5 w-5" />,
      content: "AIFI 프레임워크를 사용하기 전 반드시 확인해야 할 중요한 사항들입니다.",
      process: "JSON 파일 생성 시 주의사항을 숙지하고 안전하게 출력하세요"
    }
  ];

  const [activeStage, setActiveStage] = useState(() => {
    const stageParam = searchParams.get('stage');
    return stageParam ? parseInt(stageParam, 10) : 1;
  });

  // 단계 변경 함수 - URL도 함께 업데이트
  const handleStageChange = (newStage) => {
    setActiveStage(newStage);
    setSearchParams({ stage: newStage.toString() }, { replace: true });
  };

  // 스테이지별 상세 정보
  const stageDetails = {
    2: {
      title: "스테이지2 상세정보",
      description: "Stage 1에서 생성된 JSON 1번 파일을 넣습니다.",
      color: "text-blue-300"
    },
    3: {
      title: "스테이지3 상세정보", 
      description: "Stage 2에서 생성된 JSON 2번 파일을 넣습니다.",
      color: "text-green-300"
    },
    4: {
      title: "스테이지4 상세정보",
      description: "Stage 3에서 생성된 JSON 3번 파일을 넣습니다.",
      color: "text-orange-300"
    },
    5: {
      title: "스테이지5 상세정보",
      description: "Stage 2,4에서 생성된 JSON 파일 2번,4번을 넣습니다.",
      color: "text-purple-300"
    },
    6: {
      title: "스테이지6 상세정보",
      description: "Stage 4,5에서 생성된 JSON 파일 4번, 5번(전부 or 씬별)을 넣습니다.",
      color: "text-pink-300"
    },
    7: {
      title: "스테이지7 상세정보",
      description: "Stage 5,6에서 생성된 JSON 파일 5,6번을 넣습니다.",
      color: "text-cyan-300"
    },
    8: {
      title: "스테이지8 상세정보",
      description: "Stage 5에서 생성된 JSON 파일 5번을 넣습니다.",
      color: "text-indigo-300"
    }
  };
  
  // 스테이지 3~8의 데이터는 유지하되 사이드바에서만 제외
  const allStages = [
    ...stages,
    {
      id: 4,
      title: "[스테이지3] 컨셉아트 단계",
      shortTitle: "컨셉아트",
      icon: <Palette className="h-5 w-5" />,
      content: "시나리오를 시각적으로 구현하기 위한 컨셉아트 제작 단계입니다. 스테이지2에서 작성한 시나리오를 바탕으로 주요 장면의 비주얼 컨셉, 색감, 분위기를 설정합니다. AIFI의 아트 도구와 레퍼런스 시스템을 활용하여 영상의 전체적인 톤앤매너를 확립할 수 있습니다.",
      process: "2번 넣기 - 시나리오 기반 비주얼 설정"
    },
    {
      id: 5,
      title: "[스테이지4] 컨셉아트 프롬프트 생성단계",
      shortTitle: "아트 프롬프트",
      icon: <Wand2 className="h-5 w-5" />,
      content: "컨셉아트를 AI로 생성하기 위한 프롬프트 작성 단계입니다. 스테이지3에서 설정한 비주얼 컨셉을 구체적인 AI 프롬프트로 변환합니다. AIFI의 프롬프트 최적화 도구를 활용하여 원하는 스타일과 분위기를 정확하게 표현할 수 있는 텍스트 명령어를 생성합니다.",
      process: "3번 넣기 - 컨셉아트를 프롬프트로 변환"
    },
    {
      id: 6,
      title: "[스테이지5] 장면분할 단계",
      shortTitle: "장면분할",
      icon: <Layers className="h-5 w-5" />,
      content: "시나리오와 컨셉아트 프롬프트를 바탕으로 영상을 세부 장면으로 분할하는 단계입니다. 스테이지2의 시나리오와 스테이지4의 프롬프트를 활용하여 각 장면의 시작과 끝, 전환점을 명확하게 정의합니다. AIFI의 스토리보드 도구로 장면별 타이밍과 연출을 체계적으로 계획할 수 있습니다.",
      process: "2,4번 넣기 - 시나리오와 프롬프트 통합"
    },
    {
      id: 7,
      title: "[스테이지6] 이미지프롬프트 생성단계",
      shortTitle: "이미지 프롬프트",
      icon: <Image className="h-5 w-5" />,
      content: "각 장면에 필요한 이미지를 생성하기 위한 상세 프롬프트 작성 단계입니다. 스테이지4의 컨셉아트 프롬프트와 스테이지5의 장면분할 정보를 통합하여 각 장면별로 구체적인 이미지 생성 프롬프트를 만듭니다. AIFI의 프롬프트 라이브러리와 최적화 기능으로 일관성 있는 비주얼을 구현할 수 있습니다.",
      process: "4,5번 넣기 - 장면별 이미지 프롬프트 생성"
    },
    {
      id: 8,
      title: "[스테이지7] 영상 프롬프트 생성단계",
      shortTitle: "영상 프롬프트",
      icon: <Film className="h-5 w-5" />,
      content: "정적인 이미지를 동적인 영상으로 변환하기 위한 프롬프트 작성 단계입니다. 스테이지5의 장면분할과 스테이지6의 이미지프롬프트를 결합하여 카메라 움직임, 트랜지션, 애니메이션 효과를 포함한 영상 생성 프롬프트를 만듭니다. AIFI의 모션 템플릿과 타이밍 도구로 생동감 있는 영상을 제작할 수 있습니다.",
      process: "5,6번 넣기 - 동적 영상 프롬프트 생성"
    },
    {
      id: 9,
      title: "[스테이지8] 오디오 프롬프트 생성단계",
      shortTitle: "오디오 프롬프트",
      icon: <Music className="h-5 w-5" />,
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">사용방법</h2>
            <p className="text-sm text-gray-600 mb-6">초보자 기초자료</p>
            <nav className="space-y-2">
              {stages.map((stage) => (
                <Button
                  key={stage.id}
                  variant={activeStage === stage.id ? "default" : "ghost"}
                  className="w-full justify-start text-left"
                  onClick={() => handleStageChange(stage.id)}
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
                {/* 이미지 섹션 추가 - 스테이지 1일 때만 표시 */}
                {activeStage === 1 && (
                  <div className="px-6 pt-6 pb-4">
                    <div className="w-full space-y-4">
                      {/* 텍스트 섹션 */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                        <h2 className="text-gray-800 text-xl font-bold mb-2">1. 제미나이 로그인을 하고 젬 지침을 생성합니다.</h2>
                        <p className="text-gray-600 text-sm">젬 지침을 만드실때는 차분하게 아래의 예시 사진을 보시고 천천히 따라오세요</p>
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
                        <h3 className="text-gray-800 font-bold mb-3 text-xl">2. 젬 지침 제목예시 (사용자에 따라 변경가능)</h3>
                        <div className="space-y-2">
                          {[
                            "[스테이지1] 아이디어 및 콘셉 도출단계",
                            "[스테이지2] 트리트먼트 및 시나리오 개발 단계(1번 넣기)",
                            "[스테이지3] 비주얼 컨셉 정의 단계(2번 넣기)",
                            "[스테이지4] 컨셉아트 프롬프트 엔지니어링 단계(3번 넣기)",
                            "[스테이지5] 장면분할 단계(2,4번 넣기)",
                            "[스테이지6] 샷 이미지 프롬프트 생성 생성 단계(4,5번 넣기)",
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
                  {activeStage === 1 && (
                    <>
                      <CardDescription 
                        className="text-lg leading-relaxed text-gray-700"
                        dangerouslySetInnerHTML={{ __html: currentStage.content }}
                      />
                      
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-semibold text-blue-900 mb-2">▶︎ CF에 들어가는 젬지침도 동일하게 적용하시면 됩니다.</h3>
                        <p className="text-blue-800">{currentStage.process}</p>
                      </div>
                    </>
                  )}

                  {activeStage === 2 && (
                    <>
                      <CardDescription className="text-lg leading-relaxed text-gray-700 mb-6">
                        {currentStage.content}
                      </CardDescription>

                      {/* Stage 2 이미지 추가 */}
                      <div className="mb-8">
                        <img 
                          src={stage2Image} 
                          alt="Stage 2 JSON 업로드 가이드" 
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>

                      {/* 1단계: JSON 파일 생성 및 정리 */}
                      <div className="mb-8">
                        <div className="bg-white p-6 rounded-lg border-2 border-blue-200 mb-4">
                          <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                            <FileText className="h-6 w-6 mr-2" />
                            1단계: JSON 파일 생성 및 정리
                          </h3>
                          <p className="text-gray-700">
                              각 <strong>Stage</strong>별 젬(Gem)에서 생성된 JSON 파일을 <span className="text-red-500">Stage</span>별로 폴더를 만들어 체계적으로 저장합니다.
                          </p>
                          <p className="text-gray-700">  특히 <strong>Stage 5</strong>부터는 씬의 개수만큼 JSON 파일이 생성되므로, 씬별로 구분하여 저장하는 것이 중요합니다.
                          </p>
                        </div>
                      </div>

                      {/* 2단계: 스토리보드 구성 */}
                      <div className="mb-8">
                        <div className="bg-white p-6 rounded-lg border-2 border-purple-200 mb-4">
                          <h3 className="text-xl font-bold text-purple-900 mb-3 flex items-center">
                            <Edit className="h-6 w-6 mr-2" />
                            2단계: 스토리보드 구성
                          </h3>
                          <div className="space-y-3 text-gray-700">
                            <div className="flex items-start">
                              <div className="bg-purple-100 text-purple-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                              <p><strong>Stage 2 JSON 업로드:</strong> 스토리보드 초기 화면에서 Stage 2 JSON을 업로드하여 전체 시나리오와 씬 구성을 확인합니다.</p>
                            </div>
                            <div className="flex items-start">
                              <div className="bg-purple-100 text-purple-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                              <p><strong>Stage 5 JSON 업로드:</strong> 각 씬별 Stage 5 JSON 파일을 모두 업로드하여 샷을 분할합니다.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 3단계: 이미지 프롬프트 생성 및 이미지 제작 */}
                      <div className="mb-8">
                        <div className="bg-white p-6 rounded-lg border-2 border-green-200 mb-4">
                          <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center">
                            <Image className="h-6 w-6 mr-2" />
                            3단계: 이미지 프롬프트 생성 및 이미지 제작
                          </h3>
                          <div className="space-y-3 text-gray-700">
                            <div className="flex items-start">
                              <div className="bg-green-100 text-green-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                              <p><strong>Stage 6 JSON 업로드:</strong> Stage 6 JSON 파일을 업로드합니다.</p>
                            </div>
                            <div className="flex items-start">
                              <div className="bg-green-100 text-green-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                              <p>분할된 샷을 클릭하면 <strong>이미지 프롬프트</strong>가 생성된 것을 확인할 수 있습니다.</p>
                            </div>
                            <div className="flex items-start">
                              <div className="bg-green-100 text-green-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                              <p>이 프롬프트를 복사하여 미드저니 등 이미지 생성 툴에서 이미지를 제작합니다.</p>
                            </div>
                            <div className="flex items-start">
                              <div className="bg-green-100 text-green-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</div>
                              <p>마음에 드는 이미지의 URL을 복사하여 스토리보드의 해당 샷에 붙여넣습니다.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mt-4">
                              <p className="text-gray-600 text-sm leading-relaxed">
                                <strong className="text-red-400">👉 참고:</strong> 업로드한 이미지는 참조용으로만 사용되며, 자동 영상 생성에는 직접적으로 활용되지 않습니다.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 4단계: 영상 프롬프트 생성 및 영상 클립 제작 */}
                      <div className="mb-8">
                        <div className="bg-white p-6 rounded-lg border-2 border-orange-200 mb-4">
                          <h3 className="text-xl font-bold text-orange-900 mb-3 flex items-center">
                            <Film className="h-6 w-6 mr-2" />
                            4단계: 영상 프롬프트 생성 및 영상 클립 제작
                          </h3>
                          <div className="space-y-3 text-gray-700">
                            <div className="flex items-start">
                              <div className="bg-orange-100 text-orange-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                              <p><strong>Stage 7 JSON 업로드:</strong> Stage 7 JSON 파일을 업로드합니다.</p>
                            </div>
                            <div className="flex items-start">
                              <div className="bg-orange-100 text-orange-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                              <p>각 샷을 클릭하면 <strong>영상 프롬프트</strong>가 생성됩니다.</p>
                            </div>
                            <div className="flex items-start">
                              <div className="bg-orange-100 text-orange-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                              <p>이 프롬프트를 활용하여 영상 생성 툴(Kling 등)에서 영상 클립을 제작합니다.</p>
                            </div>
                            <div className="flex items-start">
                              <div className="bg-orange-100 text-orange-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</div>
                              <p>생성된 영상 중 마음에 드는 영상의 URL을 복사하여 붙여넣고, 영상 파일은 샷별로 다운로드하여 따로 저장해 둡니다.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 5단계: 오디오 프롬프트 생성 및 음성 제작 */}
                      <div className="mb-8">
                        <div className="bg-white p-6 rounded-lg border-2 border-indigo-200 mb-4">
                          <h3 className="text-xl font-bold text-indigo-900 mb-3 flex items-center">
                            <Music className="h-6 w-6 mr-2" />
                            5단계: 오디오 프롬프트 생성 및 음성 제작
                          </h3>
                          <div className="space-y-3 text-gray-700">
                            <div className="flex items-start">
                              <div className="bg-indigo-100 text-indigo-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                              <p><strong>Stage 8 JSON 업로드:</strong> Stage 8 JSON 파일을 업로드합니다.</p>
                            </div>
                            <div className="flex items-start">
                              <div className="bg-indigo-100 text-indigo-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                              <p>각 샷을 클릭하면 <strong>오디오 프롬프트</strong>(나레이션, 대사, 음향효과)가 생성됩니다.</p>
                            </div>
                            <div className="flex items-start">
                              <div className="bg-indigo-100 text-indigo-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                              <p>이 내용을 바탕으로 음성 생성 툴(일레븐랩스, 수퍼톤 등)에서 음성을 제작하고 다운로드합니다.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 최종 편집 및 완성 */}
                      <div className="mb-8">
                        <div className="bg-white p-6 rounded-lg border-2 border-gray-300">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                            <CheckCircle className="h-6 w-6 mr-2" />
                            최종 편집 및 완성
                          </h3>
                          <div className="space-y-3 text-gray-700">
                            <p>
                              프레임워크에서 구성한 스토리보드(시나리오, 이미지, 영상 URL, 오디오 스크립트)를 전체적으로 검토하며 영상의 그림을 완성합니다. 
                              그 후, 각 샷별로 저장해 둔 영상 클립과 음성 파일들을 <strong>캡컷, 프리미어 프로, 필모라</strong> 등 전문 영상 편집 툴로 가져와 
                              최종적으로 편집하고 짜집기하여 하나의 완성된 영상을 만듭니다.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-md border border-slate-200 mt-4">
                              <p className="text-black-800 text-sm leading-relaxed">
                                <strong className="text-red-500">👉 핵심 포인트:</strong> AIFI 프레임워크는 영상제작을 위한 체계적인 설계 도구로서, 
                                실제 촬영 및 편집 작업은 별도 AI툴을 통해 수행됩니다.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-semibold text-blue-900 mb-2">▶︎ 체계적인 워크플로우로 전문적인 영상을 제작하세요</h3>
                        <p className="text-blue-800">{currentStage.process}</p>
                      </div>
                    </>
                  )}

                  {activeStage === 3 && (
                    <>
                      <CardDescription className="text-lg leading-relaxed text-gray-700 mb-6">
                        {currentStage.content}
                      </CardDescription>

                      {/* JSON 출력 전 주의사항 */}
                      <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="p-3 bg-white rounded-lg">
                              <AlertTriangle className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">Gemini 2.5 Pro 사용 필수</h3>
                              <span className="text-xs text-red-600 font-semibold">필수 확인</span>
                            </div>
                          </div>
                          <p className="text-base text-gray-700">
                            JSON 파일 생성 시 반드시 <strong>Gemini 2.5 Pro</strong>를 사용하세요. Flash 버전은 사용하지 마세요.
                          </p>
                        </div>
                        
                        {/* Gemini 2.5 Pro 사용 안내 이미지 */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="mt-6"
                        >
                          <img 
                            src={warningImage} 
                            alt="Gemini 2.5 Pro 사용 안내" 
                            className="w-full rounded-lg shadow-md"
                          />
                        </motion.div>


                        <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="p-3 bg-white rounded-lg">
                              <FileJson className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">Stage별 폴더 관리</h3>
                            </div>
                          </div>
                          <p className="text-base text-gray-700">
                            생성된 JSON 파일은 Stage별로 폴더를 생성하여 저장하세요.
                          </p>
                        </div>
                        
                        {/* Stage별 폴더 구조 이미지 */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="mt-6"
                        >
                          <img 
                            src={stagefolderImage} 
                            alt="Stage별 폴더 구조" 
                            className="w-full rounded-lg shadow-md"
                          />
                        </motion.div>

                        {/* 스테이지 진행방향 가이드 */}
                        <div className="bg-white p-6 rounded-lg border-2 border-purple-200">
                          <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
                            <FileJson className="h-5 w-5 mr-2" />
                            스테이지 진행방향 가이드
                          </h3>
                          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 pt-4">
                            <div 
                              onClick={() => setSelectedStage(2)}
                              className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-2xl border-2 border-blue-300 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center min-w-[140px] flex-shrink-0 cursor-pointer"
                            >
                              <div className="font-bold text-blue-900 mb-2 text-lg">[스테이지2]</div>
                              <div className="text-gray-800 text-base font-medium">JSON 1번넣기</div>
                            </div>
                            
                            <div className="text-gray-400 text-xl font-bold mx-1 flex-shrink-0">→</div>
                            
                            <div 
                              onClick={() => setSelectedStage(3)}
                              className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-2xl border-2 border-green-300 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center min-w-[140px] flex-shrink-0 cursor-pointer"
                            >
                              <div className="font-bold text-green-900 mb-2 text-lg">[스테이지3]</div>
                              <div className="text-gray-800 text-base font-medium">JSON 2번넣기</div>
                            </div>
                            
                            <div className="text-gray-400 text-xl font-bold mx-1 flex-shrink-0">→</div>
                            
                            <div 
                              onClick={() => setSelectedStage(4)}
                              className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-2xl border-2 border-orange-300 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center min-w-[140px] flex-shrink-0 cursor-pointer"
                            >
                              <div className="font-bold text-orange-900 mb-2 text-lg">[스테이지4]</div>
                              <div className="text-gray-800 text-base font-medium">JSON 3번넣기</div>
                            </div>
                            
                            <div className="text-gray-400 text-xl font-bold mx-1 flex-shrink-0">→</div>
                            
                            <div 
                              onClick={() => setSelectedStage(5)}
                              className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-2xl border-2 border-purple-300 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center min-w-[140px] flex-shrink-0 cursor-pointer"
                            >
                              <div className="font-bold text-purple-900 mb-2 text-lg">[스테이지5]</div>
                              <div className="text-gray-800 text-sm font-medium">JSON 2,4번 넣기</div>
                            </div>
                            
                            <div className="text-gray-400 text-xl font-bold mx-1 flex-shrink-0">→</div>
                            
                            <div 
                              onClick={() => setSelectedStage(6)}
                              className="bg-gradient-to-br from-pink-50 to-pink-100 p-5 rounded-2xl border-2 border-pink-300 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center min-w-[140px] flex-shrink-0 cursor-pointer"
                            >
                              <div className="font-bold text-pink-900 mb-2 text-lg">[스테이지6]</div>
                              <div className="text-gray-800 text-sm font-medium">JSON 4,5번 넣기</div>
                            </div>
                            
                            <div className="text-gray-400 text-xl font-bold mx-1 flex-shrink-0">→</div>
                            
                            <div 
                              onClick={() => setSelectedStage(7)}
                              className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-5 rounded-2xl border-2 border-cyan-300 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center min-w-[140px] flex-shrink-0 cursor-pointer"
                            >
                              <div className="font-bold text-cyan-900 mb-2 text-lg">[스테이지7]</div>
                              <div className="text-gray-800 text-sm font-medium">JSON 5,6번넣기</div>
                            </div>
                            
                            <div className="text-gray-400 text-xl font-bold mx-1 flex-shrink-0">→</div>
                            
                            <div 
                              onClick={() => setSelectedStage(8)}
                              className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-5 rounded-2xl border-2 border-indigo-300 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center min-w-[140px] flex-shrink-0 cursor-pointer"
                            >
                              <div className="font-bold text-indigo-900 mb-2 text-lg">[스테이지8]</div>
                              <div className="text-gray-800 text-base font-medium">JSON 5번 넣기</div>
                            </div>
                          </div>
                          <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                            <p className="text-gray-700 text-base font-medium">
                              <strong>💡 진행방향:</strong> 각 스테이지에서 생성된 JSON 파일을 다음 스테이지의 입력으로 사용하여 단계별로 영상제작을 완성해갑니다.
                            </p>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-2 border-indigo-200">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="p-3 bg-white rounded-lg">
                              <FileJson className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">씬별 JSON 파일</h3>
                            </div>
                          </div>
                          <p className="text-base text-gray-700">
                            Stage 5부터는 씬 개수만큼 JSON 파일이 생성됩니다. 예: 6개 씬 = 6개 JSON 파일
                          </p>
                        </div>
                        
                        {/* 씬별 JSON 파일 가이드 이미지 */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="mt-6"
                        >
                          <img 
                            src={stageguideImage} 
                            alt="씬별 JSON 파일 가이드" 
                            className="w-full rounded-lg shadow-md"
                          />
                        </motion.div>
                      </div>


                      <div className="mt-8 bg-white p-6 rounded-lg border-2 border-yellow-200">
                        <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                          <FileJson className="h-5 w-5 mr-2" />
                          JSON 파일 생성 프로세스
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span>Gemini 2.5 Pro 선택</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span>프롬프트 입력 후 생성 시작</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span>완료 화살표 확인 후 복사</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span>Stage별 폴더에 저장</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-semibold text-blue-900 mb-2">▶︎ 안전한 JSON 파일 생성</h3>
                        <p className="text-blue-800">{currentStage.process}</p>
                      </div>
                    </>
                  )}

                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>

      {/* 간단한 모달 */}
      {selectedStage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setSelectedStage(null)}>
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className={`text-lg font-semibold ${stageDetails[selectedStage]?.color || 'text-gray-900'}`}>
                {stageDetails[selectedStage]?.title || `스테이지${selectedStage} 상세정보`}
              </h3>
              <button
                onClick={() => setSelectedStage(null)}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                ×
              </button>
            </div>
            <p className="text-gray-700">
              {stageDetails[selectedStage]?.description || `스테이지${selectedStage}의 상세 정보입니다.`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GemGuidePage;


