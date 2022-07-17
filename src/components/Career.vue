<template>
  <div style="width: 100%; display: flex;justify-content: center;padding: 64px 0px;background-color: #f5f5f5">
    <div style="width: 70vw">
      <div class="Career" style="padding-bottom: 32px">
        <q-icon name="fa-solid fa-timeline" size="3rem" class="careerIcon">

        </q-icon>

        <div class="careerTitle">
          CAREER
        </div>
      </div>
      <div class="contentRoot">
        <div class="contentLogo" >
          <div style="border-radius: 50%; border: 1px solid #ccc;padding: 32px;background-color: white">
            <img src="@/assets/careerLogo.png" style="width: 100px">
          </div>
        </div>

        <div style="padding-left: 32px; font-family: 'Noto Sans KR';font-size: 1rem">
          <div class="headerContent" style="padding-bottom: 16px;border-bottom: 1px solid #ccc">
            <div style="font-family: 'Black Han Sans';font-size: 2rem;">
              (주) 와이솔
            </div>
            <div style="color: #6c757d">
              2016.10 - 현재
            </div>
            <div style="margin: 16px 0px">
              반도체 공정인 FAB 에서 <b>설비 관리 프로그램 개발</b>을 하고 있습니다.
            </div>
            <div>
              기본적으로는 <b>Spring 프레임워크,Vue,secs/gem,sklearn,pytouch</b> 을 이용 하여 분석 및 개발 업무을 진행 하며
              <ui>
                <li>
                  설비 관리에 필요한 소프트웨어 개발
                </li>
                <li>
                  설비 통신 데이터 프로토콜을 분석 모니터링 및 제어 프로그램
                </li>
                <li>
                  FAB내 BigData 이용 AI 이용하여 설비 관리,제품 품질 관련 프로그램 개발
                </li>
              </ui>
              하는게 주요 업무 입니다.
            </div>
          </div>
          <div >
            <div class="historyChapter">
              <div class="row items-center">
                <q-icon name="fa-solid fa-code-merge" class="historySubtitleIcon" >
                </q-icon>
                <div class="historySubTitle" style="">
                  AI 빅데이터
                </div>
              </div>
              <div style="font-size: 1rem;color: #6c757d;margin: 16px 0px">
                2020년 ~ 현재
              </div>
              <ui>
                <li>
                  2022-07 빅데이터 분석 기사 취득
                </li>
                <li>
                  MES 데이터 기반 설비 생산량 예측 <b>(sklearn)</b>
                </li>
                <li>
                  이미지 인식 CNN 기반 학습을 이용한 불량 선출 작업
                  <b>(retinanet,yolo5)</b>
                </li>
              </ui>
            </div>
            <div class="historyChapter">
              <div class="row items-center">
                <q-icon name="fa-solid fa-code-merge" class="historySubtitleIcon">
                </q-icon>
                <div class="historySubTitle">
                  설비 분석,모니터링,유지 보수
                </div>
              </div>
              <div style="font-size: 1rem;color: #6c757d;margin: 16px 0px">
                2016년 ~ 현재
              </div>
              <ui>
                <li>
                  설비 현황 모니터링
                </li>
                <li>
                  설비 데이터 맞춤형 분석 프로그램
                </li>
                <li>
                  PLC 통신 프로토콜 secs/gem 변환
                </li>
                <li>
                  설비 유지 보수 관리 프로그램
                </li>
                <li>
                  MES 데이터와 설비 데이터 연동 분석
                </li>
              </ui>
            </div>
            <div class="historyChapter">
              <div class="row items-center">
                <q-icon name="fa-solid fa-code-merge" class="historySubtitleIcon">
                </q-icon>
                <div class="historySubTitle">
                  Side Porject
                </div>
              </div>
              <div style="font-size: 1rem;color: #6c757d;margin: 16px 0px">
                2020년 ~ 2022년 상반기
              </div>
              <ui>
                <li>
                  Tenniswing - 테니스 플랫폼 개발
                </li>
                <li>
                  Wecango - 코로나 관련 여행 SNS 플랫폼 개발
                </li>
                <li>
                  포르투나 - 위치 기반 소셜 플랫폼 개발
                </li>
                <li>
                  동네찬스 - 동네 소식 관련 플랫폼 유지 보수 개발
                </li>
                <li>
                  기술 블로그 알쓸전컴 운영
                </li>
                <li>
                  웨이퍼 맵 관련 AI 이미지 인식을 이용한 불량 검출 개발
                </li>
              </ui>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.Career{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0px
}
.careerIcon {
  cursor: pointer;
  opacity: .5;
}

.careerIcon:hover {
  opacity: unset;
}

.careerTitle {
  font-family: 'Black Han Sans';
  font-size: 3rem;
  margin-left: 32px;
  border-bottom: 1px solid #cccccc;
}

.contentRoot{
  display: flex;
  justify-content: center;
}
.historyChapter{
  margin-top: 16px;
}
.historySubTitle{
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 16px;
}
.historySubtitleIcon{
  font-size: 1.5rem;
}
.contentLogo{
  padding: 0px 32px;
  border-right: 1px solid #ccc;
}

@media screen and (max-width:1200px) {


}
@media screen and (max-width:768px) {

  .contentLogo{
    padding: 0px 0px;
    border-right: unset;
  }
  .contentRoot{
    flex-direction: column;
    align-items: center;
  }
  .historySubTitle{
    font-size: 1rem;
    font-weight: bold;
    margin-left: 16px;
  }

  .historySubtitleIcon{
    font-size: 1rem;
  }

}
@media screen and (max-width:480px) {

}
</style>
