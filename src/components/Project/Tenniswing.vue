<template>
  <div>
    <ProjectCard title="테니스 윙" subtitle="2022.03(1인 개인 프로젝트)" :slider-image="sliderImage" @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span style="font-weight: bold">테니스를 즐기는데 여러가지 불편한 사항을 해결 하기 위해서 만들 플랫폼 앱</span> 입니다.<br><br>
          <span>테니스를 취미로 배우던 시절 테니스를 즐기는데 나와 비슷한 수준의 친구를 찾는데 어려움이 있어
            <span style="font-weight: bold"> 기본 컨셉은 위치 기반 테니스 경기 매칭 입니다.</span>
          </span><br><br>
          <span>
            개발 도중 이용자가 늘어나 소통을 하고 싶어 <span style="font-weight: bold">SNS 기능도 인스타 그램을 벤치 마킹</span> 하여 만들었습니다.
          </span><br><br>
          <span>
            실제 테니스 경기 중에서도 도움이 되는 기능을 넣고자 스마트 워치를 이용 한
            <span style="font-weight: bold">Waarable(appleWatch,갤럭시 워치) 가능 한 App을 개발 하여 점수를 손목 시계로 카운트</span>
            할수 있도록개발 하여 테니스 동호회 커뮤니티에서 좋은 반응을 받았습니다.
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
            테니스 플랫폼 App
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            Backend Stack
          </div>
          <div>
            Spring, Java, QueryDsl, SpringJPA, SpringSecurity, WebSocket
          </div>
          <div>

          </div>
          <div class="link" @click="gotoWebPage('https://github.com/kimbakcho/apitenniswing')">
            https://github.com/kimbakcho/apitenniswing
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            Front Stack
          </div>
          <div>
            Vue,TypeScript,Flutter,TypeScript
          </div>
          <div>

          </div>
          <div class="link" @click="gotoWebPage('https://github.com/kimbakcho/tenniswing')">
            https://github.com/kimbakcho/tenniswing
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            배포
          </div>
          <div>
            Web,Android,Iphone,Android Wear,Apple Watch
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            web
          </div>
          <div class="link" @click="gotoWebPage('https://tenniswing.com/')">
            https://tenniswing.com/
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            android
          </div>
          <div class="link" @click="gotoWebPage('https://play.google.com/store/apps/details?id=org.app.tenniswing&hl=ko')">
            https://play.google.com/store/apps/details?id=org.app.tenniswing&hl=ko
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            apple
          </div>
          <div class="link" @click="gotoWebPage('https://apps.apple.com/kr/app/id1597016642')">
            https://apps.apple.com/kr/app/id1597016642
          </div>
        </div>

      </template>

    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
          <div class="dTitle" >
            테니스 윙 (Tennis wing)
          </div>
          <div class="dSubTitle" >
            <q-icon name="fa-solid fa-dice-d20">

            </q-icon>
            <div style="margin-left: 8px">
              Deployment Url
            </div>

          </div>
          <div class="link" @click="gotoWebPage('https://tenniswing.com')" style="font-size: 1.2rem">
            https://tenniswing.com
          </div>
          <div>
            <div class="row items-center" style="margin-top: 16px">
              <img src="@/assets/summary.png" style="height: 30px" />
              <div style="margin-left: 16px;font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
                Summary
              </div>
            </div>
            <div style="font-family: 'Noto Sans KR';font-size: 1.1rem">
              <div style="margin-top: 8px;" >
                <p>
                  <strong>테니스 초보의 경우 수준이 맞는 사람이 사람을 찾기가 어렵고 개발 당시 해당 부분을 해소 할수 있는 고도화 된 플랫폼이 존재 하지 않았기 때문에 해당 앱을
                    개발</strong> 하게 되었습니다.
                </p>

                <p>
                  개발 초창기 단순 테니스 사람의 매칭 뿐 아니라 좋은 아이디어가 생각이 나서 아래와 같은 <strong>추가 기능</strong>들을 개발 하게 되었습니다.
                </p>
                <div style="font-weight: bold;font-size: 1.3rem">
                  *추가 기능
                </div>
                <ul>
                  <li>
                    인스타를 벤치 마킹한 SNS 기능
                  </li>
                  <li>
                    애플 워치,갤럭시 워치,PC 등등 원격으로 조정 가능한 점수판 기능
                  </li>
                  <li>
                    위치기반으로 벽치기 연습 장소 공유
                  </li>
                  <li>
                    상대방으로 부터 게임을 도전 받을수 있는 기능
                  </li>
                  <li>
                    마케팅 증진을 위한 테니스 용품 구매 가능한 포인트 상점
                  </li>
                  <li>
                    랜덤으로 적절한 상대를 추천 해주는 기능
                  </li>
                </ul>
              </div>

              <div class="row items-center" >
                <img src="@/assets/marketing.png" style="height: 35px"/>
                <div style="margin-left: 16px;font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
                  마케팅 방법
                </div>
              </div>
              <p style="margin-top: 16px">
                다양한 마케팅을 시도해 보았습니다. <strong>인스타,구글 애널리틱스,META(구 페이스북),Youtube, 네이버, Google 등의 창구에 캠페인</strong>을
                직접 등록하고 마케팅을 진행했습니다.
              </p>
              <div  style="font-weight: bold;font-size: 1.3rem" >
                *마케팅에서 느낀점
              </div>
              <ul>
                <li>
                  빅데이터를 공부 하였기 때문에 <strong>구글 애널리 틱스</strong>를 적극 활용해 보았지만 소규모에서는 빅데이터 기술의 효율 성이 크지 않았습니다.
                </li>
                <li>
                  <strong>인스타</strong>의 경우 직접 유저와 소통하기 때문에 비용대비 신규 유저의 반응과 가입하는 부분에 있어서 효과적이 었지만
                  꾸준히 컨텐츠를 생산하고 해당 컨텐츠를 광고 하는 자료를 만드는것은 많은 시간와 창의력을 필요로 했습니다.
                </li>
                <li>
                  <strong>Youtube,Meta</strong>의 경우 광고비에 지출을 하는 만큼 신규 유저가 들어 왔습니다. 신기한 경험은 소규모에서는 비용대비 신규 유저 가입률이
                  거의 정비례 했습니다.
                </li>

              </ul>
              <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
                🔍 Meaning
              </div>
              <div style="margin-top: 16px">
                <p>
                  프로젝트를 혼자서 진행 하면서 개발 이외의 부분<strong>디자인,마케팅,비지니스 모델</strong> 등을 많이 고민하면서 프로그램을
                  개발 하였습니다. 이러한 경험이 추후 다양한 전문직 사람들과 일하는데 <strong>공감대를 쌓고 소통</strong>하며 일하는데 도움을 줄 것이라고
                  믿고 있습니다.</p>
                <br>
                <p>
                  개발에 있어서 테크니컬 하고 분석 하고 파고 들고 하는 부분 또한 재미가 있지만
                  이번 개발을 통해 <strong>실제 유저와 만나 테니스 게임도 진행해 보고 다양한 유저들의 의견 및 소통등을 통해서 개발에 대한
                  크나큰 동기 부여</strong>를 받은것이 가장큰 의미가 있었습니다.
                </p>

              </div>
              <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
                ☔ RISK
              </div>
              <div>
                <ul>
                  <li>
                    마케팅에 사용할 금액
                  </li>
                  <li>
                    디자인의 객관적인 퀄리티
                  </li>
                </ul>
              </div>
              <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
                😀 GET
              </div>
              <div>
                <ul>
                  <li>
                    새로운 WebSocket,PWA(Push 메세지),IOS,Watch 의 개발 경험
                  </li>
                  <li>
                    유저들과 소통하며 개발 하기
                  </li>
                  <li>
                    버그로 인한 테스트의 중요성
                  </li>
                </ul>
              </div>

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
import ProjectDetailDialog from "@/components/Project/ProjectDetailDialog.vue"
import {ref} from "vue";

