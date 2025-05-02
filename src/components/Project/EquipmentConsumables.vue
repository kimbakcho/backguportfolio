<template>
  <div>
    <ProjectCard title="설비 소모품 관리 시스템" subtitle="2025 (1인 개발, 설비 엔지니어 협업)"
                 :slider-image="sliderImage" @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span class="project-title">설비 소모품 관리 시스템<br><br></span>
          <p>
            기존 설비 소모품 관리는 **시간 기준**으로 이루어져, 생산량 변동 시 불필요한 교체로 인한 **비용 낭비** 문제가 있었습니다.
          </p>
          <p>
            생산량이 적을 때도 정해진 주기에 따라 소모품을 교체하는 것은 비효율적이었습니다.
          </p>
          <p>
            이 문제를 해결하기 위해, 설비와 통신하여 **실시간 사용량 데이터를 기반**으로 소모품 교체 주기를 최적화하는 시스템을 개발했습니다.
          </p>
          <p>
            이를 통해 **소모품 비용을 절감**하고, 설비 엔지니어의 **작업 효율성을 향상**시켰습니다.
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
              <li>실시간 설비 데이터 연동을 통한 소모품 사용량 기반 교체 주기 최적화</li>
              <li>다양한 설비 모델 연동을 지원하는 유연하고 확장 가능한 아키텍처</li>
              <li>소모품별 교체 이력 및 예정일 관리 대시보드</li>
            </ul>
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            기술 스택
          </div>
          <div>
            Backend: Django<br>
            Frontend: Vue, TypeScript, Quasar<br>
            설비 통신: SECS/GEM
          </div>
        </div>
      </template>
    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          설비 소모품 관리 시스템
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
              기존의 시간 기준 설비 소모품 교체 방식은 생산량 변동에 유연하게 대응하지 못하여 **원가 상승의 요인**이 되었습니다. 생산량이 감소해도 정해진 시간에 소모품을 교체해야 하는 비효율이 발생했습니다.
            </p>
            <p>
              이러한 문제를 해결하고자, 설비와의 실시간 통신(SECS/GEM 등)을 통해 **소모품의 실제 사용량을 측정**하고, 이를 기반으로 **최적의 교체 시점**을 결정하는 시스템을 개발했습니다.
            </p>
            <p>
              이 시스템은 데이터 기반의 의사결정을 통해 소모품 교체 주기를 최적화하여 **비용 절감**에 직접적으로 기여하며, 설비 엔지니어의 **예방 정비 업무 효율성**을 크게 향상시키는 것을 목표로 합니다.
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
              제조 현장의 생산량 변동성에 능동적으로 대응하여 **소모품 비용을 절감**하고, 엔지니어의 **수작업 및 판단 오류 가능성을 줄여** 운영 효율성을 증대시켰습니다. 데이터 기반의 정비 시스템 구축을 통해 **스마트 팩토리 구현**에 기여했습니다.
            </p>
          </div>

          <div class="row items-center section-header">
            <q-icon name="warning" size="30px" color="negative"></q-icon>
            <div class="section-title">
              직면한 문제점 및 해결 과정
            </div>
          </div>
          <div class="section-content">
            <ul class="detail-list">
              <li>
                <strong>다양한 설비 통신 및 데이터 통합:</strong> 각기 다른 설비의 통신 프로토콜(SECS/GEM) 및 데이터 구조를 표준화하고 통합하는 데 어려움이 있었습니다.
                <br>-> <strong>해결:</strong> 기존에 구축된 설비 데이터 통합 플랫폼을 활용하고, 설비별 데이터 어댑터를 개발하여 유연하게 연동했습니다.
              </li>
              <li>
                <strong>최적 교체 기준 부재:</strong> 시간 기준 관리 방식 하에서는 실제 사용량 기반의 적정 교체 기준(생산량, 사용 횟수 등) 데이터가 없었습니다.
                <br>-> <strong>해결:</strong> 초기 데이터 분석, 설비 엔지니어와의 긴밀한 협업, 그리고 파일럿 테스트를 통해 소모품별 최적 교체 기준을 설정하고, 지속적인 모니터링 및 개선 프로세스를 구축했습니다.
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
                비효율적인 시간 기준 교체 방식을 개선하여 **N%의 소모품 비용 절감** 효과를 달성했습니다. (구체적인 수치가 있다면 기입)
              </li>
              <li>
                데이터 기반의 정량적 접근이 실제 현장의 **원가 절감 및 운영 효율성 개선**에 미치는 영향을 직접 확인했습니다.
              </li>
              <li>
                현업(설비 엔지니어)과의 **지속적인 소통과 협업**이 프로젝트 성공의 핵심 요소임을 배웠습니다. 요구사항의 정확한 이해와 피드백 반영의 중요성을 깨달았습니다.
              </li>
              <li>
                비교적 간단한 아이디어와 개발 노력으로도 **측정 가능하고 의미 있는 개선 효과**를 창출할 수 있다는 점을 배웠습니다.
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
                <strong>Backend:</strong> Django (Python) - API 서버 구축, 데이터 처리 및 관리 로직 구현
              </li>
              <li>
                <strong>Frontend:</strong> Vue.js (TypeScript), Quasar Framework - 사용자 인터페이스 및 데이터 시각화
              </li>
              <li>
                <strong>설비 통신:</strong> SECS/GEM 프로토콜 활용 - 설비 데이터 실시간 수집 및 연동
              </li>
              <li>
                <strong>Database:</strong> MaraiDB - 소모품 정보, 사용량 데이터, 교체 이력 등 저장
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

const sliderImage = ref(["/EquipmentConsumables/EquipmentConsumables1.PNG",
  "/EquipmentConsumables/EquipmentConsumables2.PNG",
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
/* 스타일은 기존과 동일하게 유지 */
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