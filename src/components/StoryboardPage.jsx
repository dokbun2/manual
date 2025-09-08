import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  FileJson, 
  Edit, 
  Layers, 
  Image, 
  Film, 
  Music, 
  Upload,
  FolderOpen,
  FileText,
  Sparkles,
  Palette,
  Users,
  MapPin
} from 'lucide-react'

const StoryboardPage = () => {
  const [activeSection, setActiveSection] = useState('stage1')

  const sidebarItems = [
    { id: 'stage1', label: 'Stage 1: 아이디어 창작', icon: <Sparkles className="h-4 w-4" /> },
    { id: 'stage2', label: 'Stage 2: 시나리오 작성', icon: <Edit className="h-4 w-4" /> },
    { id: 'stage3', label: 'Stage 3: 비주얼 컨셉 정의', icon: <Palette className="h-4 w-4" /> },
    { id: 'stage4', label: 'Stage 4: 컨셉아트', icon: <Users className="h-4 w-4" /> },
    { id: 'stage5', label: 'Stage 5: 장면 분할', icon: <Layers className="h-4 w-4" /> },
    { id: 'stage6', label: 'Stage 6: 이미지 프롬프트 생성', icon: <Image className="h-4 w-4" /> },
    { id: 'stage7', label: 'Stage 7: 영상 프롬프트 생성', icon: <Film className="h-4 w-4" /> },
    { id: 'stage8', label: 'Stage 8: 오디오 프롬프트 생성', icon: <Music className="h-4 w-4" /> }
  ]

  const stage1Content = {
    title: "Stage 1: 아이디어 창작 단계",
    description: "창의적 대화를 통한 스토리 뼈대 구축",
    steps: [
      {
        number: "1",
        title: "프레임워크 시작점",
        description: "AIFI 프레임워크의 가장 첫 번째 시작점입니다.",
        detail: "모든 창작 과정의 출발점으로, 막연한 아이디어를 구체적인 형태로 발전시키는 단계입니다."
      },
      {
        number: "2", 
        title: "창의적 대화 시스템",
        description: "사용자와의 창의적 대화를 통해 아이디어를 발전시킵니다.",
        detail: "대화형 인터페이스를 통해 아이디어의 핵심을 파악하고 스토리의 기본 구조를 만들어갑니다."
      },
      {
        number: "3",
        title: "6차원 확장 프로세스",
        description: "다차원적 접근을 통한 아이디어 확장",
        detail: "6가지 창작 차원을 활용하여 평면적인 아이디어를 입체적이고 풍부한 스토리로 발전시킵니다."
      },
      {
        number: "4",
        title: "크리에이티브 부스터 시스템",
        description: "독창적 스토리 변주 및 발전",
        detail: "AI 기반 창작 도구를 활용하여 평범한 아이디어를 독창적이고 매력적인 스토리로 변환합니다."
      }
    ]
  }

  const stage3Content = {
    title: "Stage 3: 비주얼 컨셉 정의 단계",
    description: "AI 주도 분석으로 세계관과 비주얼 설정 구축",
    steps: [
      {
        number: "1",
        title: "데이터 분석 및 제안",
        description: "Stage 2 데이터를 분석하여 세계관, 룩앤필, 컨셉아트 세부설정 초안을 사용자에게 제안",
        detail: "AI가 시나리오를 분석하여 프로젝트에 적합한 비주얼 컨셉을 논리적으로 추론하고 구체적인 제안을 제공합니다."
      },
      {
        number: "2",
        title: "블록화 시스템 구조화",
        description: "각 컨셉아트 대상의 20개 블록을 체계적으로 정의",
        detail: "표준화된 블록 구조를 활용하여 캐릭터, 장소, 소품의 세부 설정을 일관성 있게 구성합니다."
      },
      {
        number: "3",
        title: "사용자 검증 및 피드백",
        description: "AI 제안에 대한 사용자 피드백 반영 및 대안 제시",
        detail: "사용자의 검토와 피드백을 통해 설정을 수정하고, 필요한 경우 대안을 제시하여 최종 합의를 도출합니다."
      },
      {
        number: "4", 
        title: "JSON 데이터 구조화",
        description: "모든 비주얼 설정을 Stage 3 JSON 데이터로 완성",
        detail: "확정된 세계관, 룩앤필, 컨셉아트 블록 설정을 구조화된 JSON 형태로 출력하여 다음 단계에서 활용할 수 있게 합니다."
      }
    ]
  }

  const stage2Content = {
    title: "Stage 2: AI 내러티브 작성",
    description: "시나리오 구성 및 JSON 업로드",
    steps: [
      {
        number: "1",
        title: "JSON 파일 업로드",
        description: "프레임워크 스토리보드 페이지에서 'JSON 업로드' 클릭",
        detail: "Stage 2 JSON 파일을 업로드하면 시퀀스-씬-샷 구조로 시나리오가 자동 분할됩니다."
      },
      {
        number: "2",
        title: "구조 확인",
        description: "시퀀스, 씬, 샷으로 분할된 구조 확인",
        detail: "각 레벨별로 체계적으로 정리된 시나리오를 확인할 수 있습니다."
      }
    ]
  }

  const stage4Content = {
    title: "Stage 4: 컨셉아트 작업",
    description: "캐릭터, 장소, 소품의 일관성을 유지하기 위한 기준 설정",
    steps: [
      {
        number: "1",
        title: "Stage 4 JSON 업로드",
        description: "컨셉아트 페이지에서 Stage 4 JSON 파일 업로드",
        detail: "캐릭터, 장소, 소품별로 블록화 프롬프트가 자동으로 생성됩니다."
      },
      {
        number: "2",
        title: "캐릭터 이미지 생성",
        description: "각 캐릭터의 'AIFI 고유의 특화된 블록화 프롬프트' 생성",
        detail: "생성된 프롬프트를 확인하고 '프롬프트 복사' 후 이미지 생성 도구에서 생성합니다."
      },
      {
        number: "3",
        title: "이미지 URL 저장",
        description: "마음에 드는 이미지의 URL을 프레임워크에 입력",
        detail: "생성된 이미지 URL을 프레임워크에 저장하여 일관성 있는 캐릭터를 유지합니다."
      },
      {
        number: "4",
        title: "프롬프트 수정",
        description: "직접 수정 또는 AI 도움받아 수정",
        detail: "블록화 생성기로 이동하여 구조 편집기에서 원하는 부분을 수정할 수 있습니다."
      }
    ]
  }

  const stage5Content = {
    title: "Stage 5: 샷 분할",
    description: "씬을 샷별로 세분화",
    steps: [
      {
        number: "1",
        title: "씬별 JSON 업로드",
        description: "각 씬별로 Stage 5 JSON 파일을 하나씩 업로드",
        detail: "씬이 샷으로 세분화되며 초록색 동그라미로 표시됩니다."
      },
      {
        number: "2",
        title: "샷 구조 확인",
        description: "세분화된 샷 구조 검토",
        detail: "각 샷의 순서와 내용을 확인하고 필요시 수정합니다."
      }
    ]
  }

  const stage6Content = {
    title: "Stage 6: 이미지 생성",
    description: "각 샷별 이미지 프롬프트 생성",
    steps: [
      {
        number: "1",
        title: "JSON 업로드",
        description: "각 씬별로 Stage 6 JSON 파일 업로드",
        detail: "각 샷별 이미지 프롬프트가 자동으로 생성됩니다."
      },
      {
        number: "2",
        title: "이미지 생성",
        description: "Midjourney 등에서 이미지 생성",
        detail: "생성된 프롬프트를 복사하여 이미지 생성 도구에서 실행합니다."
      },
      {
        number: "3",
        title: "URL 저장",
        description: "마음에 드는 이미지의 URL 복사",
        detail: "프레임워크에 URL을 붙여넣어 참고용으로 저장합니다."
      }
    ]
  }

  const stage7Content = {
    title: "Stage 7: 영상 생성",
    description: "각 샷별 영상 프롬프트 생성",
    steps: [
      {
        number: "1",
        title: "JSON 업로드",
        description: "각 씬별로 Stage 7 JSON 파일 업로드",
        detail: "각 샷별 영상 프롬프트가 자동으로 생성됩니다."
      },
      {
        number: "2",
        title: "영상 클립 생성",
        description: "Kling AI, Runway 등에서 영상 생성",
        detail: "프롬프트를 사용하여 각 샷별 영상 클립을 생성합니다."
      },
      {
        number: "3",
        title: "영상 다운로드",
        description: "편집용 영상 파일 다운로드",
        detail: "실제 편집을 위해 영상을 다운받아 샷별로 저장합니다."
      }
    ]
  }

  const stage8Content = {
    title: "Stage 8: 오디오 생성",
    description: "대사, 나레이션, 음향효과 생성",
    steps: [
      {
        number: "1",
        title: "JSON 업로드",
        description: "각 씬별로 Stage 8 JSON 파일 업로드",
        detail: "대사, 나레이션, 음향효과 스크립트가 생성됩니다."
      },
      {
        number: "2",
        title: "음성 생성",
        description: "ElevenLabs, 수퍼톤 등에서 음성 생성",
        detail: "생성된 대사와 나레이션을 TTS 도구로 변환합니다."
      },
      {
        number: "3",
        title: "오디오 통합",
        description: "영상 편집 시 오디오 삽입",
        detail: "다운로드한 음성 파일을 영상 편집 시 적절한 위치에 삽입합니다."
      }
    ]
  }

  const renderStageContent = (content, stageId) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
        <p className="text-xl text-gray-600">{content.description}</p>
      </div>

      <div className="space-y-6">
        {content.steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-2">
                  {step.description}
                </CardDescription>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700">{step.detail}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Stage 4 특별 컨셉아트 구성 카드 */}
      {stageId === 'stage4' && (
        <div className="mt-8">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Palette className="h-5 w-5 mr-2" />
                컨셉아트 구성 요소
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Users className="h-10 w-10 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold">캐릭터</p>
                  <p className="text-sm text-gray-600">인물 설정</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">장소</p>
                  <p className="text-sm text-gray-600">배경 설정</p>
                </div>
                <div className="text-center">
                  <Sparkles className="h-10 w-10 text-pink-600 mx-auto mb-2" />
                  <p className="font-semibold">소품</p>
                  <p className="text-sm text-gray-600">오브젝트 설정</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* 각 스테이지별 워크플로우 다이어그램 */}
      <div className="mt-8">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <FileJson className="h-5 w-5 mr-2" />
              워크플로우 프로세스
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex items-center justify-center space-x-4">
              {stageId === 'stage1' && (
                <>
                  <Sparkles className="h-12 w-12 text-blue-600" />
                  <div className="text-3xl">→</div>
                  <Edit className="h-12 w-12 text-green-600" />
                  <div className="text-3xl">→</div>
                  <FileJson className="h-12 w-12 text-purple-600" />
                </>
              )}
              {stageId === 'stage2' && (
                <>
                  <FileJson className="h-12 w-12 text-blue-600" />
                  <div className="text-3xl">→</div>
                  <Upload className="h-12 w-12 text-green-600" />
                  <div className="text-3xl">→</div>
                  <Edit className="h-12 w-12 text-purple-600" />
                </>
              )}
              {stageId === 'stage3' && (
                <>
                  <FileJson className="h-12 w-12 text-blue-600" />
                  <div className="text-3xl">→</div>
                  <Upload className="h-12 w-12 text-green-600" />
                  <div className="text-3xl">→</div>
                  <Palette className="h-12 w-12 text-purple-600" />
                </>
              )}
              {stageId === 'stage4' && (
                <>
                  <FileJson className="h-12 w-12 text-blue-600" />
                  <div className="text-3xl">→</div>
                  <Upload className="h-12 w-12 text-green-600" />
                  <div className="text-3xl">→</div>
                  <Users className="h-12 w-12 text-purple-600" />
                </>
              )}
              {stageId === 'stage5' && (
                <>
                  <FileJson className="h-12 w-12 text-blue-600" />
                  <div className="text-3xl">→</div>
                  <Upload className="h-12 w-12 text-green-600" />
                  <div className="text-3xl">→</div>
                  <Layers className="h-12 w-12 text-purple-600" />
                </>
              )}
              {stageId === 'stage6' && (
                <>
                  <FileJson className="h-12 w-12 text-blue-600" />
                  <div className="text-3xl">→</div>
                  <Upload className="h-12 w-12 text-green-600" />
                  <div className="text-3xl">→</div>
                  <Image className="h-12 w-12 text-purple-600" />
                </>
              )}
              {stageId === 'stage7' && (
                <>
                  <FileJson className="h-12 w-12 text-blue-600" />
                  <div className="text-3xl">→</div>
                  <Upload className="h-12 w-12 text-green-600" />
                  <div className="text-3xl">→</div>
                  <Film className="h-12 w-12 text-purple-600" />
                </>
              )}
              {stageId === 'stage8' && (
                <>
                  <FileJson className="h-12 w-12 text-blue-600" />
                  <div className="text-3xl">→</div>
                  <Upload className="h-12 w-12 text-green-600" />
                  <div className="text-3xl">→</div>
                  <Music className="h-12 w-12 text-purple-600" />
                </>
              )}
            </div>
            <p className="text-center mt-4 text-gray-700 font-medium">
              {stageId === 'stage1' && '아이디어 구상 → GEM 대화형 창작 → JSON 출력'}
              {stageId === 'stage2' && 'JSON 파일 → 프레임워크 업로드 → 시나리오 구조화'}
              {stageId === 'stage3' && 'JSON 파일 → GEM 업로드 → 비주얼 컨셉 정의'}
              {stageId === 'stage4' && 'JSON 파일 → 프레임워크 업로드 → 컨셉아트 블록 생성'}
              {stageId === 'stage5' && 'JSON 파일 → 프레임워크 업로드 → 샷 분할'}
              {stageId === 'stage6' && 'JSON 파일 → 프레임워크 업로드 → 이미지 프롬프트'}
              {stageId === 'stage7' && 'JSON 파일 → 프레임워크 업로드 → 영상 프롬프트'}
              {stageId === 'stage8' && 'JSON 파일 → 프레임워크 업로드 → 오디오 스크립트'}
            </p>
          </CardContent>
        </Card>
      </div>


    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-lg border-r border-gray-200 fixed h-full overflow-y-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">STAGE GUIDE</h2>
            <p className="text-sm text-gray-600 mb-6">AIFI 프레임워크 가이드</p>
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className="w-full justify-start text-left"
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.icon}
                  <span className="ml-2 text-sm">{item.label}</span>
                </Button>
              ))}
            </nav>

            {/* 폴더 구조 표시 */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <FolderOpen className="h-4 w-4 mr-2" />
                폴더 구조
              </h3>
              <div className="text-xs font-mono text-gray-600 space-y-1">
                <div>프로젝트/</div>
                <div className="ml-3">├── Stage 1/</div>
                <div className="ml-3">├── Stage 2/</div>
                <div className="ml-3">├── Stage 3/</div>
                <div className="ml-3">├── Stage 4/</div>
                <div className="ml-3">├── Stage 5/</div>
                <div className="ml-3">├── Stage 6/</div>
                <div className="ml-3">├── Stage 7/</div>
                <div className="ml-3">└── Stage 8/</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-80 p-8">
          {activeSection === 'stage1' && renderStageContent(stage1Content, 'stage1')}
          {activeSection === 'stage2' && renderStageContent(stage2Content, 'stage2')}
          {activeSection === 'stage3' && renderStageContent(stage3Content, 'stage3')}
          {activeSection === 'stage4' && renderStageContent(stage4Content, 'stage4')}
          {activeSection === 'stage5' && renderStageContent(stage5Content, 'stage5')}
          {activeSection === 'stage6' && renderStageContent(stage6Content, 'stage6')}
          {activeSection === 'stage7' && renderStageContent(stage7Content, 'stage7')}
          {activeSection === 'stage8' && renderStageContent(stage8Content, 'stage8')}
        </div>
      </div>
    </div>
  )
}

export default StoryboardPage