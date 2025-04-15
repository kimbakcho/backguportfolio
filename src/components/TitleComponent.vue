<template>
  <div class="titleComponent">
    <div id="mainTitleText" class="fade-in">
      - 백호 -
      <br>개발자 포트폴리오
    </div>
    <div class="divide animate-width">

    </div>
    <div class="titleDescription">
      <p v-for="(text, index) in descriptions" :key="index" class="fade-in" :style="{ animationDelay: `${0.5 + index * 0.2}s` }">{{ text }}</p>
    </div>
    <q-btn id="moreAboutMe" class="pulse-btn fade-in" label="더 알아보기 ↓" rounded align="center" size="lg" @click="clickMoreAboutMe">
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const emit = defineEmits(["clickMoreAboutMe"]);
const descriptions = [
  "안녕하세요",
  "제조업 현장과 소통하며 개발을 진행하는 것을 중요시하는 개발자입니다.",
  "제조업 자동화와 AI 기술을 접목하여 혁신적인 솔루션을 만드는 것을 좋아합니다.",
  "데이터 분석을 통해 인사이트를 도출하고 가치를 창출하는 개발자입니다."
];

function clickMoreAboutMe(){
  emit("clickMoreAboutMe");
}

</script>

<style scoped>
.titleComponent{
  padding: calc(4.5rem + 3rem) 32px;
  background: url(@/assets/titleImage.jpg) 50% no-repeat;
  background-size: cover;
  height: 580px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  overflow: hidden;
}

/* 텍스트 가독성을 위한 오버레이 추가 */
.titleComponent::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* 어두운 오버레이 */
  z-index: 1;
}

/* 오버레이 위에 콘텐츠가 보이도록 z-index 조정 */
.titleComponent > * {
  position: relative;
  z-index: 2;
}

.divide{
  background: #f4623a;
  width: 0;
  margin-top: 32px;
  margin-bottom: 16px;
  min-height: 3px;
  transition: width 1.5s ease-in-out;
}

.animate-width {
  animation: expandWidth 1.5s ease-in-out forwards;
  animation-delay: 0.3s;
}

@keyframes expandWidth {
  0% { width: 0; }
  100% { width: 100px; }
}

.titleDescription{
  text-align: center;
  color: hsla(0,0%,100%,.85);
  font-weight: 400;
  font-family: "Noto Sans KR";
  font-size: 1.25rem;
  line-height: 1.5rem;
}

#mainTitleText{
  font-family: 'Black Han Sans';
  font-size: 4rem;
  color: white;
  text-align: center;
  line-height: 4.5rem;
}

#moreAboutMe {
  background: #f4623a;
  color: white;
  margin-top: 1.5rem;
  font-family: 'Noto Sans KR';
  padding: 0px 32px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

#moreAboutMe:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(244, 98, 58, 0.5);
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.pulse-btn {
  animation-delay: 1.5s;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@media screen and (max-width:1200px) {
  #mainTitleText{
    font-size: 3.1rem;
  }
  .titleDescription{
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
}

@media screen and (max-width:768px) {
  #mainTitleText{
    font-size: 2.8rem;
  }
  .titleDescription{
    font-size: 0.95rem;
    line-height: 1.2rem;
  }
  .titleDescription p {
    margin-bottom: 10px;
  }
}

@media screen and (max-width:480px) {
  #mainTitleText{
    font-size: 2.4rem;
  }
  .titleComponent {
    padding: calc(3.5rem + 2rem) 20px;
    height: auto;
    min-height: 580px;
  }
}
</style>
