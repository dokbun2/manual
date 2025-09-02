import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Palette, BookOpen, Lightbulb, Wand2, Image, Settings, Save, Brain, Users, Presentation, TrendingUp } from 'lucide-react'

const ConceptArtPage = () => {
  const [activeSection, setActiveSection] = useState('usage')

  const sidebarItems = [
    { id: 'usage', label: '사용방법', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'utilization', label: '활용법', icon: <Lightbulb className="h-4 w-4" /> }
  ]

  const usageSteps = [
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: "새 컨셉아트 생성",
      description: "'컨셉아트' 탭에서 '새 컨셉아트 만들기'를 선택합니다."
    },
    {
      icon: <Wand2 className="h-8 w-8 text-blue-600" />,
      title: "텍스트 프롬프트 입력",
      description: "만들고 싶은 이미지에 대한 상세한 설명을 입력합니다. 예를 들어, '미래 도시의 밤거리, 네온사인이 빛나고 비가 내리는 풍경, 사이버펑크 스타일'과 같이 구체적으로 작성할수록 좋습니다."
    },
    {
      icon: <Settings className="h-8 w-8 text-green-600" />,
      title: "스타일 및 레퍼런스 선택",
      description: "원하는 아트 스타일(예: 실사, 애니메이션, 수채화)을 선택하거나, 참고할 만한 이미지 파일을 업로드하여 AI가 더 정확한 결과물을 생성하도록 유도합니다."
    },
    {
      icon: <Image className="h-8 w-8 text-orange-600" />,
      title: "이미지 생성 및 변형",
      description: "'생성하기' 버튼을 누르면 AI가 여러 가지 버전의 컨셉아트를 제안합니다. 마음에 드는 이미지를 선택하고, '변형' 기능을 통해 다양한 스타일과 구도의 이미지를 추가로 탐색할 수 있습니다."
    },
    {
      icon: <Save className="h-8 w-8 text-red-600" />,
      title: "해상도 및 저장",
      description: "최종적으로 선택된 컨셉아트의 해상도를 높이고, 원하는 파일 형식으로 저장하여 영상 제작의 다른 단계에서 활용합니다."
    }
  ]

  const utilizationMethods = [
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "비주얼 브레인스토밍",
      description: "텍스트 프롬프트를 빠르게 바꿔가며 다양한 아이디어를 시각적으로 탐색하고, 예상치 못한 영감을 얻을 수 있습니다. 초기 기획 단계에서 시각적인 방향성을 잡는 데 매우 유용합니다."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "캐릭터 및 배경 디자인",
      description: "소설이나 시나리오에 묘사된 캐릭터와 배경을 실제로 눈에 보이는 이미지로 만들어, 디자인을 구체화하고 발전시키는 데 사용합니다. 이를 통해 모든 팀원이 통일된 비주얼 콘셉트를 공유할 수 있습니다."
    },
    {
      icon: <Palette className="h-8 w-8 text-green-600" />,
      title: "무드보드 제작",
      description: "생성된 여러 컨셉아트를 조합하여 영상의 전체적인 색감, 조명, 분위기를 담은 무드보드를 제작합니다. 이는 영상의 톤앤매너를 일관되게 유지하는 데 중요한 역할을 합니다."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: "마케팅 및 홍보 자료",
      description: "제작 초기 단계에서 생성된 매력적인 컨셉아트를 활용하여 티저 이미지나 포스터를 만들고, 소셜 미디어를 통해 미리 팬들의 기대감을 높이는 마케팅 활동에 사용할 수 있습니다."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg border-r border-gray-200 fixed h-full overflow-y-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">컨셉아트</h2>
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 p-8">
          {activeSection === 'usage' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">컨셉아트 사용방법</h1>
                <p className="text-xl text-gray-600">
                  AIFI의 컨셉아트 기능은 AI 기술을 활용하여 텍스트 설명만으로 놀라운 품질의 컨셉아트를 생성합니다. 
                  영상의 전체적인 비주얼 스타일과 분위기를 설정하고, 캐릭터, 배경, 소품 등의 디자인을 구체화하는 데 사용됩니다.
                </p>
              </div>

              <div className="grid gap-6">
                {usageSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gray-50 rounded-lg">
                            {step.icon}
                          </div>
                          <div>
                            <CardTitle className="text-xl">{step.title}</CardTitle>
                            <div className="text-sm text-gray-500">단계 {index + 1}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {step.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'utilization' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">컨셉아트 활용법</h1>
                <p className="text-xl text-gray-600">
                  AIFI의 AI 컨셉아트 기능은 단순한 이미지 생성을 넘어, 
                  창의적인 아이디어를 시각화하고 제작 과정을 혁신하는 데 다양하게 활용될 수 있습니다.
                </p>
              </div>

              <div className="grid gap-6">
                {utilizationMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gray-50 rounded-lg">
                            {method.icon}
                          </div>
                          <CardTitle className="text-xl">{method.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {method.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ConceptArtPage

