<template>
  <div class="root">
    <div style="width: 70vw; padding: 64px 32px;">
      <div class="Archiving" >
        <q-icon name="fa-solid fa-box" size="3rem" class="archivingIcon">
        </q-icon>
        <div class="archivingTitle">
          ARCHIVING
        </div>
      </div>
      <div class="cardRoot">
        <div class="card" @click="goToLinkSite('https://github.com/kimbakcho')">
          <div class="archTitle">
            <q-icon name="fa-brands fa-github">
            </q-icon>
            <div style="margin-left: 8px">
              GitHub
            </div>
          </div>
          <div>
            <div to="https://github.com/kimbakcho" class="link">
              github.com/kimbakcho
            </div>
          </div>
          <div>
            <span style="font-weight: bold">
              소스 코드 저장소
            </span>
            입니다.
          </div>
          <div>
            ● 프로젝트 실행시 public 가능한 부분 공개
          </div>
          <div>
            ●  공부를 위해 연습한 프로젝트 소스 코드
          </div>
        </div>
        <div class="card" @click="goToLinkSite('https://idlecomputer.tistory.com/')">
          <div class="archTitle">
            <img src="@/assets/tstorylogo.png" style="width: 14rem">
          </div>
          <div>
            <div to="https://idlecomputer.tistory.com/" class="link">
              알쓸전컴
            </div>
          </div>
          <div>
            <span style="font-weight: bold">
              공부 분석 내용 정리
            </span>
            사이트 입니다
          </div>
          <div>
            ● 소스 분석 내용
          </div>
          <div>
            ●  IT 공부 분석 및 정리 내용
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

function goToLinkSite(site: string){
    window.open(site,"_blank");
}
</script>

<style scoped>
.root{
  width: 100%;
  background-color: #222;
  display: flex;
  justify-content: center;
}
.Archiving{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0px
}
.archivingTitle{
  font-family: 'Black Han Sans';
  font-size: 3rem;
  margin-left: 32px;
  border-bottom: 1px solid white;
  color: white;
}
.archivingIcon {
  cursor: pointer;
  opacity: .5;
}
.archivingIcon:hover {
  opacity: unset;
}
.archTitle {
  display: flex;
  align-items: center;
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 3rem;
  padding-bottom: 16px;
}
.cardRoot{
  display: flex;
  padding: 16px 0px;
  justify-content: space-around;
}
.card{
  background: white;
  padding: 32px;
  border-radius: 20px;
  cursor: pointer;
  line-height: 2rem;
  font-family: "Noto Sans KR";
  width: 23rem;
}
.link{
  color: #258ddb;
  font-size: 1.1rem;
  font-family: "Noto Sans KR";
}
.link:hover{
  text-decoration: underline;
}

@media screen and (max-width:1200px) {
  .card{
    width: 30rem;
    margin-top: 16px;
  }
  .cardRoot{
    flex-wrap: wrap;
  }
}
@media screen and (max-width:768px) {

}
@media screen and (max-width:480px) {
  .archivingTitle{
    font-size: 2.0rem;
  }
  .archivingIcon{
    font-size: 2.3rem !important;
  }
}

</style>

