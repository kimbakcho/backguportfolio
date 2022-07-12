<template>
  <div class="root">
    <div style="width: 70vw; padding: 64px 32px;">
      <div class="Skills" >
        <q-icon name="fa-solid fa-atom" size="3rem" class="skillIcon">
        </q-icon>
        <div class="skillsTitle">
          SKILLS
        </div>
      </div>
      <div>
        <div class="contentBoxRoot">
          <div class="contentBox" >
            <div class="contentTitle">
              Frontend
            </div>
            <img src="@/assets/frontskilllogo.png" style="margin-top: 16px">
          </div>
          <div class="contentBox" >
            <div class="contentTitle">
              Backend
            </div>
            <img src="@/assets/backendskill.png" style="margin-top: 16px">
          </div>
          <div class="contentBox" >
            <div class="contentTitle">
              Mobile App
            </div>
            <img src="@/assets/mobileAppSkill.png" style="margin-top: 16px">
          </div>
          <div class="contentBox" >
            <div class="contentTitle">
              Embedded
            </div>
            <img src="@/assets/embeddedSkill.png" style="margin-top: 16px">
          </div>
          <div class="contentBox" >
            <div class="contentTitle">
              AI
            </div>
            <img src="@/assets/aiskill.png" style="margin-top: 16px">
          </div>
          <div class="contentBox" >
            <div class="contentTitle">
              산업용 프로토콜
            </div>
            <img src="@/assets/industryProtocolSkill.png" style="margin-top: 16px">
          </div>
          <div class="contentBox" >
            <div class="contentTitle">
              Version Control
            </div>
            <img src="@/assets/versioncontrol.png" style="margin-top: 16px">
          </div>
          <div class="contentBox" >
            <div class="contentTitle">
              Deployment
            </div>
            <img src="@/assets/deploymentskill.png" style="margin-top: 16px">
          </div>
          <div class="contentBox" >
            <div class="contentTitle">
              Certificate
            </div>
            <img src="@/assets/certificateskill.png" style="margin-top: 16px">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.Skills{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0px
}
.root{
  width: 100%;
  background-color: #f9c51d;
  display: flex;
  justify-content: center;
}
.skillIcon {
  cursor: pointer;
  opacity: .5;
}
.skillIcon:hover {
  opacity: unset;
}

.skillsTitle {
  font-family: 'Black Han Sans';
  font-size: 3rem;
  margin-left: 32px;
  border-bottom: 1px solid black;
}
.contentBoxRoot{
  display: flex;
  flex-flow:column wrap;
  height: 1500px;
  align-content: space-around;
}
.contentBox{
  border-radius: 1rem;
  background-color: white;
  box-shadow: 1rem 1rem 1rem 0rgba(68,68,68,.2);
  padding: 24px;
  width: 17rem;
  margin-top: 16px;
}
.contentTitle{
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ccc;
  font-size: 1.5rem;
  color: #f4623a;
  font-weight: 700;
}
@media screen and (max-width:1200px) {
  .contentBoxRoot{
    height: 1810px;
  }

}
@media screen and (max-width:768px) {
  .contentBoxRoot{
    height: 3620px;
  }

}
@media screen and (max-width:480px) {

}
</style>
