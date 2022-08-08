<template>
  <div>
    <ProjectCard title="제품 생산 시간 관리" subtitle="2021 (1인 개발,제조,공정팀 협업)" :slider-image="sliderImage" @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span style="font-weight: bold">제품 생산 시간 관리<br><br></span>
          <p>
            <strong>제품의 생상 스케줄링을 사람이 매번 감시하면서 관리</strong>하기가 어려움에 개발이 시작 되었습니다.
          </p>
          <p>
            MES 데이터와 연동 하며 간트 차트로 보여 줍니다. 해당 프로젝트의 경우 MES 데이터를 기반으로 하지만 원하는 데이터를 정제 하고 처리 하는데
            제조 공정의 복잡함이 있어서 많은 시간을 소요 했습니다.
          </p>
          <p>
            딱 들어 맞는 <strong>차트 라이브러리가 없어 오픈 소스를 수정하여 딱들어 맞는 차트를 만들어 내었고 라이브러리가 vue2 당시에 개발되었던 것으로 vue3에 적용 불가 하여
            오픈 소스를 vue3로 마이그레이션 </strong>하였습니다.
          </p>
          <p>
            <strong>gantt-elastic -> gantt-elastic-wrapvue3</strong>마이 그레이션후 npm 에 업데이트 하였습니다.오픈 소스에 기여한것 같아 기분이 좋았습니다.
          </p>
          <p>
            결과적으로 분석적으로 제품 생산 스케줄링을 하여 생산 시간 관리의 효율 및 시간을 향상 시켰습니다.
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
            제품 생산 시간 관리
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
            마이그레이션 OpenSource
          </div>
          <div class="link" @click="gotoWebPage('https://www.npmjs.com/package/gantt-elastic-wrapvue3')">
            https://www.npmjs.com/package/gantt-elastic-wrapvue3
          </div>
          <div>

          </div>
          <div class="link" @click="gotoWebPage('https://github.com/kimbakcho/gantt-elastic-wrapvue3')">
            https://github.com/kimbakcho/gantt-elastic-wrapvue3
          </div>
        </div>
      </template>
    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          제품 생산 시간 관리
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
                제조 팀에서 제품의 생산 시간을 복잡한 공정을 실시간으로 파악 하면 분석적으로 다가가기 어려워 관리가 어려워 시작 하게된 프로젝트 입니다.
              </p>
              <p>
                실제 유저가 정확히 원하는 Chart 라이브러리가 없었으며 이에 비슷한 Chart 의 오픈 소스를 수정 하여 대응 하였습니다.
              </p>
              <p>
                Chart 라이브러리가 <strong>Vue2 전용이 였기에 Vue3로 마이그레이션 한뒤 원하는 차트의 기능을 수정하여 사용하고 저도 OpenSource 을 올리고
                기여하여 프로젝트 본질보다 개발자로서 오픈소스</strong>에 기여 했다는 부분이 좋은 경험이 었습니다.
              </p>
            </div>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔍 Meaning
            </div>
            <div style="margin-top: 16px">
              <p>
                회사 내 다른 팀의 문제를 해결해 주었고 이로 인해 분석적 관리 능력이 많이 좋아 졌다고 감사함의 표시를 많아 받았습니다.
              </p>
              <p>
                FAB 공정의 복잡함으로 인해 이러한 상황을 실시간으로 직관적으로 알수 있는 프로그램이 많이 필요 하고 시너지 효과가 크다고 생각 했습니다.
              </p>
            </div>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              ☔ RISK
            </div>
            <ul>
              <li>
                복잡한 공정 MES 데이터
              </li>
              <li>
                정확히 맞춤형 Chart 라이브러리 부재
              </li>
            </ul>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              😀 GET
            </div>
            <ul>
              <li>
                OpenSource 수정으로 인한 OpenSource 의 수정에 대한 자신감
              </li>
              <li>
                복잡한 데이터를 단계별로 최대한 단계별 단순화 하여 처리 -> 높은 추상화
              </li>
              <li>
                FAB 공정에 제품 관리 부분에 대한 새로운 비지니스 학습
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

const sliderImage = ref(["/LeadTimeManager/leadtimeManager1.png",
  "/LeadTimeManager/leadtimeManager2.png"])

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
