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
        <div class="container">
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
            Vue,TypeScript,Flutter
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
    <q-dialog
        v-model="dialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
    >
      <q-card class="bg-white">
        <div class="row items-center" style="background-color: black;color: white;padding: 8px">
          <div style="font-size: 1rem;font-weight: bold">
            READ ME
          </div>
          <q-space />
          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </div>
        <q-card-section style="max-width: 1320px;margin-left: auto;margin-right: auto;height: calc(100vh - (35px + 16px));overflow: auto">
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

          </div>
        </q-card-section>
      </q-card>

    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue"
import {ref} from "vue";

const sliderImage = ref(["../assets/tenniswing/tennisgooglePlay1.png",
  "../assets/tenniswing/tennisgooglePlay2.JPG",
  "../assets/tenniswing/tennisggoogleplay3.JPG",
  "../assets/tenniswing/tennisgoogleplay4.JPG",
  "../assets/tenniswing/tennisgooglePlay5.JPG",
  "../assets/tenniswing/tennisgooglePlay6.JPG",
  "../assets/tenniswing/tenninwatch.png"])

const dialog=ref(false);
const maximizedToggle = ref(true)

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
</style>
