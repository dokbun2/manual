import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Palette, Film } from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center overflow-hidden">
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
                <li><Link to="/storyboard" className="hover:text-white transition-colors">STAGE</Link></li>
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

