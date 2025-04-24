<template>
  <div>
    <ProjectCard title="개발 샘플 관리 시스템" subtitle="2022 (1인 개발)"
                 :slider-image="sliderImage" @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span class="project-title">개발 샘플 관리 시스템<br><br></span>
          <p>
            양산과 병행하여 진행되는 개발 샘플 생산은 제한된 자원으로 인해 효율적인 관리가 필수적입니다. 이 시스템은 개발 샘플의 생산 현황을 실시간으로 추적하고 관리하여 생산 효율성을 극대화하고 리드 타임을 단축하기 위해 개발되었습니다.
          </p>
          <p>
            개발 샘플 관리자, 개발자, 제조 담당자 간의 원활한 소통을 지원하며, 특정 공정 도달 시 관련 담당자에게 자동으로 알림을 전송하여 불필요한 대기 시간을 줄이고 모니터링 효율을 높였습니다.
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
              <li>개발 샘플 실시간 공정 추적 및 모니터링</li>
              <li>개발 샘플 생산 일정 계획 및 관리</li>
              <li>주요 공정 도달 시 자동 알림 (Teams 연동)</li>
              <li>개발 샘플 리드 타임 데이터 분석 및 시각화</li>
            </ul>
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            기술 스택
          </div>
          <div>
            <ul class="stack-list">
              <li><strong>BackEnd:</strong> Django (Python), DRF - RESTful API 개발</li>
              <li><strong>FrontEnd:</strong> Vue.js (TypeScript), Quasar - 반응형 UI/UX 개발</li>
              <li><strong>Database:</strong> MariaDB - 데이터 모델링 및 관리</li>
            </ul>
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            주요 성과
          </div>
          <div>
            <ul class="achievement-list">
              <li>데이터 기반 관리 시스템 도입으로 개발 리드타임 단축 기여</li>
              <li>담당자 간 책임 소재 명확화 및 협업 효율 증대</li>
              <li>자동 알림 시스템을 통한 모니터링 공수 절감</li>
            </ul>
          </div>
        </div>
      </template>
    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          개발 샘플 관리 시스템 상세
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
              제한된 생산 CAPA 내에서 양산 제품과 함께 개발 샘플을 효율적으로 생산하고 관리하는 것은 중요한 과제입니다. 본 프로젝트는 개발 샘플의 생산 과정을 체계적으로 관리하고 추적하여, 생산 효율성을 높이고 최종적으로 개발 리드 타임을 단축시키는 것을 목표로 진행되었습니다.
            </p>
            <p>
              실시간 모니터링, 일정 관리, 자동 알림 기능을 통해 개발 샘플 관리자, 개발 담당자, 제조 담당자 간의 유기적인 협업을 지원하고, 데이터 기반의 의사결정을 가능하게 하는 통합 관리 시스템을 구축했습니다.
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
              핵심 목표는 제한된 자원 하에서 개발 샘플의 생산 일정을 준수하고, 관리 효율성을 극대화하는 시스템을 구축하는 것이었습니다. 이를 통해 개발 프로젝트의 지연을 방지하고, 신제품 개발 속도를 높이는 데 기여하고자 했습니다. 또한, 각 단계별 책임 소재를 명확히 하여 잠재적인 문제 발생 시 신속하게 대응할 수 있는 기반을 마련하는 데 의의가 있습니다.
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
                <strong>다양한 품종의 샘플 생산 공정 표준화:</strong> 각기 다른 공정 흐름을 가지는 다품종 샘플 관리를 위한 통일된 데이터 모델 및 관리 기준 수립의 어려움이 있었습니다.
              </li>
              <li>
                <strong>담당자별 책임 범위 정의:</strong> 개발, 제조, 관리 등 다양한 담당자의 역할과 책임 범위를 시스템 상에서 명확히 구분하고 정의하는 과정에서 조율이 필요했습니다.
              </li>
              <li>
                <strong>양산-개발 간 설비 사용 우선순위 결정:</strong> 한정된 설비 자원을 양산과 개발 샘플 생산에 어떻게 배분할지에 대한 합리적인 기준 설정이 요구되었습니다.
              </li>
              <li>
                <strong>복잡한 공정 흐름에 따른 알림 로직 구현:</strong> 다양한 공정 순서와 예외 상황을 고려하여 정확한 시점에 필요한 담당자에게 알림을 보내는 로직 설계가 복잡했습니다.
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
                <strong>양산과 개발 생산의 균형 유지 중요성 인식:</strong> 제조 관점에서 양산과 개발 모두 중요하며, 이 둘 사이의 균형을 맞추기 위한 시스템적 지원의 필요성을 깊이 이해하게 되었습니다.
              </li>
              <li>
                <strong>명확한 책임 소재 정의의 어려움과 중요성 체감:</strong> 시스템만으로는 해결하기 어려운 책임 소재 문제가 존재하며, 명확한 기준 정립을 위한 지속적인 소통과 합의 과정이 필수적임을 배웠습니다.
              </li>
              <li>
                <strong>데이터 기반 의사결정의 효과 확인:</strong> 리드 타임 분석 등 데이터 기반의 접근 방식이 기존의 주관적인 논쟁을 줄이고, 문제 해결 및 개선 방향 설정에 효과적임을 확인했습니다.
              </li>
              <li>
                <strong>사용자 중심 시스템 설계의 중요성:</strong> 다양한 사용자(관리자, 개발자, 제조 담당자)의 요구사항을 충족하고 실제 업무 효율을 높이기 위한 직관적인 인터페이스와 기능 설계의 중요성을 경험했습니다.
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
                <strong>BackEnd:</strong> Python 기반의 Django 프레임워크와 Django REST Framework(DRF)를 사용하여 안정적이고 확장 가능한 RESTful API 서버를 구축했습니다. 비동기 작업 처리를 위해 Celery를 활용하여 알림 발송 등을 구현했습니다.
              </li>
              <li>
                <strong>FrontEnd:</strong> Vue.js(TypeScript)와 Quasar 프레임워크를 사용하여 실시간 데이터 시각화 및 사용자 인터랙션을 위한 반응형 웹 대시보드를 개발했습니다. Chart 라이브러리 등을 활용하여 리드 타임 분석 결과를 시각화했습니다.
              </li>
              <li>
                <strong>Database:</strong> MariaDB를 사용하여 개발 샘플 정보, 공정 이력, 사용자 데이터 등을 관리했습니다. 효율적인 데이터 조회를 위해 적절한 인덱싱 및 쿼리 최적화를 수행했습니다.
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

// 슬라이더 이미지 경로 (실제 이미지 경로로 업데이트 필요)
const sliderImage = ref([
  "/SampleManager/fsm1.PNG",
  "/SampleManager/fsm2.PNG",
  "/SampleManager/fsm3.PNG",
])

const dialog = ref(false)

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