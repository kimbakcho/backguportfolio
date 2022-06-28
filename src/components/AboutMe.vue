<template>
  <div style="width: 100%; display: flex;justify-content: center">
    <div style="max-width: 70vw;width: 70vw">
      <div class="AboutName" style="padding: 16px 0px">
        <q-icon name="fa-solid fa-address-card" size="3rem" class="aboutMeIcon">

        </q-icon>

        <div class="aboutTitle">
          About Me
        </div>
      </div>
      <div style="display: flex;width: 100%;">
        <div class="contentRoot" >
          <q-icon name="fa-solid fa-user-large" size="1.75rem" style="margin-top: 0.25rem">

          </q-icon>
          <div class="inContent">
            <div class="contentTitle">
              이름
            </div>
            <div  class="content">
              백구
            </div>
          </div>
        </div>
        <div class="contentRoot" >
          <q-icon name="fa-solid fa-user-large" size="1.75rem" style="margin-top: 0.25rem">

          </q-icon>
          <div class="inContent">
            <div class="contentTitle">
              생년월일
            </div>
            <div  class="content">
              89.01.18
            </div>
          </div>
        </div>
        <div class="contentRoot"  >
          <q-icon name="fa-solid fa-user-large" size="1.75rem" style="margin-top: 0.25rem">

          </q-icon>
          <div class="inContent">
            <div class="contentTitle">
              주소지
            </div>
            <div class="content">
              경기도 오산시
            </div>
          </div>
        </div>
      </div>
      <div style="display: flex;width: 100%; margin-top: 32px">
        <div class="contentRoot" >
          <q-icon name="fa-solid fa-user-large" size="1.75rem" style="margin-top: 0.25rem">

          </q-icon>
          <div class="inContent">
            <div class="contentTitle">
              연락처
            </div>
            <div class="content">
              010-4098-8663
            </div>
          </div>
        </div>
        <div class="contentRoot">
          <q-icon name="fa-solid fa-user-large" size="1.75rem" style="margin-top: 0.25rem">

          </q-icon>
          <div class="inContent">
            <div class="contentTitle">
              이메일
            </div>
            <div  class="content">
              vngkgk624@gmail.com
            </div>
          </div>
        </div>
        <div class="contentRoot" >
          <q-icon name="fa-solid fa-user-large" size="1.75rem" style="margin-top: 0.25rem">

          </q-icon>
          <div class="inContent">
            <div class="contentTitle">
              경력
            </div>
            <div class="content">
              9년
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
.AboutName {
  display: flex;
  align-items: center;
  justify-content: center;
}

.aboutMeIcon {
  cursor: pointer;
  opacity: .5;
}

.aboutMeIcon:hover {
  opacity: unset;
}

.aboutTitle {
  font-family: 'Black Han Sans';
  font-size: 3rem;
  margin-left: 32px;
  border-bottom: 1px solid #cccccc;
}

.inContent {
  margin-left: 32px;
  line-height: 2rem;
  width: 30%;
}

.contentTitle {
  font-family: 'Noto Sans KR';
  font-size: 1.25rem;
  font-weight: bold;
}

.content {
  font-family: 'Noto Sans KR';
  font-size: 1rem;

}
.contentRoot{
  display: flex;
  width: 33.3%;
  justify-content: center;
}


</style>
