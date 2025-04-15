<template>
  <div>
    <ProjectCard title="웨이퍼 뒷면 DeepLearning 불량 검출" :slider-image="sliderImage" subtitle="2020(1인 개발,협력 업체 의뢰)"
                 @detailShow="onDetailShow">

      <template v-slot:contentText>
        <div class="content">
          <span class="project-title">웨이퍼 뒷면 DeepLearning 불량 검출<br><br></span>
          <p>
            웨이퍼 뒷면 불량 검출에 있어 <strong>전통적인 방식으로는 다양한 패턴의 불량을 인식하는데 한계</strong>가 있었습니다.
          </p>
          <p>
            <strong>RetinaNet 기반 객체 인식 모델</strong>을 적용하여 높은 정확도로 불량을 자동 검출하는 시스템을 구축했습니다.
          </p>
          <p>
            반도체 공정 설비 모니터링을 담당하는 협력 업체의 이미지 인식 문제를 파악하고, 
            <strong>딥러닝 모델을 통해 효과적인 솔루션을 제공</strong>했습니다.
          </p>
        </div>
      </template>
      
      <template v-slot:summary>
        <div class="container" style="padding-top: 16px">
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            주요 기능
          </div>
          <div>
            <ul class="feature-list">
              <li>RetinaNet 기반 웨이퍼 뒷면 불량 자동 검출</li>
              <li>다양한 불량 패턴 동시 인식 (스크래치, 얼룩, 파티클 등)</li>
              <li>검출 결과 시각화 및 분석 리포트 생성</li>
            </ul>
          </div>
          
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            기술 스택
          </div>
          <div>
            <ul class="stack-list">
              <li><strong>AI:</strong> RetinaNet, TensorFlow, Keras</li>
              <li><strong>데이터 처리:</strong> Python, Pandas, NumPy</li>
              <li><strong>시각화:</strong> OpenCV, Matplotlib</li>
            </ul>
          </div>
          
          <div class="gTitle" style="margin-top: 16px">
            <q-icon name="fa-solid fa-check"></q-icon>
            소스 코드
          </div>
          <div>
            <div class="link" @click="gotoWebPage('https://github.com/kimbakcho/cImageErrorFind')">
              <q-icon name="fa-brands fa-github"></q-icon> GitHub 저장소 방문하기
            </div>
          </div>
        </div>
      </template>
    </ProjectCard>
    
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          웨이퍼 뒷면 DeepLearning 불량 검출
        </div>
        <div>
          <div class="row items-center section-header">
            <img src="@/assets/summary.png" class="section-icon"/>
            <div class="section-title">
              프로젝트 개요
            </div>
          </div>
          <div class="section-content">
            <p>
              반도체 웨이퍼 뒷면의 다양한 불량을 딥러닝 모델을 이용해 자동으로 검출하고 분류하는 시스템을 구축했습니다.
            </p>
          </div>

          <div class="row items-center section-header">
            <q-icon name="insights" size="30px" color="primary"></q-icon>
            <div class="section-title">
              프로젝트 배경 및 의의
            </div>
          </div>
          <div class="section-content">
            <p>
              반도체 제조 공정에서 웨이퍼 뒷면의 불량은 제품 품질에 중대한 영향을 미침에도 불구하고, <strong>기존의 전통적인 
              이미지 처리 방식으로는 다양한 패턴의 불량을 정확히 검출하기 어려운 문제</strong>가 있었습니다.
            </p>
            <p>
              설비 모니터링 협력업체와의 논의 과정에서 이 문제를 인식하고, <strong>딥러닝 기술을 활용한 해결책을 제안</strong>했습니다. 
              RetinaNet 모델을 기반으로 한 객체 인식 시스템을 개발하여, 스크래치, 얼룩, 파티클 등 
              다양한 불량 유형을 높은 정확도로 검출하는데 성공했습니다.
            </p>
          </div>
            
          <div class="row items-center section-header">
            <q-icon name="emoji_events" size="30px" color="positive"></q-icon>
            <div class="section-title">
              주요 성과
            </div>
          </div>
          <div class="section-content">
            <ul class="detail-list">
              <li>
                <strong>불량 검출률 향상</strong>
              </li>
              <li>
                <strong>다양한 불량 유형 인식:</strong> 5가지 주요 불량 유형을 동시에 검출 및 분류
              </li>
              <li>
                <strong>현장 적용 확대:</strong> 성공적인 검증 후 2개 이상의 FAB 라인에 확대 적용
              </li>
            </ul>
          </div>
            
          <div class="row items-center section-header">
            <q-icon name="summarize" size="30px" color="info"></q-icon>
            <div class="section-title">
              프로젝트 진행 과정
            </div>
          </div>
          <div class="section-content">
            <ul class="process-list">
              <li>
                <strong>요구사항 분석 및 데이터 수집:</strong> 협력업체와 미팅을 통해 문제점을 파악하고 웨이퍼 이미지 샘플 확보
              </li>
              <li>
                <strong>데이터 전처리 및 증강:</strong> 제한된 불량 이미지를 회전, 반전, 밝기 조정 등을 통해 증강
              </li>
              <li>
                <strong>RetinaNet 모델 구축 및 학습:</strong> 웨이퍼 불량 검출에 최적화된 객체 인식 모델 구현 및 학습
              </li>
              <li>
                <strong>모델 최적화 및 성능 검증:</strong> 하이퍼파라미터 튜닝과 교차 검증을 통한 모델 성능 최적화
              </li>
              <li>
                <strong>현장 적용 및 피드백:</strong> 실제 생산 환경에 적용하여 검증 후 지속적인 개선
              </li>
            </ul>
          </div>

          <div class="row items-center section-header">
            <q-icon name="warning" size="30px" color="negative"></q-icon>
            <div class="section-title">
              도전 과제
            </div>
          </div>
          <div class="section-content">
            <ul class="detail-list">
              <li>
                <strong>데이터 부족:</strong> 충분한 불량 이미지 샘플 확보의 어려움을 데이터 증강 기법으로 극복
              </li>
              <li>
                <strong>다양한 불량 패턴:</strong> 형태와 크기가 다양한 불량을 동시에 검출하기 위한 모델 최적화
              </li>
              <li>
                <strong>실시간 처리:</strong> 생산 환경에서의 신속한 결과 도출을 위한 추론 속도 개선
              </li>
            </ul>
          </div>

          <div class="row items-center section-header">
            <q-icon name="lightbulb" size="30px" color="warning"></q-icon>
            <div class="section-title">
              성과 및 학습
            </div>
          </div>
          <div class="section-content">
            <ul class="detail-list">
              <li>
                <strong>실제 현장 적용:</strong> 개발된 시스템이 2개 이상의 FAB 라인에 성공적으로 도입
              </li>
              <li>
                <strong>딥러닝 개발 역량:</strong> AI 모델 개발부터 실제 현장 적용까지 전체 프로세스 경험
              </li>
              <li>
                <strong>비즈니스 가치:</strong> 품질 향상을 통한 생산 수율 개선 및 비용 절감 효과
              </li>
            </ul>
          </div>
            
          <div class="row items-center section-header">
            <q-icon name="build" size="30px" color="warning"></q-icon>
            <div class="section-title">
              기술 스택 상세
            </div>
          </div>
          <div class="section-content">
            <ul class="detail-list">
              <li>
                <strong>Python:</strong> 전체 개발 언어 및 데이터 처리
              </li>
              <li>
                <strong>TensorFlow/Keras:</strong> 딥러닝 모델 구현 및 학습
              </li>
              <li>
                <strong>RetinaNet:</strong> 객체 인식을 위한 단일 스테이지 디텍터 네트워크
              </li>
              <li>
                <strong>Pandas/NumPy:</strong> 데이터 처리 및 분석
              </li>
              <li>
                <strong>OpenCV:</strong> 이미지 전처리 및 시각화
              </li>
            </ul>
          </div>
        </div>
      </template>
    </ProjectDetailDialog>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue"
