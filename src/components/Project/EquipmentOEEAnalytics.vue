<template>
  <div>
    <ProjectCard title="설비 가동률 집계 및 분석 시스템" subtitle="2023(1인 개발)"
                 :slider-image="sliderImage" @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span class="project-title">설비 가동률 집계 및 분석 시스템<br><br></span>
          <p>
            제조 현장에서 신뢰성 있는 설비 가동률 지표 확보의 어려움과 신속한 원인 분석 부재 문제를 해결하기 위해 개발한 시스템입니다.
          </p>
          <p>
            설비 인터페이스를 통해 실시간 데이터를 수집/분석하여 가동률을 모니터링하고, 상세한 상태 이력 기록으로 정확한 원인 규명을 지원합니다.
          </p>
          <p>
            실시간 가동률 현황 파악 및 이상 발생 시 관리자 알림 기능을 통해 선제적인 대응을 가능하게 합니다.
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
              <li>실시간 설비 가동률(시간/성능) 및 OEE 지표 모니터링</li>
              <li>설비별 생산량 및 가동 현황 시각화 대시보드</li>
              <li>설비 상태(가동, 정지, 고장, PM 등) 이력 관리 및 원인 분석 지원</li>
            </ul>
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            기술 스택
          </div>
          <div>
            <ul class="stack-list">
              <li><strong>BackEnd:</strong> Django (Python) - REST API 개발</li>
              <li><strong>FrontEnd:</strong> Vue.js (TypeScript) - 반응형 UI/UX 개발</li>
              <li><strong>Database:</strong> MariaDB - 데이터 모델링 및 관리</li>
            </ul>
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            주요 성과
          </div>
          <div>
            <ul class="achievement-list">
              <li>가동률 저하 시 데이터 기반의 신속한 원인 분석 및 대응 프로세스 구축</li>
            </ul>
          </div>
        </div>
      </template>
    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          설비 가동률 집계 및 분석 시스템
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
              제조 현장에서 관리자는 신뢰도 높은 설비 가동률 지표를 산출하고 그 원인을 신속하게 파악하는 데 어려움을 겪습니다. 이 문제를 해결하기 위해 본 시스템을 개발했습니다.
            </p>
            <p>
              설비 인터페이스(예: secs/gem, 센서 데이터 등)를 통해 발생하는 데이터를 실시간으로 수집하고, 이를 가공/분석하여 설비의 시간 가동률, 성능 가동률 등 핵심 지표를 모니터링합니다.
            </p>
            <p>
              또한, 설비의 모든 상태 변화(가동, 정지, 고장, 예방 정비 등)를 상세히 기록하여 가동률 저하 발생 시 정확한 원인 분석을 지원하며, 설정된 임계값 기반의 알림 기능을 통해 관리자의 즉각적인 인지 및 대응을 돕습니다.
            </p>
          </div>

          <div class="row items-center section-header">
            <q-icon name="insights" size="30px" color="primary"></q-icon>
            <div class="section-title">
              프로젝트 목표 및 의의
            </div>
          </div>
          <div class="section-content">
            <p>
              단순 가동률 집계를 넘어, 설비 비가동 시간 (고장, 예방 정비 지연, 유휴 시간 등)에 대한 체계적인 이력 관리를 가능하게 합니다. 이를 통해 데이터에 기반한 정확한 원인 분석 및 생산성 개선 활동의 기초를 마련하는 데 의의가 있습니다.
            </p>
          </div>

          <div class="row items-center section-header">
            <q-icon name="warning" size="30px" color="negative"></q-icon>
            <div class="section-title">
              개발 과정 중 직면한 과제
            </div>
          </div>
          <div class="section-content">
            <ul class="detail-list">
              <li>
                <strong>설비별 상태 정의 로직의 다양성:</strong> 각 설비의 특성과 통신 프로토콜(메시지)이 상이하여, 설비 상태를 일관되게 파악하기 위한 표준화 및 개별 로직 구현 필요.
              </li>
              <li>
                <strong>'가동' 상태 정의의 모호성:</strong> 설비별, 공정별 특성에 따라 '실질적 가동' 상태를 정의하는 기준에 대한 현업 부서와의 지속적인 논의 및 합의 과정 요구.
              </li>
              <li>
                <strong>특이 상태 처리의 어려움:</strong> 표준 상태(가동, 정지, 고장 등) 외 예측하지 못한 예외적 설비 상태 발생 시, 이를 분류하고 기록/분석하는 로직 설계.
              </li>
              <li>
                <strong>다중 작업 설비의 가동률 산정 복잡성:</strong> 단일 설비 내 여러 챔버(모듈)가 독립적으로 작동할 경우(예: 일부 가동, 일부 정지), 전체 설비의 가동률을 합리적으로 산정하는 기준 정의.
              </li>
            </ul>
          </div>

          <div class="row items-center section-header">
            <q-icon name="emoji_events" size="30px" color="positive"></q-icon>
            <div class="section-title">
              주요 성과 및 학습 경험
            </div>
          </div>
          <div class="section-content">
            <ul class="detail-list">
              <li>
                <strong>제조업 표준 지표(OEE) 이해 및 적용:</strong> OEE(Overall Equipment Effectiveness: 설비종합효율) 등 제조업 표준 가동률 계산 방식을 학습하고 시스템에 적용하여 신뢰도 높은 지표 산출 능력 향상.
              </li>
              <li>
                <strong>요구사항 변화에 대한 유연한 설계 경험:</strong> 설비별/관리자별 가동 상태 기준 정의가 달라질 수 있음을 인지하고, 변경에 유연하게 대응할 수 있는 설정 기반의 시스템 아키텍처 설계 경험 습득.
              </li>
              <li>
                <strong>데이터 기반 의사결정 지원의 중요성 체감:</strong> 정확한 가동률 데이터가 설비 투자, 공정 개선 등 경영진의 의사결정에 미치는 영향을 직접 확인하며 데이터 분석 시스템의 중요성 인식.
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
                <strong>BackEnd:</strong> Python 기반의 Django 프레임워크를 사용하여 안정적이고 확장 가능한 RESTful API 서버 구축. (DRF 사용 등 구체적인 라이브러리 추가 가능)
              </li>
              <li>
                <strong>FrontEnd:</strong> Vue.js와 UI 라이브러리(예: Quasar)를 활용하여 실시간 데이터 시각화 및 사용자 인터랙션을 위한 반응형 웹 대시보드 개발.
              </li>
              <li>
                <strong>Database:</strong> MariaDB를 사용하여 설비 상태 이력, 생산 데이터 등 대용량 시계열 데이터 저장을 위한 효율적인 스키마 설계 및 쿼리 최적화.
              </li>
            </ul>WW
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

