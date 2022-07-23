<template>
  <div>
    <ProjectCard title="WeCanGo" subtitle="2021.11(1인 개발,디자인 외주,기획 협업)" :slider-image="sliderImage"
                 @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span style="font-weight: bold">코로나 여행시 복잡한 여행 정보를 알려 주기 위한 앱</span> 입니다.<br><br>
          <span> 스타트업 교류를 하면서 알게 된 분들이 아이디어를 제시하여 개발에 참여 하였습니다.
            <span style="font-weight: bold"> 목표 하고자 했던 바는 위드 코로나 시대에 여행 절차와 팁을을 공유하는 커뮤니티를 제작 하는것 입니다.</span>
          </span><br><br>
          <span>
            개발 중간에 출시하는 도중 구글의 개발 정책에 코로나 관련 App을 배포 하지 못하는 조항이 생겨 Flutter Wrap 한 App은 겨우 출시한 경험이 있습니다.
            <strong> 이 경험을 하면서 얻은 중요한 교훈 개발 외적인 요소 또한 기술 개발 외에 치명적인 요소가 될 수 있었다라는 것입니다.
            </strong>
          </span><br><br>
          <span>
            추후 서비스를 코로나가 아니라 여행에 초첨을 맞추어 코로나 관련 단어를 모두 제거 후에 플레이 스토어에 등록 완료 하였습니다.
            <span style="font-weight: bold">해당 어플리케이션은 개발 완료시에 전혀 모르던 분들과 열정으로 협업 하며 일을 완수 하여 성취감이 컸던 프로젝트 였습니다.</span>
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
            코로나 관련 여행 정보 커뮤니티 플랫폼
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
          <div class="link" @click="gotoWebPage('https://github.com/kimbakcho/wecangob')">
            https://github.com/kimbakcho/wecangob
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            Front Stack
          </div>
          <div>
            Vue,TypeScript,Flutter, TypeScript
          </div>
          <div>

          </div>
          <div class="link" @click="gotoWebPage('https://github.com/kimbakcho/wecangof')">
            https://github.com/kimbakcho/wecangof
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            배포
          </div>
          <div>
            Web,Android
          </div>
        </div>

      </template>


    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          Wecango
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
                정부가 위드 코로나를 발표 하면서 잠시 나마 하늘길이 열렸을때 무역을 전문으로 하시는 분의 의견으로 프로젝트를 시작 하였습니다.
                해결 하고자 하는 이슈는 <strong>코로나로 인해 국가별 조치가 상이하고 쉽게 이해할수 있는 정보</strong> 또한 얻기가 굉장히 어려운 상황에서
                최대한 가독성 좋고 <strong>여행 유저간 국가 별 코로나 상황에 대한 팁을 공유</strong> 하고자 하는게 목표 였습니다.
              </p>
            </div>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔍 Meaning
            </div>
            <div style="margin-top: 16px">
              <p>
                스타트 업에서 다양한 산업군의 사람들을 만나서 새로운 산업 분야의 개발을 해보았습니다. 해당 산업분야의 데이터는 상당히 <strong>비정형화 된 데이터</strong>
                가 많아 새로운 재미가 있었고 직관성을 좋게 하기 위해서 디자인 부분에 있어 다소 디테일한  CSS와 DOM 제어를 하여 <strong>디자인이 중요한 프로젝트</strong>
                에서 경험을 많이 쌓았습니다.
              </p>
            </div>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              ☔ RISK
            </div>
            <ul>
              <li>
                구글 플레이 스토어의 정책 변경 ☛ 코로나 App이 플레이 스토어 거절 당함
              </li>
              <li>
                외주 디자이너와의 협업 ☛ 진행시 디자인의 경우 사용자가 수시로 결정 사항이 변경 되어 턴키로 계약 체결시 유연하지 못함
              </li>
              <li>
                명확한 비지니스 모델의 부재
              </li>
            </ul>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              😀 GET
            </div>
            <div>
              <ul>
                <li>
                  전문 디자이너 산출을 프로젝트 적용
                </li>
                <li>
                  App의 WebView 에 Web Wrap 시 만날수 있는 다양한 문제 해결
                </li>
                <li>
                  스토어에 대한 정치적 요소 파악하기
                </li>
              </ul>
            </div>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔨 Technology Stack(s)
            </div>

            <div>
              <ul>
                <li>
                  Backend: SpringBoot, Spring JPA, QueryDSL, Spring Security
                </li>
                <li>
                  Front End: Vue, Flutter, Android, TypeScript
                </li>
                <li>
                  Mobile: Android,Web
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
import ProjectDetailDialog from "@/components/Project/ProjectDetailDialog.vue"
import {ref} from "vue";

const sliderImage = ref(["../assets/wecango/wecango1.png",
  "../assets/wecango/wecango2.png",
  "../assets/wecango/wecango3.png",
  "../assets/wecango/wecango4.png",
  "../assets/wecango/wecango5.png",
  "../assets/wecango/wecango6.png"])

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