import ProjectDetailDialog from "@/components/Project/ProjectDetailDialog.vue"
import {ref} from "vue";

const sliderImage = ref(["/BackWaferMapDefectProject/defectImage1.png",
  "/BackWaferMapDefectProject/defectImage2.png",
  "/BackWaferMapDefectProject/defectImage3.png",
  "/BackWaferMapDefectProject/defectImage4.png",
  "/BackWaferMapDefectProject/defectImage5.png"])

const dialog = ref(false)

function gotoWebPage(url: string) {
  window.open(url, "_blank")
}

function onDetailShow() {
  dialog.value = true;
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-row-gap: 0.5rem;
}

.link {
  cursor: pointer;
  color: #258ddb;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s;
}

.link:hover {
  color: #1a6baa;
  text-decoration: underline;
}

.gTitle {
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
}

.dTitle {
  font-family: "Noto Sans KR";
  font-size: 1.75rem;
  font-weight: bold;
  padding-bottom: 16px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 32px;
  color: #1976d2;
}

.project-title {
  font-weight: bold;
  font-size: 1.2rem;
  color: #1976d2;
}

.project-description {
  line-height: 1.6;
}

.section-header {
  margin-top: 32px;
  margin-bottom: 16px;
}

.section-icon {
  height: 30px;
}

.section-title {
  margin-left: 16px;
  font-size: 1.5rem;
  font-family: 'Noto Sans KR';
  font-weight: bold;
  color: #333;
}

.section-content {
  font-family: 'Noto Sans KR';
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.feature-list, .stack-list, .process-list, .detail-list {
  margin: 0;
  padding-left: 20px;
}

.feature-list li, .stack-list li {
  margin-bottom: 4px;
}

.process-list li, .detail-list li {
  margin-bottom: 12px;
}

@media screen and (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    overflow-wrap: anywhere;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
  
  .section-content {
    font-size: 1rem;
  }
  
  .dTitle {
    font-size: 1.5rem;
  }
}
</style>
