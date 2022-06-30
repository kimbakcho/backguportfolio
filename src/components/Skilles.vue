<template>
  <div class="root">
    <div style="max-width: 70vw;width: 70vw; padding: 64px 32px">
      <div class="Skills" style="padding: 16px 0px">
        <q-icon name="fa-solid fa-atom" size="3rem" class="skillIcon">
        </q-icon>
        <div class="skillsTitle">
          SKILLS
        </div>
      </div>
      <div>
        <div style="display: flex;flex-flow:column wrap">
          <div class="contentBox" >
            <div class="contentTitle">
              Frontend
            </div>
            <img src="@/assets/skilllogo.png" style="margin-top: 16px">
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
.contentBox{
  border-radius: 1rem;
  background-color: white;
  box-shadow: 1rem 1rem 1rem 0rgba(68,68,68,.2);
  padding: 24px;
  width: 17rem;
}
.contentTitle{
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ccc;
  font-size: 1.5rem;
  color: #f4623a;
  font-weight: 700;

}

</style>
