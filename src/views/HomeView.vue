<template>
  <div class="root">
    <header id="xsHeader" :class="{xsScrollOver: isXsScrollOver()}" >
      <div id="xsHeader1">
        <nav id="homeNav">
          백구 Portfolio
        </nav>
        <div>
          <nav id="SubNav">
            <div class="headerBtn">About Me</div>
            <div class="headerBtn">Skills</div>
            <div class="headerBtn">Archiving</div>
            <div class="headerBtn">Projects</div>
            <div class="headerBtn">Career</div>
          </nav>
        </div>
      </div>
    </header>
    <header id="lgHeader">
      <div id="lgHeader1">
        <nav id="homeNav">
          백구 Portfolio
        </nav>
        <div>
          <q-btn outline class="navToggle" @click="toggleOpenNav">
            <q-icon name="fa-solid fa-bars" color="#adb5bd">

            </q-icon>
          </q-btn>
        </div>

      </div>
      <div class="lgOpenNav" :class="{openNav: openNabToggle}">
        <div class="lgOpenNavItem">
          About Me
        </div>
        <div class="lgOpenNavItem">
          Skills
        </div>
        <div class="lgOpenNavItem">
          Archiving
        </div>
        <div class="lgOpenNavItem">
          projects
        </div>
        <div class="lgOpenNavItem">
          Career
        </div>
      </div>
    </header>
    <TitleComponent>

    </TitleComponent>
    <AboutMe>

    </AboutMe>
    <Skilles>

    </Skilles>
  </div>

</template>

<script setup lang="ts">
import TitleComponent from "@/components/TitleComponent.vue"
import AboutMe from "@/components/AboutMe.vue"
import Skilles from "@/components/Skilles.vue"
import {onMounted, ref} from "vue";

let openNabToggle = ref(false)
let currentScrollY = ref(0);

let root = ref<HTMLDivElement|null>(null);
onMounted(()=>{
  window.addEventListener("scroll",rootScrollEvent)
  window.addEventListener("resize",reSizeEvent)
})

function toggleOpenNav(){
  openNabToggle.value = !openNabToggle.value
}

function isXsScrollOver(){
  if(currentScrollY.value<50){
    return false
  }else {
    return true
  }
}
function reSizeEvent(){
  console.log(window.innerWidth)
  if(window.innerWidth>1200){
    openNabToggle.value = false;
  }

}
function rootScrollEvent(value: Event){

  currentScrollY.value =window.scrollY;


}


</script>

<style scoped>

header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
  font-weight: bold;
  font-family: 'Noto Sans KR';
  height: 4.5rem;
}

#xsHeader1{
  display: flex;
  justify-content: space-between;
  width: 70vw;
}
.xsScrollOver{
  background-color: white;
}

#homeNav {
  font-size: 1.5rem;
  color: hsla(0, 0%, 100%, .7);
}

.xsScrollOver .headerBtn {
  color: #1D1D1D;
}
.xsScrollOver .headerBtn:hover {
  color: #f4623a;
}

.xsScrollOver #homeNav{
  color: #1D1D1D;
}
#SubNav {
  display: flex;
  font-size: 1.2rem;
  color: hsla(0, 0%, 100%, .7);
}
.xsScrollOver #SubNav {
  color: #1D1D1D;
}
.headerBtn {
  cursor: pointer;
  margin: 0px 32px;
}

.headerBtn:hover {
  color: white;
}

#lgHeader {
  display: none;
}
#lgHeader1{
  position: relative;
  justify-content: space-between;
  width: 100%;
  display: flex;
  padding: 0px 32px;
}

.navToggle {
  color: rgba(0, 0, 0, 0.1);
}

.lgOpenNav {
  position: absolute;
  top: 100%;
  background-color: white;
  width: 100%;
  padding: 0px 32px;
  max-height: 0px;
  overflow: hidden;
  transition: max-height .2s ease;
}
.lgOpenNavItem{
  color: #6c757d;
  cursor: pointer;
  line-height: 1.25rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: "Noto Sans KR";
  padding: 8px 0px;
}
.lgOpenNavItem:last-child{
  padding-bottom: 16px;
}
.lgOpenNavItem:hover{
  color: #f4623a;
}
.root{
  /*height: 100vh;*/
  overflow-y: auto;

}

@media screen and (max-width: 1200px) {
  #lgHeader {
    display: flex;
    background-color: white;
  }
  #xsHeader {
    display: none;
  }

  #homeNav {
    color: #212529;
  }
  .openNav{
    max-height: 196px;
  }
}
</style>