const sliderImage = ref(["/tenniswing/tennisgooglePlay1.png",
  "/tenniswing/tennisgooglePlay2.JPG",
  "/tenniswing/tennisggoogleplay3.JPG",
  "/tenniswing/tennisgoogleplay4.JPG",
  "/tenniswing/tennisgooglePlay5.JPG",
  "/tenniswing/tennisgooglePlay6.JPG",
  "/tenniswing/tenninwatch.png"])

const dialog=ref(false);


function gotoWebPage(url: string){
  window.open(url,"_blank")
}
function onDetailShow(){
  dialog.value = true;
}
</script>

<style scoped>
.content {
  font-family: "Noto Sans KR";
}
.container{
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-row-gap: 0.5rem;
}
.link {
  cursor: pointer;
  color: #258ddb;
}
.gTitle{
  font-weight: bold;
  font-size: 1rem;
}
.dTitle{
  font-family: "Noto Sans KR";
  font-size: 1.75rem;
  font-weight: bold;
  padding-bottom: 16px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 32px;
}
.dSubTitle{
  display: flex;
  align-items: baseline;
  height: 2rem;
  font-size: 1.75rem;
  font-weight: bold;
  font-family: 'Noto Sans KR';
  margin-bottom: 32px;
}
@media screen and (max-width:768px) {
  .container {
    grid-template-columns: 1fr;
    overflow-wrap: anywhere;
  }
}
</style>
