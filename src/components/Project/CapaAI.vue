<template>
  <div>
    <ProjectCard title="AI를 이용한 반도체 설비 생산량 예측" subtitle="2021 (1인 개발,AI)" :slider-image="sliderImage"
                 @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span class="project-title">AI를 이용한 반도체 설비 생산량 예측<br><br></span>
          <p> 반도체 설비는 특성상 매번 <strong> 다양한 제품을 생산 하고 제품 마다 생산 시간이 다르고 조건도 다양하여
            설비의 생산량을 계산 하는데 많은 자원과 시간</strong>이 들어가는 문제가 있습니다.
          </p>
          <p>
            또한 제조업 특성상 얼마나 생산 가능 한 것 인가는 너무나 중요한 지표 입니다.
          </p>
          <p>
            그래서 보다 정확한 예측을 위해 <strong>MES 데이터, 설비 데이터 등을 이용하여 인공 지능을 적용</strong> 시켯던 프로젝트 입니다.
          </p>
          <p>
            <strong>회귀 분석 모델을 활용하여 생산량 예측 정확도 90% 이상을 달성</strong>했으며, 실제 공장에서 발생하는 생산량 예측 불일치 문제를 해결했습니다.
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
              <li>AI 기반 설비 생산량 자동 예측</li>
              <li>데이터 기반 생산 효율성 분석</li>
              <li>MES 및 설비 데이터 통합 분석</li>
            </ul>
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            Backend Stack
          </div>
          <div>
            <ul class="stack-list">
              <li><strong>Backend:</strong> Spring, Java, QueryDsl, SpringJPA, SpringSecurity</li>
            </ul>
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            Front Stack
          </div>
          <div>
            <ul class="stack-list">
              <li><strong>Frontend:</strong> Vue, TypeScript</li>
            </ul>
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            AI, BigData Stack
          </div>
          <div>
            <ul class="stack-list">
              <li><strong>AI/ML:</strong> Scikit-learn, Pandas, NumPy</li>
            </ul>
          </div>
        </div>
      </template>
    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          AI를 이용한 반도체 설비 생산량 예측
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
              반도체 설비들은 다양한 제품을 생산하며, 각 제품마다 생산 시간과 조건이 달라 <strong>설비의 생산량을 계산하는 데 많은 인력과 시간이 소요</strong>되는 문제가 있었습니다.
            </p>
            <p>
              제조업에서 정확한 생산량 예측은 생산 계획, 리소스 할당, 납기 관리 등에 직접적인 영향을 미치는 핵심 지표로, 이를 개선하기 위해 <strong>MES 데이터와 설비 데이터를 활용한 AI 기반 생산량 예측 시스템</strong>을 개발했습니다.
            </p>
            <p>
              실제로 <strong>MES와 설비 데이터를 활용하여 회귀 분석</strong>을 진행했으며, 통계적으로 유의미한 결과를 얻어 프로그램으로 개발 완료하였습니다.
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
              AI 관련 프로젝트 중 <strong>회귀 분석을 현장에 적용하여 실제 생산량 예측에 성공</strong>한 프로젝트입니다.
            </p>
            <p>
              사람이 분석한 생산량과 AI가 분석한 생산량이 다른 경우, 상세 분석 결과 <strong>대부분 AI가 더 정확하게 예측</strong>했음을 확인하여 기술에 대한 신뢰도를 높였습니다.
            </p>
            <p>
              이 프로젝트를 통해 <strong>AI의 실제 효과를 체감</strong>할 수 있었으며, 향후 추가적인 고도화를 통해 더 넓은 범위의 생산 환경에 적용할 계획입니다.
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
                <strong>데이터 상관관계 분석:</strong> MES와 설비 데이터에서 생산량 예측에 유의미한 상관관계가 있는 특성(feature)을 찾는 작업이 필요했습니다.
              </li>
              <li>
                <strong>노이즈 데이터 처리:</strong> 실제 생산 환경에서 발생하는 다양한 노이즈 데이터를 필터링하고 전처리하는 과정이 필요했습니다.
              </li>
              <li>
                <strong>예측 모델 정확도:</strong> 다양한 생산 조건에서도 일관된 예측 정확도를 유지하기 위한 모델 튜닝이 필요했습니다.
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
                <strong>회귀 모델 실무 적용:</strong> AI 회귀 모델을 실제 산업 현장에 적용하여 이론적 지식을 실무에 성공적으로 활용했습니다.
              </li>
              <li>
                <strong>높은 예측 정확도:</strong> 개발된 모델은 <strong>평균 R² 스코어(설명력) 90% 이상</strong>의 높은 성능을 보여주었습니다.
              </li>
              <li>
                <strong>생산 효율성 향상:</strong> 정확한 생산량 예측을 통해 생산 계획 수립의 효율성이 향상되었고, 자원 할당 최적화에 기여했습니다.
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
                <strong>Backend:</strong> Spring Boot 기반의 견고한 백엔드 시스템을 구축하고, Spring JPA와 QueryDSL을 활용한 효율적인 데이터 액세스 레이어를 개발했습니다.
              </li>
              <li>
                <strong>Frontend:</strong> Vue와 TypeScript를 활용하여 직관적인 사용자 인터페이스를 구현했으며, 복잡한 데이터 시각화와 예측 결과를 효과적으로 표현했습니다.
              </li>
              <li>
                <strong>AI/ML:</strong> Scikit-learn 라이브러리를 활용한 회귀 모델을 개발하고, Pandas와 NumPy를 이용한 대규모 데이터 전처리 파이프라인을 구축했습니다.
              </li>
              <li>
                <strong>데이터 통합:</strong> MES 시스템과 설비 데이터를 효과적으로 통합하여 분석할 수 있는 데이터 파이프라인을 구축했습니다.
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

const sliderImage = ref(["/Capa/capa1.png",
  "/Capa/capa2.png",
  "/Capa/capa3.png",
  "/Capa/capa4.png"])

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

.detail-list, .feature-list, .stack-list {
  margin: 0;
  padding-left: 20px;
}

.detail-list li {
  margin-bottom: 12px;
}

.feature-list li, .stack-list li {
  margin-bottom: 4px;
}

.dSubTitle {
  display: flex;
  align-items: baseline;
  height: 2rem;
  font-size: 1.75rem;
  font-weight: bold;
  font-family: 'Noto Sans KR';
  margin-bottom: 32px;
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
