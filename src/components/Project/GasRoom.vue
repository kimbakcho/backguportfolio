<template>
  <div>
    <ProjectCard title="Gas Room 모니터링" subtitle="2020 (1인 개발,H/W 개발)" :slider-image="sliderImage"
                 @detailShow="onDetailShow">
      <template v-slot:contentText>
        <div class="content">
          <span style="font-weight: bold">Gas Room 모니터링<br><br></span>
          <p>
            설비를 운행하기 위한 유틸리티 중 Gas량 을 매일 확인 해야 하는데 너무 멀리 떨어져 있어서 가는데 시간이 오래 걸리는 작업이 존재 하였습니다.
          </p>
          <p>
            이에 많은 시간이 들어 가서 <strong>어디에서나 Gas 량을 확인 할 수 있도록 개발</strong>을 하였습니다.
          </p>
          <p>
            해당 프로젝트 에서 Gas 량을 알기 위해서는 <strong>H/W 분석이 필요 </strong>했습니다. <strong>일본 제품의 아날로그 출력,LS 산전의 PLC
            프로토콜 </strong>이였습니다.
          </p>
          <p>
            <strong>아날로그의 경우 직접 아날로그를 디지털로 변환하는 하드웨어를 개발하고 라즈베리 파이로 를 받아 들어 웹서버</strong>로 만들엇습니다.
          </p>
          <p>
            <strong>LS산전의 PLC 의 경우 프로토콜을 분석하여 RS485 통신을 사용하여 GAS 량을 받아 라즈베리 파이로 웹서버</strong>를 개발 했습니다.
          </p>
          <p>
            이후 모든 데이터를 1개의 서버에서 통합 하여 모든 GAS을 한번에 파악할수 있도록 개발 하였습니다.
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
            Gas Room 모니터링
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            Backend Stack
          </div>
          <div>
            Spring, Java, QueryDsl, SpringJPA
          </div>

          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            Front Stack
          </div>
          <div>
            Vue, TypeScript
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            설비 데이터
          </div>
          <div>
            아날로그 출력,LS 산전 PLC
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            회로 설계
          </div>
          <div>
            Kicad
          </div>
          <div class="gTitle">
            <q-icon name="fa-solid fa-check"></q-icon>
            H/W
          </div>
          <div>
            직접 개발한 아날로그 컨버터,라즈베리 파이,RS485
          </div>
        </div>
      </template>

    </ProjectCard>
    <ProjectDetailDialog v-model="dialog">
      <template v-slot:detailContent>
        <div class="dTitle">
          Gas Room 모니터링
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
                설비를 운행하기 위한 유틸리티 중 Gas량 을 매일 확인 해야 하는데 너무 멀리 떨어져 있어서 가는데 시간이 오래 걸리는 작업을 개선 하고자 프로젝트를 시작 했습니다.
              </p>
              <p>
                <strong>직접 H/W를 분석 하고, 이에 대한 회로를 설계 하고 직접 출력된 아날로그 값과 Gas 출력 값을 비교 하며 비례 공식을 개발 및 분석</strong> 하였습니다.
              </p>
              <p>
                <strong>LS 산전의 프로토콜을 분석 하고 이에 대한 통신을 하고 메모리를 직접 조사하면서 값의 번지수를 알아 내는 작업</strong>등을 하였습니다.
              </p>
              <p>
                분석이 완료된후 라즈베리 파이에 연결을 하여 웹서버를 만든뒤 상위 서버에서 통합된 통신을 제공 하였습니다.
              </p>
              <p>
                <strong>모든 Gas 데이터를 통합하여 1개의 웹페이지로 개발 완료</strong> 하였습니다.
              </p>
            </div>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔍 Meaning
            </div>
            <div style="margin-top: 16px">
              <p>
                해당 프로젝트를 통해서 H/W 부터 SoftWare 클라이언트 상위단 Web 까지 모두 개발했던 프로젝트로 오랜만에 풀스택을 모두 사용 했던 만큼
                기술적으로 많은 보람을 느꼈습니다.
              </p>
              <p>
                일본 제품의 경우 너무 오래 되어 2개 정도가 고장이 났는데 고장난 중고 3개를 구매 하여 회로의 필요한 부분을 교체한뒤 정상 적으로 사용하여
                이에 대한 H/W 에 대한 성취감도 느낄수 이었습니다.
              </p>
              <p>
                오랜만에 H/W를 만져서 과거의 기술 스택을 사용할수 있는 좋은 기회였습니다.
              </p>

            </div>

            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              ☔ RISK
            </div>
            <ul>
              <li>
                오랜만에 만져 보는 H/W
              </li>
              <li>
                메뉴얼이 존재 하지 않는 오래된 일본 모듈 H/W
              </li>
              <li>
                고장난 통신 포트
              </li>
              <li>
                LS산전의 PLC 데이터 주소 정보 없음.
              </li>
            </ul>

            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              😀 GET
            </div>
            <ul>
              <li>
                H/W 스킬의 재사용
              </li>
              <li>
                GAS 모니터링을 하느데 소요 되는 매일 1시간 정도의 이동 노선 제거
              </li>
              <li>
                LS 산전 프로토콜에 대한 이해
              </li>
              <li>
                오랜만에 H/W 회로 설계 및 ArtWork 을 통해 개발 성공한 자신감
              </li>
            </ul>
            <div style="font-size: 1.5rem;font-family: 'Noto Sans KR';font-weight: bold">
              🔨 Technology Stack(s)
            </div>

            <div>
              <ul>
                <li>
                  Backend: SpringBoot, Spring JPA, QueryDSL, Spring Security
                </li>
                <li>
                  Front End: Vue, TypeScript
                </li>
                <li>
                  H/W : ADC 컨버팅 회로, 라즈베리 파이
                </li>
                <li>
                  PLC: LS 산전 프로토콜
                </li>
                <li>
                  회로: KiCad
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

const sliderImage = ref(["../assets/GasRoom/gasroom1.png",
  "../assets/GasRoom/gasroom2.png",
  "../assets/GasRoom/gasroom3.png",
  "../assets/GasRoom/gasroom4.png",
  "../assets/GasRoom/gasroom5.png"])

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

