<template>
  <div>
    <ProjectCard title="반도체 설비 Port 점유율 분석 프로그램" subtitle="2019 (1인 개발,secs/gem 데이터 활용)" :slider-image="sliderImage"
                 @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span style="font-weight: bold">반도체 설비 Port 점유율 분석 프로그램<br><br></span>
          <p>
            <strong>반도체 설비의 생산량을 극대화 하기 위해서 포트를 얼마나 Lot 들이 점유</strong> 했는지에 대한 분석이 필요합니다.
          </p>
          <p>
            분석이 필요함에 따라 점유율 계산과 시각화를 통해 설비 엔지니어 분들이 설비 생산성을 극대화 하는데 효과를 주었습니다.
          </p>
          <p>
            해당 데이터는 설비의 <strong> secs/gem 데이터 Event History </strong> 을 기반으로 구성 되었습니다.
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
            반도체 설비 Port 점유율 분석
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            Backend Stack
          </div>
          <div>
            Spring, Java, QueryDsl, SpringJPA
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
            설비 데이터
          </div>
          <div >
            secs/gem
          </div>
        </div>
      </template>

    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          반도체 설비 Port 점유율 분석 프로그램
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
                <strong>반도체 설비의 생산량을 극대화 하기 위해서 포트를 얼마나 Lot 들이 점유</strong> 했는지에 대한 분석이 필요합니다.
              </p>
              <p>
                분석이 필요함에 따라 점유율 계산과 시각화를 통해 설비 엔지니어 분들이 설비 생산성을 극대화 하는데 효과를 주었습니다.
              </p>

            </div>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔍 Meaning
            </div>
            <div style="margin-top: 16px">
              <p>
                설비의 포트 점유율을 분석 가능하 도록 하여<strong>생산량 증가를 최대하는데 의미</strong> 가 있었습니다.
              </p>

            </div>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              😀 GET
            </div>
            <ul>
              <li>
                설비의 생산량 극대화
              </li>
              <li>
                설비의 포트로 인한 생산량 증가 파악
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

const sliderImage = ref(["/portOccupation/portoccu.png"])

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

