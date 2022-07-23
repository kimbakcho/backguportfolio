<template>
  <div>
    <ProjectCard title="AI를 이용한 반도체 설비 생산량 예측" subtitle="2021 (1인 개발,AI)" :slider-image="sliderImage"
                 @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span style="font-weight: bold">AI를 이용한 반도체 설비 생산량 예측<br><br></span>
          <p> 반도체 설비는 특성상 매번 <strong> 다양한 제품을 생산 하고 제품 마다 생산 시간이 다르고 조건도 다양하여
            설비의 생산량을 계산 하는데 많은 자원과 시간</strong>이 들어가는 문제가 있습니다.
          </p>
          <p>
            또한 제조업 특성상 얼마나 생산 가능 한 것 인가는 너무나 중요한 지표 입니다.
          </p>
          <p>
            그래서 보다 정확한 예측을 위해 <strong>MES 데이터, 설비 데이터 등을 이용하여 인공 지능을 적용 </strong> 시켯던 프로젝트 입니다.
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
            AI를 이용한 반도체 설비 생산량 예측
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            Backend Stack
          </div>
          <div>
            Spring, Java, QueryDsl, SpringJPA, SpringSecurity
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            Front Stack
          </div>
          <div>
            Vue, TypeScript
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            AI, BigData Stack
          </div>
          <div>
            Sklearn, pandas, numpy
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
          <div class="row items-center" style="margin-top: 16px">
            <img src="@/assets/summary.png" style="height: 30px"/>
            <div style="margin-left: 16px;font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              Summary
            </div>
          </div>
          <div style="font-family: 'Noto Sans KR';font-size: 1.1rem">
            <div style="margin-top: 8px;">
              <p>
                다양한 제품을 생산하는 <strong>반도체 설비들의 생산량을 AI</strong>로 보다 정확하게 예측하고 사람이 많은 공수와 시간이 들어가는 작업을 간소화 하기 위한
                프로젝트
              </p>
              <p>
                실제로 <strong>MES와 설비 데이터를 활용하여 회귀 분석</strong>을 하였으며 통계적으로 유의미 하다 판단 되어 이후 프로그램으로 개발 완료 하게 되었습니다.
              </p>
            </div>

          <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
            🔍 Meaning
          </div>
          <div style="margin-top: 16px">
            <p>
              AI 관련 프로젝트중 <strong>회귀 분석을 적용 하여 실제로 생산량 예측에 성공</strong> 하였습니다.
            </p>
            <p>
              또한 사람이 분석 한 생산량과 AI 분석한 생산량이 다른 경우가 간혹 있었는데 그런 경우 대부분 상세 분석을 해본 결과<strong> AI가 정확히 도출 했음을 확인하고
              이에 보람과 성취감</strong>을 많이 느낀 프로젝트 입니다.
            </p>
            <p>
              이후 고도화도 진행할 예정인 프로젝트 입니다. 개인적으로 <strong> AI의 실제 효과를 체감하게된 프로젝트</strong>로 기억에 많이 남습니다.
            </p>
          </div>
          <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
            ☔ RISK
          </div>
          <ul>
            <li>
              실제로 MES와 설비 데이터로 상관 관계가 높은 데이터를 추출 할수 있을까?
            </li>
            <li>
              다중 공산성 문제, 노이즈 데이터, 예측 모델이 얼마나 정확 할까?
            </li>
          </ul>
          <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
            😀 GET
          </div>
          <ul>
            <li>
              AI를 진행 하면서 <strong> 회귀 모델에 대한 체감</strong>을 하게 되었습니다.
            </li>
            <li>
              불안 요소 였던 <strong>상관 관계 높은 피처</strong>는 찾을 수 있었고 성취감을 느겼습니다.
            </li>
            <li>
              예측 모델의 경우 <strong>평균 r2score(설명 수치)가 평균 90% 이상</strong>의 점수를 얻었습니다.
            </li>
          </ul>
          <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
            🔨 Technology Stack(s)
          </div>

          <div>
            <ul>
              <li>
                Backend: SpringBoot, Spring JPA, QueryDSL, Spring Security
              </li>
              <li>
                Front End: Vue, TypeScript
              </li>
              <li>
                AI, BigData: Sklearn, pandas, numpy
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
import ProjectCard from "@/components/ProjectCard.vue"
import ProjectDetailDialog from "@/components/Project/ProjectDetailDialog.vue"
import {ref} from "vue";

const sliderImage = ref(["../assets/Capa/capa1.png",
  "../assets/Capa/capa2.png",
  "../assets/Capa/capa3.png",
  "../assets/Capa/capa4.png"])

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
