<template>
  <div>
    <ProjectCard title="웨이퍼 뒷면 DeepLearning 불량 검출" :slider-image="sliderImage" subtitle="2020(1인 개발,협력 업체 의뢰)"
                 @detailShow="onDetailShow">

      <template v-slot:contentText>
        <div class="content">
          <span style="font-weight: bold">웨이퍼 뒷면 DeepLearning 불량 검출<br><br></span>
          <span> 웨이퍼 뒷면에 불량을 찾는데 있어서 기존에 전통적인 방법으로는 다양한 불량을 찾아야내어 인식하는데 어려움이 있어
            <strong> Retina Net 이라는 CNN DeepLearning NetWork </strong> 을 이용하여 불량을 찾아 내는데 성공한 프로젝트
          </span><br><br>
          <span>
            회사에 설비 모니터링을 진행하는 협력 업체와 일상 이야기를 하다가 협력 업체와 다양한 이야기를 하던중 이미지 인식 문제를 겪고 있어서
            딥러닝을 이용하여 테스트 해보면 될것 같아 이미지를 전달 받고 실제 테스트 하여 프로젝트로 진행 했던 건 입니다.
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
            웨이퍼 뒷면 DeepLearning 불량 검출
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            Stack
          </div>
          <div>
            Python, tensorFlow, Keras, pandas, numpy, RetinaNet
          </div>
          <div>

          </div>
          <div class="link" @click="gotoWebPage('https://github.com/kimbakcho/cImageErrorFind')">
            https://github.com/kimbakcho/cImageErrorFind
          </div>
        </div>
      </template>
    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          웨이퍼 뒷면 DeepLearning 불량 검출
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
                웨이퍼 뒷면의 불량을 찾는데 기존에 전통적인 방식이 아닌 딥러닝을 이용하여 불량을 찾아 실제 웨이퍼 맵 불량 찾아 분류 한 프로젝트
              </p>
            </div>

            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔍 Meaning
            </div>

            <div style="margin-top: 16px">
              <p>
                회사에 설비 모니터링 관련 프로젝트를 같이 진행 하는 협력 업체와 이야기 도중 협력 업체의 다른 프로젝트중
                <strong> 웨이퍼 뒷면에 불량</strong>을 찾는데 많은 어려움을 호소 하고 이었습니다.
              </p>
              <p>
                저는 딥러닝 을 공부 한뒤 적용할 곳을 찾다가
                해당 프로젝트에 도움이 될수 있을 것 같아 이미지를 넘겨 받고 실제 검출에 성공 하여 협력 업체의 문제를 해결하였고
                <strong>AI</strong>로 크게 효과를 본 프로젝트로 기존 프로그램 개발과는 다른 큰 성취값을 얻었습니다.
              </p>
            </div>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              ☔ RISK
            </div>
            <ul>
              <li>
                AI 초기 단계 프로젝트로 판별의 불확실한 부분이 존재함
              </li>
              <li>
                불량 이미지를 구하는게 수량이 많지 않어 어려움.
              </li>
            </ul>

            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              😀 GET
            </div>
            <ul>
              <li>
                초기 AI 딥러닝으로 큰 성과를 보임.
              </li>
              <li>
                이후 다양한 웨이퍼 뒷면 불량을 잡는 응용 프로그램과 결함 되어 실제 타 FAB 라인 에서 사용됨.
              </li>
            </ul>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔨 Technology Stack(s)
            </div>
            <div>
              <ul>
                <li>
                  Python, tensorFlow, Keras, pandas, numpy, RetinaNet
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

const sliderImage = ref(["../assets/BackWaferMapDefectProject/defectImage1.png",
  "../assets/BackWaferMapDefectProject/defectImage2.png",
  "../assets/BackWaferMapDefectProject/defectImage3.png",
  "../assets/BackWaferMapDefectProject/defectImage4.png",
  "../assets/BackWaferMapDefectProject/defectImage5.png"])

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
