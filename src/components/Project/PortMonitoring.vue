<template>
  <div>
    <ProjectCard title="반도체 설비 Port 실시간 모니터링" subtitle="2019 (1인 개발,secs/gem 데이터 활용)" :slider-image="sliderImage"
                 @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span style="font-weight: bold">반도체 설비 Port 실시간 모니터링<br><br></span>
          <p> 반도체 제조 현장에서 작업 종료시 사람에게 알려 후속 공정 이동이나 작업이 필요 할때.
            <strong>공장내 어디서나 작업 종료및 상황을 실시간 </strong>으로 알수 있게 되어 작업 대기 시간을 최소화 및 효율성을 향상 시킨 프로그램 입니다.
          </p>
          <p>
            <strong>설비 포트 상황 데이터는 secs/gem 데이터</strong>를 기반으로 가져와서 활용 하였습니다.
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
            반도체 설비 Port 실시간 모니터링
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
          반도체 설비 Port 실시간 모니터링
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
                반도체 제조시 설비의 종료 시점을 실시간으로 확인을 할수 없어 사람이 수시로 확인 하는 과정과 예측 시간을 일일이 신경 써야 되는 문제가 있었습니다.
              </p>
              <p>
                해당 종료 시점을 넘어가 챙기지 못하면 가동률에 즉각 영향에 미치는 문제로 이를 해결하고자 시작된 프로젝트 입니다.
              </p>
              <p>
                설비의 secs/gem 데이터를 전달 받아 프로그램을 제작 하여 실시간으로 종료 상황을 알수 있게 개발 되었습니다.
              </p>
            </div>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔍 Meaning
            </div>
            <div style="margin-top: 16px">
              <p>
                설비의 실시간 상황을 모두가 모니터링 가능하게 되어 대기 시간을 최소화 하여 공정 진행이 가능 하도록 개선이 되었습니다.
              </p>
              <p>
                이에 따른 효과로 대기 시간 최소화등을 통한 효율화를 이끌어 내어 <strong>사람의 동선 최소화 (확인 하러가는 동선)을 줄여서 편리함을
                제공한 부분</strong>에 의미가 크다고 생각합니다.
              </p>
            </div>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              😀 GET
            </div>
            <ul>
              <li>
                공장내 작업의 효율성 증가
              </li>
              <li>
                설비 상황을 인지 하기 위한 동선 제거
              </li>
              <li>
                대기 시간 최소화
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

const sliderImage = ref(["/PortMonitoring/port1.png",
  "/PortMonitoring/port2.png",
  "/PortMonitoring/port3.png",
  "/PortMonitoring/port4.png"])

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
