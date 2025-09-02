import { useState } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, FileQuestion, Settings, Zap, AlertCircle, BookOpen, FileJson } from 'lucide-react'

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [expandedItems, setExpandedItems] = useState({});

  const categories = [
    {
      id: 1,
      title: "시작하기",
      shortTitle: "시작하기",
      icon: <BookOpen className="h-5 w-5" />,
      displayIcon: <BookOpen className="h-8 w-8 text-blue-600" />
    },
    {
      id: 2,
      title: "젬 지침 관련",
      shortTitle: "젬 지침",
      icon: <Settings className="h-5 w-5" />,
      displayIcon: <Settings className="h-8 w-8 text-green-600" />
    },
    {
      id: 3,
      title: "JSON 에디터 사용법",
      shortTitle: "JSON 에디터",
      icon: <FileJson className="h-5 w-5" />,
      displayIcon: <FileJson className="h-8 w-8 text-indigo-600" />
    },
    {
      id: 4,
      title: "프롬프트 작성",
      shortTitle: "프롬프트",
      icon: <MessageSquare className="h-5 w-5" />,
      displayIcon: <MessageSquare className="h-8 w-8 text-purple-600" />
    },
    {
      id: 5,
      title: "문제 해결",
      shortTitle: "문제 해결",
      icon: <AlertCircle className="h-5 w-5" />,
      displayIcon: <AlertCircle className="h-8 w-8 text-orange-600" />
    },
    {
      id: 6,
      title: "고급 기능",
      shortTitle: "고급 기능",
      icon: <Zap className="h-5 w-5" />,
      displayIcon: <Zap className="h-8 w-8 text-pink-600" />
    }
  ];

  const faqData = {
    1: [
      {
        question: "AIFI는 무엇인가요?",
        answer: "AIFI는 AI Film Intelligence의 약자로, AI를 활용하여 영상 제작의 전 과정을 지원하는 통합 플랫폼입니다. 시나리오 작성부터 영상 프롬프트 생성까지 모든 단계를 체계적으로 관리할 수 있습니다."
      },
      {
        question: "제미나이 계정이 꼭 필요한가요?",
        answer: "네, AIFI의 젬 지침 기능을 사용하기 위해서는 제미나이(Gemini) 계정이 필요합니다."
      },
      {
        question: "어떤 브라우저를 사용해야 하나요?",
        answer: "최적화된 Chrome 브라우저로 사용하셔야 합니다."
      }
    ],
    2: [
      {
        question: "젬 지침이 생성되지 않아요",
        answer: "1. 제미나이에 로그인했는지 확인하세요.\n2. 좌측 사이드바에서 'Gems 탐색하기'를 클릭하세요.\n3. 우측 상단의 '새 Gem' 버튼을 클릭하세요.\n4. 만약 버튼이 보이지 않는다면 브라우저를 새로고침하거나 다시 로그인해보세요."
      },
      {
        question: "젬 지침 제목은 어떻게 입력하나요?",
        answer: "각 스테이지별로 제공된 제목을 상단 GEM지침 버튼 참조. 복사 버튼을 클릭하면 자동으로 클립보드에 복사됩니다"
      },
      {
        question: "여러 개의 젬을 동시에 만들 수 있나요?",
        answer: "네, 가능합니다. 각 스테이지별로 별도의 젬을 생성하여 관리할 수 있습니다. 다만 혼동을 피하기 위해 순서대로 하나씩 생성하는 것을 권장합니다."
      }
    ],
    3: [
      {
        question: "JSON 에디터는 어디서 접속하나요?",
        answer: "AIFI 프레임워크(https://aifi.ai.kr/)에 접속 후, 화면 우측 상단의 'TOOL' 메뉴를 클릭하거나, 마우스 스크롤을 내려 'JSON 에디터'를 찾아 클릭하면 됩니다. 광고 없이 필요한 기능만 담아 편리하게 사용할 수 있습니다.",
        hasLink: true,
        linkText: "AIFI 프레임워크",
        linkUrl: "https://aifi.ai.kr/"
      },
      {
        question: "JSON 에디터 기본 사용법은 어떻게 되나요?",
        answer: "1. '지우기' 버튼으로 기존 내용을 비웁니다.\n2. 젬에서 생성된 JSON 코드를 복사합니다.\n3. 에디터 화면에서 마우스 우클릭 → '붙여넣기'를 선택합니다.\n4. 유효성 검사를 확인합니다 ('유효' 표시 확인).\n5. '다운로드' 버튼을 클릭하여 파일을 저장합니다."
      },
      {
        question: "JSON 코드에 오류가 발생했어요. 어떻게 해결하나요?",
        answer: "1. 에디터에서 오류 위치를 확인합니다 (예: 306번째 줄 1번째 열).\n2. 젬의 해당 스테이지 채팅창으로 돌아갑니다.\n3. 오류 위치를 알려주고 수정을 요청합니다.\n4. 여러 오류가 있다면 모두 알려주세요.\n5. 수정된 코드를 다시 복사하여 에디터에 붙여넣고 검증합니다."
      },
      {
        question: "파일명은 어떻게 지정하면 좋나요?",
        answer: "각 스테이지별로 명확하게 구분할 수 있도록 지정하세요. 예시:\n- stage2_narrative.json\n- stage4_conceptart.json\n- stage5_scene1_shots.json\n이렇게 저장하면 나중에 찾기 쉽고 체계적으로 관리할 수 있습니다."
      },
      {
        question: "기존 JSON 파일을 수정할 수 있나요?",
        answer: "'파일 열기' 기능으로 기존 JSON 파일을 불러올 수 있습니다. 하지만 코드 수정이 익숙하지 않다면 확인용으로만 사용하는 것을 권장합니다. 수정이 필요한 경우 젬에서 다시 생성하는 것이 안전합니다."
      },
      {
        question: "여러 씬의 JSON 파일을 어떻게 관리하나요?",
        answer: "Stage 5부터는 씬별로 개별 JSON 파일이 생성됩니다. 폴더를 만들어 체계적으로 정리하세요:\n- Stage5_Shots/scene1.json, scene2.json...\n- Stage6_Images/scene1.json, scene2.json...\n- Stage7_Videos/scene1.json, scene2.json..."
      }
    ],
    4: [
      {
        question: "프롬프트에 어떤 내용을 포함해야 하나요?",
        answer: "프롬프트에는 다음 요소들을 포함하세요:\n- 장면의 분위기와 톤\n- 등장인물의 표정과 동작\n- 카메라 앵글과 구도\n- 조명과 색감\n- 배경과 소품 설명"
      },
      {
        question: "프롬프트 길이는 어느 정도가 적당한가요?",
        answer: "일반적으로 3-5문장 정도가 적당합니다. 너무 짧으면 디테일이 부족하고, 너무 길면 AI가 중요한 요소를 놓칠 수 있습니다. 핵심 요소를 명확하고 간결하게 표현하는 것이 중요합니다."
      },
      {
        question: "이전 단계의 결과물을 어떻게 활용하나요?",
        answer: "각 스테이지는 이전 단계의 결과물을 기반으로 합니다. 예를 들어 스테이지5는 스테이지2와 4의 결과를 함께 사용합니다. 괄호 안의 번호(예: 2,4번 넣기)를 참고하여 해당 결과물을 입력하세요."
      }
    ],
    5: [
      {
        question: "생성된 결과물이 마음에 들지 않아요",
        answer: "프롬프트를 수정하여 다시 시도해보세요. 특히 다음 사항을 점검하세요:\n- 프롬프트가 너무 추상적이지 않은지\n- 상충되는 요구사항이 없는지\n- 핵심 키워드가 명확한지\n여러 번 시도해도 개선되지 않으면 이전 단계로 돌아가 기초 설정을 수정해보세요."
      },
      {
        question: "오류 메시지가 나타나요",
        answer: "다음 순서로 해결해보세요:\n1. 페이지 새로고침\n2. 브라우저 캐시 삭제\n3. 다른 브라우저로 시도\n4. 제미나이 계정 재로그인\n그래도 해결되지 않으면 잠시 후 다시 시도하거나 고객지원에 문의하세요."
      },
      {
        question: "저장이 되지 않아요",
        answer: "자동 저장 기능이 작동하지 않는다면:\n1. 인터넷 연결 상태를 확인하세요.\n2. 브라우저의 쿠키와 로컬 스토리지가 활성화되어 있는지 확인하세요.\n3. 수동으로 복사하여 별도 문서에 백업해두세요."
      }
    ],
    6: [
      {
        question: "커스텀 스타일을 적용할 수 있나요?",
        answer: "네, 가능합니다. 각 프롬프트에 특정 아트 스타일, 색상 팔레트, 참조 작품 등을 명시하여 일관된 비주얼 스타일을 유지할 수 있습니다. 예: 'Studio Ghibli style', 'noir atmosphere', 'pastel color palette' 등"
      },
      {
        question: "여러 프로젝트를 동시에 관리할 수 있나요?",
        answer: "각 프로젝트별로 별도의 젬 세트를 생성하여 관리할 수 있습니다. 프로젝트명을 젬 제목에 포함시키면 구분이 쉬워집니다. 예: '[프로젝트A] 스테이지1 시놉시스'"
      },
      {
        question: "결과물을 다른 AI 도구와 연동할 수 있나요?",
        answer: "네, AIFI에서 생성된 프롬프트는 Midjourney, DALL-E, Stable Diffusion 등 다양한 AI 이미지/영상 생성 도구에서 활용 가능합니다. 각 도구의 특성에 맞게 프롬프트를 약간 수정하면 더 좋은 결과를 얻을 수 있습니다."
      }
    ]
  };

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const currentFAQs = faqData[activeCategory] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-lg border-r border-gray-200 fixed h-full overflow-y-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">자주 묻는 질문</h2>
            <p className="text-sm text-gray-600 mb-6">FAQ & 도움말</p>
            <nav className="space-y-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "ghost"}
                  className="w-full justify-start text-left"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.icon}
                  <span className="ml-2 text-sm">{category.shortTitle}</span>
                </Button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-80 p-8">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {categories.find(c => c.id === activeCategory)?.title}
              </h1>
              <p className="text-lg text-gray-600">
                AIFI 사용에 대한 궁금증을 해결해드립니다
              </p>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    {categories.find(c => c.id === activeCategory)?.displayIcon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl">자주 묻는 질문들</CardTitle>
                    <CardDescription className="text-sm text-gray-500 mt-1">
                      클릭하여 답변을 확인하세요
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {currentFAQs.map((faq, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <button
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                        onClick={() => toggleExpand(index)}
                      >
                        <div className="flex items-center space-x-3">
                          <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <span className="font-medium text-gray-900">{faq.question}</span>
                        </div>
                        {expandedItems[index] ? (
                          <ChevronUp className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                      
                      {expandedItems[index] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 py-4 bg-blue-50 border-t"
                        >
                          {activeCategory === 3 && index === 0 && (
                            <img 
                              src="/assets/2-1.jpg" 
                              alt="JSON 에디터 접속 방법" 
                              className="w-full max-w-5xl mx-auto mb-6 rounded-lg shadow-xl"
                            />
                          )}
                          {activeCategory === 3 && index === 1 && (
                            <img 
                              src="/assets/2-2.jpg" 
                              alt="JSON 에디터 기본 사용법" 
                              className="w-full max-w-5xl mx-auto mb-6 rounded-lg shadow-xl"
                            />
                          )}
                          {activeCategory === 3 && index === 2 && (
                            <img 
                              src="/assets/2-3.jpg" 
                              alt="JSON 오류 해결 방법" 
                              className="w-full max-w-5xl mx-auto mb-6 rounded-lg shadow-xl"
                            />
                          )}
                          {faq.hasLink ? (
                            <p className="text-gray-700">
                              AIFI 프레임워크(
                              <a 
                                href={faq.linkUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline"
                              >
                                {faq.linkUrl}
                              </a>
                              )에 접속 후, 화면 우측 상단의 'TOOL' 메뉴를 클릭하거나, 마우스 스크롤을 내려 'JSON 에디터'를 찾아 클릭하면 됩니다. 광고 없이 필요한 기능만 담아 편리하게 사용할 수 있습니다.
                            </p>
                          ) : (
                            <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
                          )}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-start space-x-3">
                    <FileQuestion className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-yellow-900 mb-1">추가 도움이 필요하신가요?</h3>
                      <p className="text-yellow-800 text-sm">
                        이 페이지에서 원하는 답변을 찾지 못하셨다면, AIFI에 문의해주세요.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;