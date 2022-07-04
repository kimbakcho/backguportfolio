<template>
  <div>
    <ProjectCard title="테니스 윙" subtitle="2022.03(1인 개인 프로젝트)" :slider-image="sliderImage">
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
          <div>
            주요 기능
          </div>
          <div>
            테니스 플랫폼 App
          </div>
          <div>
            Backend Stack
          </div>
          <div>
            Spring, Java, QueryDsl, SpringJPA, SpringSecurity, WebSocket
          </div>
          <div>

          </div>
          <div class="link">
            https://github.com/kimbakcho/apitenniswing
          </div>
          <div>
            Front Stack
          </div>
          <div>
            Vue,TypeScript,Flutter
          </div>
          <div>

          </div>
          <div>
            https://github.com/kimbakcho/tenniswing
          </div>
          <div>
            배포
          </div>
          <div>
            Web,Android,Iphone,Android Wear,Apple Watch
          </div>
          <div>
            web
          </div>
          <div>
            https://tenniswing.com/
          </div>
          <div>
            android
          </div>
          <div>
            https://play.google.com/store/apps/details?id=org.app.tenniswing&hl=ko
          </div>
          <div>
            apple
          </div>
          <div>
            https://apps.apple.com/kr/app/id1597016642
          </div>
        </div>

      </template>

    </ProjectCard>
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
</style>
