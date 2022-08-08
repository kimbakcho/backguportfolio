<template>
  <div class="titleComponent">
    <div id="mainTitleText">
      - 백구 -
      <br>개발자 포트폴리오
    </div>
    <div class="divide">

    </div>
    <div class="titleDescription">
      <p>안녕하세요</p>
      <p>개발의 성취감을 좋아하는 개발자 입니다.</p>
      <p>매일 꾸준히 노력함의 중요성을 잘 아는 개발자 입니다.</p>
      <p>개발할때 몰입하여 분석하고 진취 하는것이 장점인 개발자 입니다.</p>
    </div>
    <q-btn id="moreAboutMe" style="" label="더 알아보기 ↓"  rounded align="center" size="lg" @click="clickMoreAboutMe">

    </q-btn>
  </div>
</template>

<script setup lang="ts">

const emit = defineEmits(["clickMoreAboutMe"])
function clickMoreAboutMe(){
  emit("clickMoreAboutMe")
}

</script>

<style scoped>
.titleComponent{
  padding: calc(4.5rem + 3rem) 32px;
  background: linear-gradient(180deg,rgba(112,93,80,.8) 0,rgba(112,93,80,.8) 90%),url(@/assets/titleImage.jpg) 50% no-repeat;
  background-size: inherit;
  height: 580px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
.divide{
  background: #f4623a;
  width: 100px;
  margin-top: 32px;
  margin-bottom: 16px;
  min-height: 3px;
}
.titleDescription{
  text-align: center;

  color: hsla(0,0%,100%,.75);
  font-weight: 400;
  font-family: "Noto Sans KR";
  font-size: 1.25rem;
  line-height: 1.5rem;
}
#mainTitleText{
  font-family: 'Black Han Sans';
  font-size: 4rem;color: white;
  text-align: center;
  line-height: 4.5rem;
}
#moreAboutMe {
  background: #f4623a;
  color: white;
  margin-top: 1.5rem;
  font-family: 'Noto Sans KR';
  padding: 0px 32px;
}

@media screen and (max-width:1200px) {
  #mainTitleText{
    font-size: 3.1rem;color: white;
  }
  .titleDescription{
    font-size: 1.2rem;
    line-height: 1rem;
  }
}
@media screen and (max-width:768px) {
  #mainTitleText{
    font-size: 2.8rem;color: white;
  }
  .titleDescription{
    font-size: 0.95rem;
    line-height: 1rem;
  }
}
@media screen and (max-width:480px) {
  #mainTitleText{
    font-size: 2.4rem;color: white;
  }
}

</style>
