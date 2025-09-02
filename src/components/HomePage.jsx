import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Play, Palette, Film, Sparkles, Zap, Users, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {
  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-blue-600" />,
      title: "AI 기반 자동 편집",
      description: "인공지능이 영상의 분위기와 리듬을 분석하여 최적의 편집점을 자동으로 찾아줍니다."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "빠른 렌더링",
      description: "최신 GPU 가속 기술을 활용하여 고품질 영상을 빠르게 렌더링합니다."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "실시간 협업",
      description: "팀원들과 실시간으로 프로젝트를 공유하고 피드백을 주고받을 수 있습니다."
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "다양한 포맷 지원",
      description: "웹, 소셜 미디어, 방송 등 다양한 플랫폼에 최적화된 포맷을 지원합니다."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AIFI FRAME WORK
                </span>
                <br />
                "사용자매뉴얼"
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                AIFI 영상프레임워크의 사용자 매뉴얼은 누구나 쉽게 영상을 제작하기 전에 숙지해야할 문서입니다
                블록화 기술을 통해 체계적으로 영상제작에 도전하시기 바랍니다.
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="text-lg px-8 py-3" asChild>
                  <Link to="/gem-guide">
                    시작하기 <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              강력한 기능들
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AIFI가 제공하는 혁신적인 기능들로 영상 제작의 효율성을 극대화하세요
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              주요 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AIFI의 핵심 기능들을 자세히 알아보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Storyboard Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <Film className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">스토리보드</CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    영상의 전체적인 구조를 시각적으로 설계하고 각 장면의 흐름을 계획합니다
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• 직관적인 장면 편집 도구</li>
                    <li>• 카메라 워크 및 전환 효과 설정</li>
                    <li>• 팀 협업 및 실시간 피드백</li>
                    <li>• 프리비즈 애니메이션 생성</li>
                  </ul>
                  <Button className="w-full mt-6" asChild>
                    <Link to="/storyboard">
                      스토리보드 알아보기 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Concept Art Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                      <Palette className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl">컨셉아트</CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    AI 기술을 활용하여 텍스트 설명만으로 놀라운 품질의 컨셉아트를 생성합니다
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI 기반 이미지 생성</li>
                    <li>• 다양한 아트 스타일 지원</li>
                    <li>• 캐릭터 및 배경 디자인</li>
                    <li>• 무드보드 제작 도구</li>
                  </ul>
                  <Button className="w-full mt-6" asChild>
                    <Link to="/concept-art">
                      컨셉아트 알아보기 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="text-xl font-bold">AIFI</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                AI 기술로 영상 제작의 새로운 패러다임을 제시하는 혁신적인 프레임워크입니다.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">주요 기능</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/gem-guide" className="hover:text-white transition-colors">GEM지침만들기</Link></li>
                <li><Link to="/storyboard" className="hover:text-white transition-colors">스토리보드</Link></li>
                <li><Link to="/concept-art" className="hover:text-white transition-colors">컨셉아트</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">지원</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">문서</a></li>
                <li><a href="#" className="hover:text-white transition-colors">튜토리얼</a></li>
                <li><a href="#" className="hover:text-white transition-colors">커뮤니티</a></li>
                <li><a href="#" className="hover:text-white transition-colors">고객지원</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AIFI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

