<template>
  <div>
    <ProjectCard title="Forutona" :slider-image="sliderImage" subtitle="2020~2021(1인 개발,디자인 협업,기획 협업)"
                 @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span style="font-weight: bold">위치 기반 SNS 플랫폼<br><br></span>
          <span> 위치 기반으로 주변에 근접한 <strong> Hot 한 소식, 네트워크를 통해 퀘스트 등 통해 일상 문제 해결을 하고 다양한 컨텐츠를 생성할수 있는 위치기반
          플랫폼</strong>을 목적으로 1년 정도 개발을 하였습니다.<br><br>
          </span>
          <span>
          개발 하는 동안 <strong>총 3번의 큰 리뉴얼을 하였고 리뉴얼</strong>을 하면서 어려움도 많고 <strong> Flutter 초장기에 도전적인 프레임 워크</strong>
          를 선택 하고 다양한 시도로 인해 많은 도전과 함께 팀원들과 열정을 쏟았던 프로젝트 입니다.
        </span><br><br>
          <span>
            해당 프로젝트를 진행 하면서 <strong>스타트업의 수많은 현실적인 어려움, 동기 부여, 협업등등 어려움을 몸소 체험</strong> 할수 있었던 프로젝트로
            1년간 개발후 배포후 사용화 까지는 실패 하였지만. 직접 격지 않고서는 느낄수 없는 감정 들과 성취감 좌절 등 여러가지 좋은 경험을 많이 하였습니다.
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
            위치 기반 SNS 플랫폼
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            Backend Stack
          </div>
          <div>
            Spring, Java, QueryDsl, SpringJPA, SpringSecurity
          </div>
          <div>

          </div>
          <div class="link" @click="gotoWebPage('https://github.com/kimbakcho/forutonabackend')">
            https://github.com/kimbakcho/forutonabackend
          </div>
          <div>

          </div>
          <div class="link" @click="gotoWebPage('https://github.com/kimbakcho/forutonamanagerbackend')">
            https://github.com/kimbakcho/forutonamanagerbackend
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            Front Stack
          </div>
          <div>
            Dart, Flutter, Vue, TypeScript
          </div>
          <div>

          </div>
          <div class="link" @click="gotoWebPage('https://github.com/kimbakcho/forutonafront')">
            https://github.com/kimbakcho/forutonafront
          </div>
          <div>

          </div>
          <div class="link" @click="gotoWebPage('https://github.com/kimbakcho/forutonamanagerfront')">
            https://github.com/kimbakcho/forutonamanagerfront
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            배포
          </div>
          <div>
            Android
          </div>
        </div>

      </template>

    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          위치 기반 SNS 플랫폼
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
                위치 기반으로 주변에 근접한 <strong> Hot 한 소식, 네트워크를 통해 퀘스트 등 통해 일상 문제 해결을 하고 다양한 컨텐츠를 생성할수 있는 위치기반
                플랫폼</strong>
              </p>
            </div>

            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔍 Meaning
            </div>
            <div style="margin-top: 16px">
              <p>
                1년간 프로젝트를 진행 하면서 스타트업 에서의 어려움을 많이 겪고 이를 해결해 나가고. 그 과정에서 배우고 깨달은 바가 많은
                프로젝트 였습니다.<strong> 개발 또한 열정적으로 많은 것들 시도하고 실패도 하고 성공도 하고 의미가 컷던 프로젝트 입니다. </strong>
              </p>
              <p>
                다양한 개발적인 요소를 시도 했었습니다.<strong> TDD, Clean Architecture, 리펙토링 등을 리뉴얼 과정과 함께 시도 하였고,
                몸소 해당 기술을 적용하면서 현실 적인 부분과 이상적인 부분의 합의점도 조율해 가는 경험 또한 개발에 중요한 개발 경험</strong> 이었습니다.
              </p>

            </div>

            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              ☔ RISK
            </div>
            <ul>
              <li>
                너무 큰 목표로 인한 3번의 리뉴얼 ☛ 처음 부터 너무 많은 것을 담고자 함
              </li>
              <li>
                장기간 프로젝트로 인한 동기 부여 지속 어려움
              </li>
              <li>
                경게적 비지니스 모델의 애매모함으로 인한 투자의 어려움
              </li>
              <li>
                처음에 프로젝트 규모가 큰 장기간 프로젝트인 만큼 금전적 투자 없이 팀을 유지하기 어려움
              </li>
            </ul>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              😀 GET
            </div>
            <ul>
              <li>
                다양한 개발 요소 도전
              </li>
              <li>
                스타트 업의 현실적인 경험
              </li>
              <li>
                다른 직군의 팀원들과 활발한 협업
              </li>
              <li>
                개발 아이템에 대한 다양한 아이디어 고민
              </li>
            </ul>

            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔨 Technology Stack(s)
            </div>
            <div>
              <ul>
                <li>
                  Backend: SpringBoot, Spring JPA, QueryDSL, Spring Security, WebSocket
                </li>
                <li>
                  Front End: Vue, Flutter, Android(java), Ios(swift), WebSocket, TypeScript
                </li>
                <li>
                  Mobile: Android,Ios,Web
                </li>
                <li>
                  DB: mariaDB
                </li>
                <li>
                  Design: AdobeXD
                </li>
                <li>
                  IDE: IntelliJ
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
import {ref} from "vue";
import ProjectDetailDialog from "@/components/Project/ProjectDetailDialog.vue"

const sliderImage = ref(["../assets/Forutona/forutona1.png",
  "../assets/Forutona/forutona2.png",
  "../assets/Forutona/forutona3.png",
  "../assets/Forutona/forutona4.png",
  "../assets/Forutona/forutona5.png",
  "../assets/Forutona/forutona6.png"])

function gotoWebPage(url: string) {
  window.open(url, "_blank")
}

const dialog = ref(false)

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
