<template>
  <div>
    <ProjectCard title="Ai를 이용한 반도체 칩 패턴 불량 찾기" subtitle="2021 (1인 개발,공정 엔제니어 라벨링)"
                 :slider-image="sliderImage" @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span style="font-weight: bold">Ai를 이용한 반도체 칩 패턴 불량 찾기<br><br></span>
          <p> Wafer에 Chip 패턴 이미지가 검수 할때 나오게 되는데 이때<strong> 수만장의 이미지를 사람이 보고선 불량을
            찾아 내는것은 불가능 가까운 업무</strong> 전수 검사를 하여 불량을 검출 하지 못하고 이었습니다.
          </p>
          <p>
            딥러닝을 이용하여 <strong>매일 수만장의 이미지를 검사하여 불량</strong>을 찾아 내는 프로젝트 입니다.
          </p>
          <p>
            yolov5 네트워크를 이용하여 상당히 mAp 0.5 이상 높은 수준의 검출력을 확인 하였습니다.
          </p>
          <p>
            <strong>성공적으로 불량을 찾아 냈으면 총 10개의 불량 패턴을 인지 하여 제품이 출하 되지 못하게 막을 수 있었습니다.</strong>
            이로 인해 큰 금전적 이익을 낼수 있었으면 구축 비용 또한 비싼 비전 AI 시스템을 자체적으로 개발 하여 융통성과 비용 모두 효과를 내었습니다.
          </p>
          <p>
            실제 제품 설계와 관련된 사진이라 포트폴리오에는 첨부하지 못했습니다.
          </p>
        </div>
      </template>
      <template v-slot:summary>
        <div class="container" style="padding-top: 16px">
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            주요 기능
          </div>
          <div>
            Ai를 이용한 반도체 칩 패턴 불량 찾기
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            AI, BigData Stack
          </div>
          <div>
            YoloV5, python, pandas, numpy, pytouch, cvat
          </div>
        </div>
      </template>
    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          Ai를 이용한 반도체 칩 패턴 불량 찾기
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
                사람이 제품의 패턴을 보면 불량을 인식 할수 있지만 수만장의 이미지를 사람이 검출 할수는 없어서 불량 제품이 출하되는 사고가 발생 하는게 문제 였습니다.
              </p>
              <p>
                딥러닝을 이용하여 <strong>매일 수만장의 이미지를 검사하여 불량</strong>을 찾아 내는 프로젝트를 진행 하였습니다.
              </p>
            </div>

            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔍 Meaning
            </div>
            <div style="margin-top: 16px">
              <p>
                해당 프로젝트로 진행 하면서 <strong> YoloV5 네트워크를 테스트 하였고 실제로 상당히 높은 수준의 불량 검출</strong>을 할수 있었습니다.
              </p>
              <p>
                회사에서는 당시 비트코인으로 인해 비싼 GPU를 2대가 구매를 해주어 원활히 분석과 어플리케이션 실 적용이 가능 했습니다.
              </p>
              <p>
                이에 본격적으로 대량의 데이터를 라벨링 하고 실제 사용할수 있는 어플리 케이션으로 제작 하여 큰 효과와 금전적 이득을 보았으며,
                삼성 협력사 우수상 아이템으로 선정되어 큰 성취감을 느꼇습니다.
              </p>
            </div>

            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              ☔ RISK
            </div>
            <ul>
              <li>
                방대한 라벨링 작업
              </li>
              <li>
                불량 이미지를 구하는게 수량이 많지 않어 어려움.
              </li>
              <li>
                일반 PC로는 YoloV5 네트워크를 실행하는데 시간이 많이 걸림
              </li>
            </ul>

            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              😀 GET
            </div>
            <ul>
              <li>
                딥러닝을 실제 산업에 적용 하여 큰 성과를 얻음.
              </li>
              <li>
                실제로 적용하여 상당량의 불량을 잡아내어 불량 유출의 방지의 큰 성과를 내었습니다.
              </li>
            </ul>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔨 Technology Stack(s)
            </div>
            <div>
              <ul>
                <li>
                  YoloV5, python, pandas, numpy, pytouch, cvat
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

const sliderImage = ref(["/PattenDefectAI/PattenDefectAI1.png",
  "/PattenDefectAI/PattenDefectAI2.png",
])

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
