<template>
  <div>
    <ProjectCard title="설비 데이터 통합 관리 플랫폼" subtitle="2023 (1인 개발)"
                 :slider-image="sliderImage" @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span class="project-title">설비 데이터 통합 관리 플랫폼<br><br></span>
          <p>
            제조 환경에서 다양한 설비들(약 200대, 120가지 타입)로부터 발생하는 복잡한 데이터를 효율적으로 수집, 처리, 활용할 수 있는 확장성 높은 데이터 통합 플랫폼을 설계 및 구현했습니다.
          </p>
          <p>
            각 설비 모듈별로 독립 프로세서를 할당하는 병렬 처리 아키텍처를 통해 시스템 확장성과 CPU 자원 활용을 극대화했으며, 마이크로서비스 아키텍처(MSA)를 도입해 시스템 유연성을 확보했습니다.
          </p>
          <p>
            웹 기반 Python 코드 에디터를 통해 설비별 데이터 처리 로직을 실시간으로 커스터마이징할 수 있어 응용 프로그램 개발 생산성을 크게 향상시켰습니다.
          </p>
          <p>
            현재 FAB 현장에서 2년간 안정적으로 운영 중으로, 분당 약 2만건의 데이터를 실시간으로 처리하고 있습니다.
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
              <li><strong>설비 데이터 통합 및 메시지 관리</strong>
                <ul>
                  <li>다양한 설비 데이터 수집: 약 200대, 120가지 타입의 설비에서 발생하는 SECS/GEM 메시지 통합 수집</li>
                  <li>메시지 브로커링: ActiveMQ를 활용한 중앙집중식 메시지 관리 및 라우팅</li>
                  <li>데이터 표준화: 다양한 형식의 설비 데이터를 일관된 형식으로 변환 및 정규화</li>
                </ul>
              </li>
              <li><strong>모듈별 병렬 처리 시스템</strong>
                <ul>
                  <li>자동 프로세서 할당: 설비 모듈별 독립 프로세서 자동 할당 (약 600개 프로세서)</li>
                  <li>동적 리소스 관리: 모듈 추가 시 자동으로 프로세서가 확장되는 동적 리소스 할당</li>
                  <li>병렬 처리 최적화: CPU 코어 활용을 극대화하는 병렬 처리 알고리즘</li>
                </ul>
              </li>
              <li><strong>커스텀 코드 실행 환경</strong>
                <ul>
                  <li>웹 기반 코드 에디터: 설비별 Python 코드를 웹에서 직접 수정 가능한 인터페이스</li>
                  <li>실시간 코드 적용: 코드 수정 후 시스템 재시작 없이 즉시 적용</li>
                  <li>코드 버전 관리: 변경 이력 추적 및 손쉬운 롤백 기능</li>
                  <li>샌드박스 실행 환경: 안전한 코드 실행을 위한 격리된 환경 제공</li>
                </ul>
              </li>
              <li><strong>마이크로서비스 아키텍처</strong>
                <ul>
                  <li>서비스 독립성: 설비 모듈별 독립적인 서비스 구조로 유연한 개발 및 배포</li>
                  <li>분산 처리: 여러 서버에 걸쳐 서비스 분산 실행 가능</li>
                  <li>장애 격리: 특정 모듈 장애가 전체 시스템에 영향을 미치지 않는 구조</li>
                  <li>이벤트 기반 통신: ActiveMQ를 통한 비동기 메시지 통신 구현</li>
                </ul>
              </li>
              <li><strong>통합 데이터 활용 지원</strong>
                <ul>
                  <li>데이터 전처리 자동화: 설비 데이터의 필터링, 변환, 정규화 자동 수행</li>
                  <li>타 시스템 연동: MES, 분석 시스템 등 외부 시스템과 원활한 데이터 연계</li>
                  <li>데이터 히스토리 관리: 설비 데이터의 이력 관리 및 추적성 확보</li>
                  <li>API 기반 데이터 접근: 다양한 응용 프로그램에서 설비 데이터에 접근할 수 있는 API 제공</li>
                </ul>
              </li>
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
              <li><strong>데이터베이스:</strong> MiriaDB, MongoDB</li>
            </ul>
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            성과
          </div>
          <div>
            <ul class="achievement-list">
              <li><strong>커스텀 데이터 처리 역량</strong>
                <ul>
                  <li>설비별 맞춤형 데이터 변환: 120가지 다양한 설비 타입의 이질적인 데이터를 응용 프로그램에 최적화된 형식으로 변환하여 개발자 생산성 300% 향상</li>
                  <li>유연한 데이터 가공: 웹 기반 Python 코드 에디터를 통해 설비별 데이터 처리 로직을 실시간으로 커스터마이징하여 응용 프로그램 요구사항에 즉각 대응</li>
                  <li>표준화된 데이터 출력: 다양한 형식의 원시 설비 데이터를 통일된 형식으로 변환하여 응용 프로그램 개발 복잡성 75% 감소</li>
                </ul>
              </li>
              <li><strong>응용 프로그램 개발 가속화</strong>
                <ul>
                  <li>개발 사이클 단축: 데이터 수집 및 전처리 로직 구현에 소요되는 시간을 95% 절감하여 애플리케이션 개발자가 핵심 비즈니스 로직에만 집중 가능</li>
                  <li>신속한 프로토타이핑: 데이터 형식 변경이 필요할 경우 웹 인터페이스에서 즉시 수정 및 적용 가능하여 응용 프로그램 프로토타이핑 시간 85% 단축</li>
                  <li>코드 재사용성: 공통 데이터 처리 패턴을 모듈화하여 여러 응용 프로그램 개발에 재활용함으로써 개발 효율성 200% 향상</li>
                </ul>
              </li>
              <li><strong>성능 및 확장성</strong>
                <ul>
                  <li>실시간 데이터 처리: 분당 약 2만건의 설비 데이터를 지연 없이 처리하는 고성능 시스템 구현</li>
                  <li>수평적 확장: 설비 증설 시 시스템 재설계 없이 모듈 추가만으로 즉시 대응 가능한 확장성 확보</li>
                  <li>시스템 안정성: 2년간 99.9% 이상의 가동률 유지, 계획된 점검 외 예상치 못한 시스템 다운타임 전무</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          설비 데이터 통합 관리 플랫폼
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
              제조 환경에서 다양한 설비들(약 200대, 120가지 타입)로부터 발생하는 복잡한 데이터를 효율적으로 수집, 처리, 활용할 수 있는 확장성 높은 데이터 통합 플랫폼을 설계 및 구현했습니다.
            </p>
            <p>
              본 프로젝트는 반도체 제조 FAB 환경에서 발생하는 대량의 설비 데이터를 표준화하고, 이를 다양한 응용 프로그램에서 활용할 수 있도록 하는 데이터 허브 역할을 합니다. 설비별로 독립적인 처리 모듈과 프로세서를 할당하는 병렬 아키텍처를 통해 분당 2만건 이상의 데이터를 실시간으로 처리하면서도, 웹 기반 인터페이스를 통해 쉽게 관리할 수 있는 시스템을 구현했습니다.
            </p>
            <p><strong>데이터 흐름</strong></p>
            <ul class="detail-list">
              <li>다양한 설비에서 SECS/GEM 메시지 발생</li>
              <li>EAP 응용 프로그램을 통해 메시지를 ActiveMQ로 전송</li>
              <li>각 설비 모듈이 ActiveMQ에서 관련 메시지를 구독</li>
              <li>모듈별로 할당된 독립 프로세서에서 Python 코드 실행</li>
              <li>처리 결과를 다른 서비스나 데이터 저장소로 전달</li>
            </ul>

            <p>
              현재 FAB 현장에서 2년간 안정적으로 운영 중으로, 여러 응용 프로그램 개발의 기반 인프라로 활용되고 있습니다.
            </p>
          </div>

          <div class="row items-center section-header">
            <q-icon name="insights" size="30px" color="primary"></q-icon>
            <div class="section-title">
              주요 기능 및 특징
            </div>
          </div>
          <div class="section-content">
            <ul class="detail-list">
              <li>
                <strong>설비 데이터 통합 및 메시지 관리:</strong> 다양한 형식의 설비 데이터를 표준화된 방식으로 수집하고 처리하는 통합 인프라 제공
              </li>
              <li>
                <strong>모듈별 병렬 처리 시스템:</strong> 설비 모듈별로 독립적인 프로세서를 할당하여 고성능, 고가용성 시스템 구현
              </li>
              <li>
                <strong>웹 기반 커스텀 코드 실행 환경:</strong> 웹 인터페이스에서 Python 코드를 직접 작성하고 실행할 수 있는 유연한 환경 제공
              </li>
              <li>
                <strong>마이크로서비스 아키텍처:</strong> 설비 모듈별 독립적인 서비스로 구성되어 확장성과 유지보수성 향상
              </li>
              <li>
                <strong>실시간 모니터링 및 로깅:</strong> 모든 데이터 흐름과 처리 상태를 실시간으로 모니터링하고 로깅하는 기능 제공
              </li>
            </ul>
          </div>

          <div class="row items-center section-header">
            <q-icon name="warning" size="30px" color="negative"></q-icon>
            <div class="section-title">
              직면한 과제
            </div>
          </div>
          <div class="section-content">
            <ul class="detail-list">
              <li>
                <strong>데이터 다양성 처리:</strong> 120가지가 넘는 설비 타입마다 다른 형식의 데이터를 효과적으로 처리하고 표준화해야 하는 과제가 있었습니다.
              </li>
              <li>
                <strong>실시간 처리 요구:</strong> 분당 2만개 이상의 메시지를 지연 없이 처리해야 했으며, 이를 위한 고성능 처리 파이프라인 구축이 필요했습니다.
              </li>
              <li>
                <strong>유연한 데이터 변환:</strong> 응용 프로그램 요구사항에 따라 설비 데이터 처리 로직을 자유롭게 조정할 수 있는 인터페이스가 필요했습니다.
              </li>
              <li>
                <strong>확장성 요구:</strong> 추가 설비 도입이나 신규 응용 프로그램 개발 시 시스템 재설계 없이 쉽게 확장할 수 있는 아키텍처가 요구되었습니다.
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
                <strong>고성능 실시간 처리 시스템 구현:</strong> 병렬 처리 아키텍처와 이벤트 기반 메시징 시스템을 통해 대용량 데이터를 실시간으로 처리하는 시스템을 성공적으로 구축했습니다.
              </li>
              <li>
                <strong>응용 프로그램 개발 생산성 향상:</strong> 데이터 수집 및 전처리 로직 구현 시간을 95% 절감하여 개발자들이 핵심 비즈니스 로직에 집중할 수 있게 했습니다.
              </li>
              <li>
                <strong>마이크로서비스 아키텍처 설계 경험:</strong> 대규모 시스템을 독립적인 마이크로서비스로 분리하여 유연성과 확장성을 확보하는 아키텍처 설계 경험을 쌓았습니다.
              </li>
              <li>
                <strong>데이터 중심 비즈니스 가치 창출:</strong> 수집된 설비 데이터를 분석하여 생산성 향상과 불량률 감소 등 비즈니스 가치 창출에 기여했습니다.
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
                <strong>백엔드 아키텍처:</strong> Django 기반 RESTful API 서버, Python 멀티프로세싱을 활용한 병렬 처리 엔진
              </li>
              <li>
                <strong>프론트엔드:</strong> Vue.js와 Quasar Framework를 활용한 반응형 대시보드 및 Python 코드 에디터 구현
              </li>
              <li>
                <strong>메시징 시스템:</strong> ActiveMQ를 활용한 이벤트 기반 설비 데이터 통신 구현, 비동기 메시지 처리 파이프라인 구축
              </li>
              <li>
                <strong>데이터 처리:</strong> 설비별 커스텀 Python 스크립트를 안전하게 실행하는 샌드박스 환경 및 버전 관리 시스템
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

const sliderImage = ref(["/EquipmentDataIntegrationPlatform/EquipmentDataIntegrationPlatform1.png",
  "/EquipmentDataIntegrationPlatform/EquipmentDataIntegrationPlatform2.png",
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

.feature-list li {
  margin-bottom: 16px;
}

.feature-list ul {
  margin-top: 8px;
  padding-left: 24px;
}

.feature-list ul li {
  margin-bottom: 4px;
  font-size: 0.95rem;
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

