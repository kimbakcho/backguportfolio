<template>
  <div>
    <ProjectCard title="수율 분석 대쉬 보드" subtitle="2022 (1인 개발)" :slider-image="sliderImage" @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span style="font-weight: bold">수율 분석 대쉬 보드<br><br></span>
          <p>
            제조업에 매일 측정 되는 <strong>수율의 내용을 최대한 직관 적인 인터페이스로 개발하여 분석 시간을 최소화</strong> 시킨 프로젝트 입니다.
          </p>
          <p>
            해당 지표의 취합 및 필요한 분석에 필요한 데이터가 서로 다른 DB와 많은 전처리가 필요한 프로젝트 였습니다.
          </p>
          <p>
            개발이 완료된 뒤에는 많은 사람들과 경영 지표 회의에서 신속하게 분석 대응 할수 있는 곳에서 많이 사용 되었습니다.
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
            수율 분석 대쉬 보드
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            Backend Stack
          </div>
          <div>
            Spring, Java, QueryDsl, SpringJPA, Spring Security
          </div>

          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            Front Stack
          </div>
          <div>
            Vue, TypeScript
          </div>
        </div>
      </template>

    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          수율 분석 대쉬 보드
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
                제조업에서 수율은 매우 중요한 지표중 1개로써 많은 사람들이 해당 지표에 대한 내용을 분석합니다.
              </p>
              <p>
                하지만 수많은 데이터들의 다른 DB와 전처리 과정을 직접 수작업으로 하고 있어 분석에 많은 시간이 소모되어 문제가 많았습니다.
              </p>
              <p>
                이를 실무자들의 내용을 모두 취합하여 최대한 쉽고 빠르게 분석할수 있는 인터페이스를 도출 하였고 이를 통해 다양하게 분리 되어 있는 데이터를 통합하였습니다.
              </p>
              <p>
                이로 인해 경영 지표 및 제조 불량 분석에 많은 이점을 준 프로젝트 입니다.
              </p>
            </div>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔍 Meaning
            </div>
            <div style="margin-top: 16px">
              <p>
                제조업에서 사용되는 수많은 데이터를 직접 한데 모으고 이를 직관적으로 보여주고 빠르게 보여 주기 위해 캐시 처리를 하는등 많은 전처리를 성공적으로 마친 프로젝트 입니다.
              </p>
              <p>
                여기에서 사용된 다양한 DB들이 있었지만 ORM 기술은 JPA,Query DSL 등을 통해 개발 시간을 많이 단축 할수 있었습니다.
              </p>
            </div>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              😀 GET
            </div>
            <ul>
              <li>
                신속한 수율 분석
              </li>
              <li>
                불량에 대한 원인 분석
              </li>
              <li>
                경영 지표로써의 활용
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

const sliderImage = ref(["/YieldDash/yield1.png",
  "/YieldDash/yield2.png",
  "/YieldDash/yield3.png"
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
