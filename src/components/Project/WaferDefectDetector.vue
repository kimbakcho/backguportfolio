<template>
  <div>
    <ProjectCard title="AI 기반 반도체 웨이퍼 불량 패턴 자동 분류 및 검출 시스템" :slider-image="sliderImage" subtitle="2025(1인 개발, 도메인 지식 협업)"
                 @detailShow="onDetailShow">

      <template v-slot:contentText>
        <div class="content">
          <span style="font-weight: bold">AI 기반 반도체 웨이퍼 불량 패턴 자동 분류 및 검출 시스템<br><br></span>
          <span>매일 생성되는 수만 장의 웨이퍼 맵 이미지에서 불량 패턴을 수작업으로 분류하고 검출하는 것은 사실상 불가능합니다. 
            <strong>이 문제를 딥러닝 기술로 효과적으로 해결한 프로젝트입니다.</strong>
          </span><br><br>
          <span>
            반도체 제조 공정에서 수율 향상은 핵심 과제이며, 불량 패턴을 신속하게 감지하는 것이 필수적입니다. 
            기존에는 불량 패턴 검출 시스템이 없어 수율 하락에 대한 신속한 대응이 어려웠습니다. 
            이 문제를 해결하기 위해 최신 딥러닝 기술을 활용한 자동화 시스템을 개발했습니다.
          </span><br><br>
        </div>
      </template>

      <template v-slot:summary>
        <div class="container" style="padding-top: 16px">
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            주요 기능
          </div>
          <div>
            • 일일 생성되는 웨이퍼 맵 이미지 자동 분석 및 불량 패턴 감지<br>
            • 비지도 학습 기반 패턴 분류로 알려지지 않은 불량 유형까지 검출<br>
            • 패턴 유형별 시각화 및 생산 이력 분석 도구 제공
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            기술 스택
          </div>
          <div>
            Python, PyTorch, OpenCV, Pandas, NumPy, Django REST API, Vue.js, TypeScript<br>
            딥러닝 모델: AutoEncoder, CNN, ResNet<br>
            클러스터링: DBScan, HDBScan
          </div>
        </div>
      </template>

    </ProjectCard>

    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          AI 기반 반도체 웨이퍼 불량 패턴 자동 분류 및 검출 시스템
        </div>
        <div>
          <div class="row items-center" style="margin-top: 16px">
            <img src="@/assets/summary.png" style="height: 30px"/>
            <div style="margin-left: 16px;font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              프로젝트 개요
            </div>
          </div>
          <div style="font-family: 'Noto Sans KR';font-size: 1.1rem">

            <div style="margin-top: 8px;">
              <p>
                반도체 제조 공정에서 발생하는 웨이퍼 맵 불량 패턴을 딥러닝 기술을 활용해 자동으로 분류하고 검출하여
                수율 향상에 기여한 프로젝트입니다.
              </p>
            </div>

            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔍 프로젝트 배경 및 목적
            </div>

            <div style="margin-top: 16px">
              <p>
                제품 라인 증가와 함께 <strong>수율 관리의 어려움</strong>이 커지는 상황에서, 웨이퍼 불량 패턴을
                효과적으로 감지하고 분류할 수 있는 시스템 개발이 필요했습니다.
              </p>
              <p>
                기존 수작업 분석으로는 일일 생성되는 수만 장의 웨이퍼 맵 이미지를 처리하는 것이 불가능했으며,
                이로 인해 불량 패턴 감지가 지연되어 수율 하락에 신속하게 대응하지 못하는 문제가 있었습니다.
              </p>
              <p>
                이 문제를 해결하기 위해 최신 딥러닝 기술을 활용한 자동화 시스템을 구축하여
                <strong>불량 패턴의 실시간 감지와 분류, 분석까지 가능한 종합 솔루션</strong>을 개발했습니다.
              </p>
            </div>

            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold; margin-top: 16px">
              💡 기술적 접근 방법
            </div>

            <div style="margin-top: 8px">
              <p>
                웨이퍼 맵 이미지의 특성과 불량 패턴의 다양성을 고려하여 다음과 같은 기술적 접근 방법을 채택했습니다:
              </p>
              <ol>
                <li>
                  <strong>딥러닝 기반 특징 추출:</strong> AutoEncoder를 통해 웨이퍼 맵 이미지의 차원을 축소하고 핵심 특징을 추출했습니다.
                </li>
                <li>
                  <strong>CNN과 ResNet 구조 활용:</strong> 이미지 특징 추출 성능을 향상시키기 위해 CNN 레이어와 ResNet의 Residual Block 개념을 적용하여 모델 정확도를 크게 개선했습니다.
                </li>
                <li>
                  <strong>고급 클러스터링 알고리즘:</strong> 초기에는 DBScan을 사용했으나, 하이퍼파라미터 민감성 문제를 해결하기 위해 HDBScan으로 전환하여 더 안정적인 클러스터링 결과를 얻었습니다.
                </li>
                <li>
                  <strong>웹 기반 시각화 시스템:</strong> Django REST API와 Vue.js를 활용하여 분석 결과를 직관적으로 확인할 수 있는 웹 인터페이스를 구현했습니다.
                </li>
              </ol>
            </div>

            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold; margin-top: 16px">
              ☔ 도전 과제 및 해결 방법
            </div>
            <ul>
              <li>
                <strong>라벨링된 데이터 부재:</strong> 웨이퍼 불량 패턴이 너무 다양하고 계속 새로운 유형이 발생하여 지도학습이 불가능했습니다.
                → 비지도 학습 방식의 딥러닝 모델을 설계하여 라벨 없이도 패턴을 학습할 수 있도록 했습니다.
              </li>
              <li>
                <strong>참고 자료 부족:</strong> 딥러닝을 통한 이미지 군집화에 대한 선행 연구가 부족했습니다.
                → 여러 접근 방식을 실험하고 검증하며 독자적인 알고리즘을 개발했습니다.
              </li>
              <li>
                <strong>분석 툴 개발:</strong> 분류된 패턴의 원인 분석을 위한 효과적인 도구가 필요했습니다.
                → MES DB 연동을 통한 생산 이력 시각화 및 패턴 오버레이 기능 등 다양한 분석 도구를 개발했습니다.
              </li>
            </ul>

            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold; margin-top: 16px">
              😀 주요 성과
            </div>
            <ul>
              <li>
                <strong>불량 패턴 감지율 향상:</strong> 기존 수작업 대비 불량 패턴을 성공적으로 감지하여 수율 관리에 크게 기여했습니다.
              </li>
              <li>
                <strong>신규 불량 패턴 발견:</strong> 기존에 인지하지 못했던 여러 불량 패턴을 발견하여 제조 공정 개선에 중요한 인사이트를 제공했습니다.
              </li>
              <li>
                <strong>분석 시간 단축:</strong> 수작업으로 수일이 소요되던 분석 작업을 수십 분 내로 자동 처리하여 불량 대응 시간을 대폭 단축했습니다.
              </li>
              <li>
                <strong>기술적 자산 확보:</strong> 웨이퍼 맵 이미지 분석을 위한 독자적인 딥러닝 파이프라인을 구축하여 향후 유사 프로젝트에 활용 가능한 기술 자산을 확보했습니다.
              </li>
            </ul>

            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold; margin-top: 16px">
              🔨 사용 기술 스택
            </div>
            <div>
              <ul>
                <li>
                  <strong>언어 및 프레임워크:</strong> Python, PyTorch, Django REST API, Vue.js, TypeScript
                </li>
                <li>
                  <strong>데이터 처리:</strong> OpenCV, Pandas, NumPy, Scikit-learn
                </li>
                <li>
                  <strong>딥러닝 모델:</strong> AutoEncoder, CNN, ResNet 아키텍처
                </li>
                <li>
                  <strong>클러스터링:</strong> DBScan, HDBScan 알고리즘
                </li>
              </ul>
            </div>
          </div>

        </div>

      </template>
    </ProjectDetailDialog>
  </div>
</template>

<script setup lang="ts">

import ProjectCard from "@/components/ProjectCard.vue";

import {ref} from "vue";
import ProjectDetailDialog from "@/components/Project/ProjectDetailDialog.vue";

const dialog = ref(false)

const sliderImage = ref(["/WaferDefectDetector/WaferDefectDetector1.png",
  "/WaferDefectDetector/WaferDefectDetector2.png",
  "/WaferDefectDetector/WaferDefectDetector3.png"])


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
}

.dTitle {
  font-family: "Noto Sans KR";
  font-size: 1.75rem;
  font-weight: bold;
  padding-bottom: 16px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 32px;
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
}
</style>
