<template>
  <div>
    <ProjectCard title="AI를 활용한 반도체 칩 패턴 불량 검출 시스템" subtitle="2021 (1인 개발, 공정 엔지니어 라벨링 협업)"
                 :slider-image="sliderImage" @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span class="project-title">AI를 활용한 반도체 칩 패턴 불량 검출 시스템<br><br></span>
          <p>
            반도체 제조 공정에서 웨이퍼(Wafer)의 칩 패턴을 검수할 때 <strong>하루에 수만 장의 이미지가 생성되어 사람이 모든 불량을 육안으로 찾아내는 것은 현실적으로 불가능한 업무</strong>였습니다.
          </p>
          <p>
            YOLOv5 기반 딥러닝 모델을 활용하여 <strong>일일 수만 장의 이미지를 자동으로 검사하고 불량을 실시간으로 검출</strong>하는 시스템을 개발했습니다.
          </p>
          <p>
            mAP 0.5 이상의 높은 검출 정확도를 달성하여 <strong>총 10가지 유형의 패턴 불량을 성공적으로 식별</strong>할 수 있었습니다.
          </p>
          <p>
            이 시스템을 통해 <strong>불량 제품의 출하를 방지하여 상당한 비용 절감 효과</strong>를 가져왔으며, 고가의 상용 비전 AI 시스템 대신 자체 개발함으로써 유연성 확보 및 구축 비용 절감이라는 이중 효과를 얻었습니다.
          </p>
          <p class="note">
            * 실제 제품 설계와 관련된 민감한 데이터로 인해 실제 이미지는 포트폴리오에 첨부하지 않았습니다.
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
              <li>실시간 패턴 불량 자동 검출</li>
              <li>10가지 유형의 불량 패턴 분류</li>
              <li>대용량 이미지 데이터 처리 파이프라인</li>
            </ul>
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            기술 스택
          </div>
          <div>
            <ul class="stack-list">
              <li><strong>AI:</strong> YOLOv5, PyTorch</li>
              <li><strong>데이터 처리:</strong> Python, Pandas, NumPy</li>
              <li><strong>라벨링:</strong> CVAT(Computer Vision Annotation Tool)</li>
              <li><strong>인프라:</strong> CUDA, GPU 병렬 처리</li>
            </ul>
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            성과
          </div>
          <div>
            <ul class="achievement-list">
              <li>삼성 협력사 우수 아이템 선정</li>
            </ul>
          </div>
        </div>
      </template>
    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          AI를 활용한 반도체 칩 패턴 불량 검출 시스템
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
              반도체 제조 공정에서는 매일 수만 장의 칩 패턴 이미지가 생성되며, 이를 수동으로 검사하여 불량을 검출하는 것은 시간과 인력 측면에서 비효율적이었고 검출 누락으로 인한 불량 제품 출하가 발생하는 문제가 있었습니다.
            </p>
            <p>
              이러한 문제를 해결하기 위해 <strong>최신 객체 탐지 알고리즘인 YOLOv5를 활용하여 자동화된 패턴 불량 검출 시스템</strong>을 개발했습니다. 이 시스템은 실시간으로 대량의 이미지를 분석하여 다양한 유형의 불량을 정확하게 식별합니다.
            </p>
          </div>

          <div class="row items-center section-header">
            <q-icon name="insights" size="30px" color="primary"></q-icon>
            <div class="section-title">
              프로젝트 의의
            </div>
          </div>
          <div class="section-content">
            <p>
              YOLOv5 네트워크를 산업 현장에 적용한 결과, <strong>mAP 0.5 이상의 높은 정확도로 불량을 식별</strong>할 수 있었습니다. 이는 생산 품질 관리에 획기적인 개선을 가져왔습니다.
            </p>
            <p>
              회사에서 투자한 고성능 GPU 2대를 활용하여 모델 학습과 실시간 추론이 원활하게 가능했으며, 이를 통해 대용량 데이터 처리와 실제 생산 환경에 적용할 수 있는 애플리케이션 개발이 가능했습니다.
            </p>
            <p>
              이 프로젝트는 <strong>삼성 협력사 우수 아이템으로 선정</strong>되어 기술적 가치를 인정받았으며, 실제 생산 라인에 적용되어 불량 유출 방지와 품질 향상에 크게 기여했습니다.
            </p>
          </div>

          <div class="row items-center section-header">
            <q-icon name="warning" size="30px" color="negative"></q-icon>
            <div class="section-title">
              직면한 문제점
            </div>
          </div>
          <div class="section-content">
            <ul class="detail-list">
              <li>
                <strong>대규모 데이터 라벨링:</strong> 모델 학습을 위한 방대한 양의 이미지 라벨링 작업이 필요했으며, 공정 엔지니어와의 협업을 통해 전문적인 라벨링 데이터를 확보했습니다.
              </li>
              <li>
                <strong>불량 샘플 부족:</strong> 실제 불량 이미지는 전체 데이터셋에서 매우 적은 비율을 차지하여 학습 데이터의 불균형 문제가 있었으나, 데이터 증강 기법을 적용하여 해결했습니다.
              </li>
              <li>
                <strong>실시간 처리 요구:</strong> 생산 라인의 속도에 맞춰 실시간으로 불량을 검출해야 하는 요구사항이 있어 모델 경량화와 병렬 처리 파이프라인을 구축했습니다.
              </li>
            </ul>
          </div>

          <div class="row items-center section-header">
            <q-icon name="emoji_events" size="30px" color="positive"></q-icon>
            <div class="section-title">
              성과 및 배운 점
            </div>
          </div>
          <div class="section-content">
            <ul class="detail-list">
              <li>
                <strong>산업 AI 적용 경험:</strong> 딥러닝 기술을 실제 산업 현장에 성공적으로 적용하여 이론과 실무의 간극을 좁히는 귀중한 경험을 쌓았습니다.
              </li>
              <li>
                <strong>비용 절감 효과:</strong> 불량품 출하 방지로 인한 직접적인 비용 절감과 함께, 고가의 상용 시스템을 대체함으로써 간접적인 비용 절감 효과도 달성했습니다.
              </li>
              <li>
                <strong>확장성 확보:</strong> 유연한 아키텍처 설계를 통해 새로운 불량 유형이 발견될 때마다 모델을 쉽게 업데이트하고 확장할 수 있는 시스템을 구축했습니다.
              </li>
              <li>
                <strong>데이터 기반 의사결정:</strong> 시스템이 수집한 불량 데이터를 분석하여 제조 공정 개선에 활용하는 추가적인 가치도 창출했습니다.
              </li>
            </ul>
          </div>

          <div class="row items-center section-header">
            <q-icon name="build" size="30px" color="warning"></q-icon>
            <div class="section-title">
              기술 스택 및 구현 세부사항
            </div>
          </div>
          <div class="section-content">
            <ul class="detail-list">
              <li>
                <strong>객체 검출 모델:</strong> YOLOv5 아키텍처를 기반으로 반도체 패턴 불량 검출에 최적화된 커스텀 모델 개발
              </li>
              <li>
                <strong>딥러닝 프레임워크:</strong> PyTorch를 활용한 모델 학습 및 추론 파이프라인 구축
              </li>
              <li>
                <strong>데이터 처리:</strong> Pandas, NumPy를 활용한 대용량 이미지 데이터 전처리 및 후처리
              </li>
              <li>
                <strong>라벨링 도구:</strong> CVAT(Computer Vision Annotation Tool)을 활용한 효율적인 데이터 라벨링 워크플로우 구축
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

const sliderImage = ref(["/PattenDefectAI/PattenDefectAI1.png",
  "/PattenDefectAI/PattenDefectAI2.png",
])

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
}

.gTitle {
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-top: 12px;
}

.gTitle q-icon {
  margin-right: 8px;
}

.project-title {
  font-weight: bold;
  font-size: 1.2rem;
  color: #1976d2;
}

.note {
  font-style: italic;
  font-size: 0.9rem;
  color: #666;
  margin-top: 16px;
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

.detail-list, .feature-list, .stack-list, .achievement-list {
  margin: 0;
  padding-left: 20px;
}

.detail-list li {
  margin-bottom: 12px;
}

.feature-list, .stack-list, .achievement-list {
  margin: 0;
  padding-left: 20px;
}

.feature-list li, .stack-list li, .achievement-list li {
  margin-bottom: 4px;
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
