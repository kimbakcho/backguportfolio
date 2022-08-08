<template>
  <div>
    <ProjectCard title="공장 점검 시스템" subtitle="2019 (1인 개발)" :slider-image="sliderImage" @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span style="font-weight: bold">공장 점검 시스템<br><br></span>
          <p>
            <strong>FAB의 공장내에서 일정 주기 별로 설비에 점검</strong>을 해주고 이에 따른 조치가 필요하게 되어 개발된 시스템 입니다.
          </p>
          <p>
            공장내에서는 수많은 설비내 부품을 점검하고 소방 시설 및 부대 설비 들도 일정 주기 마다 점검을 잊어 버릴 경우 사고가 발생 합니다.
          </p>
          <p>
            그래서 잊어 버릴수 없도록 <strong>시스템 내에서 경고를 해주고 일정이 지나면 텔레그램등으로 문자를 보내어 점검</strong> 하도록 하게된 시스템 입니다.
          </p>
          <p>
            추가적으로 공정내 직원이 직접 점검을 하도록 QR Code를 필수로 점검 하는 항목등 유저의 요구사항을 적극 반응한 부분이 많습니다.
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
            공장내 설비 및 소방 부대 설비 점검 시스템
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
          공장 점검 시스템
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
                <strong>공장내에서는 수많은 설비내 부품을 점검하고 소방 시설 및 부대 설비 들도 일정 주기 마다 점검을 잊어 버릴 경우 사고</strong>가 발생 합니다.
              </p>
              <p>
                이에 따른 경제적 손실 및 책임 유무를 따지는 근로 환경 악화 등이 문제가 생기기도 합니다.
              </p>
              <p>
                이를 해소 하고자 개발 하게된 시스템 입니다.
              </p>
            </div>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔍 Meaning
            </div>
            <div style="margin-top: 16px">
              <p>
                직원 분들의 불안감 해소 및 근무 여건 개선 사고 방지등의 효과를 크게 본 시스템 입니다.
              </p>
              <p>
                해당 시스템 개발시에는 시간적 여유가 되었던 부분이 있어서 TDD를 적극 활용 해서 개발 했습니다.
              </p>
            </div>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              😀 GET
            </div>
            <ul>
              <li>
                직원 분들의 불안감 해소
              </li>
              <li>
                체계점 점검
              </li>
              <li>
                잊어버리고 빠트리는 부분이 없도록 텔레그램 전송으로 인한 신속한 대응
              </li>
              <li>
                근로 환경 개선
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

const sliderImage = ref(["/ObjectCheck/objectCheck1.png",
  "/ObjectCheck/objectCheck2.png",
  "/ObjectCheck/objectCheck3.png",
  "/ObjectCheck/objectCheck4.png",
  "/ObjectCheck/objectCheck5.png",
  "/ObjectCheck/objectCheck6.png",
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
