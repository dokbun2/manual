import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Film, BookOpen, Lightbulb, Users, Eye, Presentation, Calendar, Palette } from 'lucide-react'

const StoryboardPage = () => {
  const [activeSection, setActiveSection] = useState('usage')

  const sidebarItems = [
    { id: 'usage', label: '사용방법', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'utilization', label: '활용법', icon: <Lightbulb className="h-4 w-4" /> }
  ]

  const usageSteps = [
    {
      icon: <Film className="h-8 w-8 text-blue-600" />,
      title: "새 스토리보드 생성",
      description: "'스토리보드' 탭에서 '새 스토리보드 만들기'를 클릭하여 프로젝트를 시작합니다."
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: "장면 추가",
      description: "'장면 추가' 버튼을 눌러 새로운 장면 카드를 생성합니다. 각 카드에는 장면 번호, 제목, 설명을 입력할 수 있습니다."
    },
    {
      icon: <Eye className="h-8 w-8 text-green-600" />,
      title: "이미지 및 스케치",
      description: "각 장면에 해당하는 이미지나 스케치를 업로드하여 시각적인 이해를 돕습니다. AIFI의 내장 드로잉 도구를 사용하여 간단한 스케치를 직접 그릴 수도 있습니다."
    },
    {
      icon: <Film className="h-8 w-8 text-orange-600" />,
      title: "카메라 워크 및 전환 효과",
      description: "각 장면에 대한 카메라 워크(줌, 팬, 트래킹 등)와 장면 간의 전환 효과(컷, 디졸브, 와이프 등)를 미리 지정할 수 있습니다."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-red-600" />,
      title: "대사 및 사운드",
      description: "각 장면에 필요한 대사나 사운드 이펙트, 배경 음악에 대한 메모를 추가하여 오디오 계획을 세웁니다."
    }
  ]

  const utilizationMethods = [
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "프리비즈(Pre-visualization)",
      description: "스토리보드를 기반으로 간단한 애니메이션을 만들어 영상의 전체적인 흐름과 타이밍을 미리 확인합니다. 이를 통해 본 촬영이나 제작에 들어가기 전에 문제점을 파악하고 수정할 수 있습니다."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "팀 협업",
      description: "스토리보드를 팀원들과 공유하고 실시간으로 피드백을 주고받으며 아이디어를 발전시킵니다. 감독, 촬영 감독, 편집자 등 모든 팀원이 동일한 비전을 공유하고 원활하게 소통할 수 있습니다."
    },
    {
      icon: <Presentation className="h-8 w-8 text-green-600" />,
      title: "클라이언트 프레젠테이션",
      description: "클라이언트에게 영상의 콘셉트와 구성을 명확하게 전달하고, 제작 방향에 대한 동의를 얻는 데 효과적입니다. 시각적인 자료를 통해 오해를 줄이고, 프로젝트를 성공적으로 이끌 수 있습니다."
    },
    {
      icon: <Calendar className="h-8 w-8 text-orange-600" />,
      title: "제작 일정 관리",
      description: "각 장면의 촬영 장소, 필요한 소품, 배우 등을 스토리보드에 기록하여 제작 일정을 효율적으로 관리하고, 촬영 준비를 체계적으로 할 수 있습니다."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg border-r border-gray-200 fixed h-full overflow-y-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">스토리보드</h2>
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
                <h1 className="text-4xl font-bold text-gray-900 mb-4">스토리보드 사용방법</h1>
                <p className="text-xl text-gray-600">
                  AIFI의 스토리보드 기능은 영상의 전체적인 구조를 시각적으로 설계하고, 
                  각 장면의 흐름을 미리 계획할 수 있도록 돕습니다.
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
                <h1 className="text-4xl font-bold text-gray-900 mb-4">스토리보드 활용법</h1>
                <p className="text-xl text-gray-600">
                  AIFI의 스토리보드 기능은 단순한 장면 나열을 넘어, 
                  영상 제작의 효율성을 극대화하는 다양한 방법으로 활용될 수 있습니다.
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

export default StoryboardPage

