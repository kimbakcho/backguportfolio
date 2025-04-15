<template>
  <div>
    <ProjectCard title="통합 설비 모니터링 플랫폼" subtitle="2023 (1인 개발)"
                 :slider-image="sliderImage" @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span class="project-title">통합 설비 모니터링 플랫폼<br><br></span>
          <p>
            제조 환경의 다양한 설비(약 200대, 120여 가지 타입)로부터 발생하는 데이터를 수집하고 통합 관리 플랫폼을 통해 전처리된 데이터를 활용하여 모든 설비의 상태를 실시간으로 모니터링하는 시스템입니다.
          </p>
          <p>
            작업자들이 설비 종료 시점을 정확히 파악하지 못해 발생하는 불필요한 대기 시간을 줄이고, 설비 상태 확인을 위한 동선을 최소화함으로써 제조 현장의 작업 효율성을 크게 향상시켰습니다. 이를 통해 생산성 향상 및 작업 대기 시간을 대폭 감소시키는 성과를 달성했습니다.
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
              <li>공장내 모든 설비를 한눈에 실시간으로 모니터링</li>
              <li>작업 시작이후 경과 시간 표기</li>
              <li>설비 생산량 표기</li>
              <li>MES에 설비 상태 변경으로 인터락 기능</li>
              <li>설비의 시간 가동률 성능 가동률 표현</li>
            </ul>
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            기술 스택
          </div>
          <div>
            <ul class="stack-list">
              <li><strong>백엔드:</strong> Django, Python, ActiveMQ</li>
              <li><strong>프론트엔드:</strong> Vue.js, Quasar Framework, TypeScript</li>
              <li><strong>데이터베이스:</strong> MiriaDB </li>
            </ul>
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            성과
          </div>
          <div>
            <ul class="achievement-list">
              <li>작업 대기 시간 약 35% 감소</li>
              <li>설비 상태 확인을 위한 작업자 동선 60% 단축</li>
              <li>설비 가동률 및 성능 모니터링을 통해 전체 생산성 20% 향상</li>
            </ul>
          </div>
        </div>
      </template>
    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          통합 설비 모니터링 플랫폼
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
              제조 환경의 다양한 설비(약 200대, 120여 가지 타입)로부터 발생하는 데이터를 수집하고 통합 관리 플랫폼을 통해 전처리된 데이터를 활용하여 모든 설비의 상태를 실시간으로 모니터링하는 시스템입니다.
            </p>
            <p>
              작업자들이 설비 종료 시점을 정확히 파악하지 못해 발생하는 불필요한 대기 시간을 줄이고, 설비 상태 확인을 위한 동선을 최소화함으로써 제조 현장의 작업 효율성을 크게 향상시켰습니다. 이를 통해 생산성 향상 및 작업 대기 시간을 대폭 감소시키는 성과를 달성했습니다.
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
              이 프로젝트는 제조 산업에서 디지털 트랜스포메이션의 핵심 사례로, 데이터 기반 의사결정의 중요성을 보여줍니다. 기존 제조 환경에서는 설비 상태 파악이 수동적이고 비효율적으로 이루어졌으나, 이 시스템을 통해 다음과 같은 의의를 가집니다:
            </p>
            <ul class="detail-list">
              <li>
                <strong>스마트 팩토리 구현:</strong> 다양한 종류의 설비를 하나의 통합 플랫폼으로 연결하여 설비 데이터의 실시간 가시화를 실현했습니다.
              </li>
              <li>
                <strong>작업 효율성 혁신:</strong> 작업자가 설비 상태를 확인하기 위해 이동하는 시간을 줄이고, 다음 공정을 위한 준비 시간을 최적화했습니다.
              </li>
              <li>
                <strong>레거시 시스템 현대화:</strong> 기존 설비에 최소한의 하드웨어 추가로 스마트 팩토리 구현이 가능함을 증명하여 비용 효율적인 디지털화 방안을 제시했습니다.
              </li>
              <li>
                <strong>데이터 기반 운영:</strong> 설비 데이터를 활용한 가동률, 성능 분석을 통해 생산성 향상 및 설비 운영 최적화의 기반을 마련했습니다.
              </li>
            </ul>
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
                <strong>다양한 설비 메시지 형식</strong> 기존에 개발한 설비 데이터 통합 관리 플랫폼을 통해 총 100가지가 넘는 설비들에 대해서 각기 다른 메세지 처리 로직을 작성 해야 됬습니다.
              </li>
              <li>
                <strong>웹에서 실시간 처리 방식</strong> 기존 REST ful API 방식으로는 실시간으로 데이터를 처리하기 어려운 문제로 <strong>ActiveMQ</strong>를 활용하여 실시간으로 데이터를 처리하는 시스템을 구축했습니다.
              </li>
              <li>
                <strong>설비별 다양한 모니터링 형태</strong> 단순히 설비의 가동 상태를 표현 하는게 아닌 설비내의 포트를 모니터링 하거나 챔버를 모니터링 해야 하는경우가 있습니다. 설비는 1대 인대 작업이 여러개 동시 진행 되는 경우에 이런 상황을 표현 해야 됩니다.
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
                <strong>대용량 실시간 처리</strong> 설비 데이터 통합 관리 플랫폼을 통해 전달 받은 데이터를 실시간으로 처리하여 약 200대의 설비에서 발생하는 데이터를 동시에 모니터링 할 수 있는 시스템을 구축했습니다.
              </li>
              <li>
                <strong>작업자 대기 시간 대폭 감소</strong> 작업자로 하여금 설비의 종료 시점을 실시간으로 확인할 수 있도록 하여 불필요한 대기 시간을 약 35% 감소시켰습니다.
              </li>
              <li>
                <strong>설비 대기 시간 대응</strong> 너무 장시간 대기 하는 설비에 대해서 제조 관리자가 확인 할 수 있도록 하여 설비의 대기 시간을 약 30% 감소 시켰습니다.
              </li>
              <li>
                <strong>작업자의 불필요한 동선 제거</strong>  설비의 상태를 실시간으로 확인할 수 있도록 하여 작업자가 설비 상태를 확인하기 위해 이동하는 시간을 약 60% 단축했습니다.
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
                <strong>백엔드 아키텍처:</strong> Django 기반 REST ful API 서버
              </li>
              <li>
                <strong>프론트엔드</strong> Vue.js와 Quasar Framework, stomp(webs socket)를 활용한 반응형 웹 애플리케이션
              </li>
              <li>
                <strong>메시징 시스템</strong> ActiveMQ를 활용한 이벤트 기반 설비 데이터 통신 구현, 비동기 메시지 처리 파이프라인 구축
              </li>
              <li>
                <strong>설비별 데이터 처리 로직</strong> 설비 데이터 통합 관리 플랫폼을 통해 각기 다른 로직 python 코드로 구현
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

const sliderImage = ref(["/EquipmentMonitor/EquipmentMonitor1.png",
  "/EquipmentMonitor/EquipmentMonitor2.png",
  "/EquipmentMonitor/EquipmentMonitor3.png",
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
