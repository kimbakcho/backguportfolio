<template>
  <div class="root">
    <header>
      <div class="navRoot">
        <nav id="homeNav">
          백구 Portfolio
        </nav>
        <div>
          <nav id="SubNav">
            <div class="headerBtn">About Me</div>
            <div class="headerBtn">Skills</div>
            <div class="headerBtn">Archiving</div>
            <div class="headerBtn">Projects</div>
            <div class="headerBtn">Career</div>
          </nav>
        </div>

      </div>
    </header>
    <TitleComponent>

    </TitleComponent>
  </div>

</template>

<script setup lang="ts">
import TitleComponent from "@/components/TitleComponent.vue"

</script>

<style scoped>

header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
  font-weight: bold;
  font-family: 'Noto Sans KR';
  height: 4.5rem;
}
.navRoot{
  display: flex;
  justify-content: space-between;
  width: 70vw;
}
#homeNav {
  font-size: 1.5rem;
  color: hsla(0,0%,100%,.7);
}
#SubNav{
  display: flex;
  font-size: 1.2rem;
  color: hsla(0,0%,100%,.7);
}
.headerBtn {
  cursor: pointer;
  margin: 0px 32px;
}
.headerBtn:hover {
  color: white;
}
</style>
