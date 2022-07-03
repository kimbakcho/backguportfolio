<template>
  <div>
    <ProjectCard title="테니스 윙" subtitle="2022.03(1인 개인 프로젝트)">
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

    </ProjectCard>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue"
</script>

<style scoped>
.content{
  font-family: "Noto Sans KR";
}
</style>
