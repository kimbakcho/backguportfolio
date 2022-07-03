<template>
  <div class="card">
    <div class="title">
      <div class="projectTitle">
        {{ title }}
      </div>
      <div class="projectSubTitle">
        {{ subtitle }}
      </div>
    </div>

    <div style="display: flex; justify-content: space-between">
      <div class="slider">
        슬라이드 자리
      </div>
      <div class="content">
        <div class="contentTextBox">
          <slot name="contentText" >

          </slot>
          <div class="detailBtn">
            자세히 보기 ▶ README
          </div>
        </div>

        <slot name="summary">

        </slot>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  subtitle: string

}>()
</script>

<style scoped>
.card{
  width: 100%;
  background: white;
  border-radius: 20px;
  padding: 32px;
}
.contentTextBox{
  border-bottom: 1px solid #cccccc;
  padding: 16px 0px;
}
.detailBtn{
  background: #222;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5rem 1rem;
  width: 12rem;
}
.detailBtn:hover{
  background: #444;
}
.title{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.projectTitle{
  font-family: 'Black Han Sans';
  font-size: 3rem;
}
.projectSubTitle{
  font-family: "Noto Sans KR";
  color: #6c757d;
  font-size: 1rem;
  font-weight: 400;
}
.slider{
  flex-grow: 1;
}
.content{
  flex-grow: 1;
  margin-left: 32px;
  max-width: 50%;
}
</style>