// TODO: 슬라이더 이미지를 실제 프로젝트 이미지 경로로 변경하세요.
const sliderImage = ref([
  "/EquipmentOEEAnalytics/EquipmentOEEAnalytics1.png",
  "/EquipmentOEEAnalytics/EquipmentOEEAnalytics2.png",
  "/EquipmentOEEAnalytics/EquipmentOEEAnalytics3.png",
  "/EquipmentOEEAnalytics/EquipmentOEEAnalytics4.png",
  "/EquipmentOEEAnalytics/EquipmentOEEAnalytics5.png",
  "/EquipmentOEEAnalytics/EquipmentOEEAnalytics6.png",
])

const dialog = ref(false)

// gotoWebPage 함수는 현재 사용되지 않으므로 제거하거나,
// 만약 프로젝트 관련 외부 링크(데모, GitHub 등)가 있다면 활용할 수 있습니다.
/*
function gotoWebPage(url: string) {
  window.open(url, "_blank")
}
*/

function onDetailShow() {
  dialog.value = true;
}

</script>

<style scoped>
/* 기존 스타일 유지 */
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
  color: #1976d2; /* 테마 색상 유지 */
}

.note {
  font-style: italic;
  font-size: 0.9rem;
  color: #666;
  margin-top: 16px;
}

.dTitle {
  font-family: "Noto Sans KR", sans-serif; /* 글꼴 지정 */
  font-size: 1.75rem;
  font-weight: bold;
  padding-bottom: 16px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 32px;
  color: #1976d2; /* 테마 색상 유지 */
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
  font-family: 'Noto Sans KR', sans-serif; /* 글꼴 지정 */
  font-weight: bold;
  color: #333;
}

.section-content {
  font-family: 'Noto Sans KR', sans-serif; /* 글꼴 지정 */
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
}

.detail-list, .feature-list, .stack-list, .achievement-list {
  margin: 0;
  padding-left: 20px; /* 들여쓰기 유지 */
}

.detail-list li {
  margin-bottom: 12px; /* 항목 간 간격 유지 */
}

.feature-list, .stack-list, .achievement-list {
  margin: 0;
  padding-left: 20px;
}

.feature-list li, .stack-list li, .achievement-list li {
  margin-bottom: 6px; /* 간격 약간 증가 */
}

/* 반응형 스타일 유지 */
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