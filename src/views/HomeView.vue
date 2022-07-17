<template>
  <div class="root" ref="root">
    <header id="xsHeader" :class="{xsScrollOver: isXsScrollOver()}" >
      <div id="xsHeader1">
        <nav id="homeNav" @click="gotoHomeScroll">
          백구 Portfolio
        </nav>
        <div>
          <nav id="SubNav">
            <div class="headerBtn" @click="gotoAboutMe">About Me</div>
            <div class="headerBtn" @click="gotoSkill">Skills</div>
            <div class="headerBtn" @click="gotoArchiving">Archiving</div>
            <div class="headerBtn" @click="gotoProjects">Projects</div>
            <div class="headerBtn" @click="gotoCareer">Career</div>
          </nav>
        </div>
      </div>
    </header>
    <header id="lgHeader">
      <div id="lgHeader1">
        <nav id="homeNav" @click="gotoHomeScroll">
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
        <div class="lgOpenNavItem" @click="gotoAboutMe">
          About Me
        </div>
        <div class="lgOpenNavItem" @click="gotoSkill">
          Skills
        </div>
        <div class="lgOpenNavItem" @click="gotoArchiving">
          Archiving
        </div>
        <div class="lgOpenNavItem" @click="gotoProjects">
          projects
        </div>
        <div class="lgOpenNavItem" @click="gotoCareer">
          Career
        </div>
      </div>
    </header>
    <TitleComponent>

    </TitleComponent>
    <AboutMe ref="aboutMe">

    </AboutMe>
    <Skilles ref="skill">

    </Skilles>
    <Archiving ref="archiving">

    </Archiving>
    <Projects ref="projects">

    </Projects>
    <Career ref="career">

    </Career>
  </div>

</template>

<script setup lang="ts">
import TitleComponent from "@/components/TitleComponent.vue"
import AboutMe from "@/components/AboutMe.vue"
import Skilles from "@/components/Skilles.vue"
import Archiving from "@/components/Archiving.vue"
import Projects from "@/components/Projects.vue"
import Career from "@/components/Career.vue"
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
onMounted(()=>{
  reSizeEvent();
})
function rootScrollEvent(value: Event){
  currentScrollY.value = window.scrollY;
}
function gotoHomeScroll(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

const aboutMe = ref();
function gotoAboutMe(){
  let aboutMeDiv = aboutMe.value.$el as HTMLDivElement;
  window.scrollTo({
    top: aboutMeDiv.offsetTop - 64,
    behavior: "smooth"
  })
  openNabToggle.value = false;
}

const skill = ref();
function gotoSkill(){
  let skillDiv = skill.value.$el as HTMLDivElement;
  window.scrollTo({
    top: skillDiv.offsetTop - 64,
    behavior: "smooth"
  })
  openNabToggle.value = false;
}

const archiving = ref();

function gotoArchiving(){
  let archivingDiv = archiving.value.$el as HTMLDivElement;
  window.scrollTo({
    top: archivingDiv.offsetTop - 64,
    behavior: "smooth"
  })
  openNabToggle.value = false;
}

const projects = ref();
function gotoProjects() {
  let projectsgDiv = projects.value.$el as HTMLDivElement;
  window.scrollTo({
    top: projectsgDiv.offsetTop - 64,
    behavior: "smooth"
  })
  openNabToggle.value = false;
}
const career = ref()

function gotoCareer(){
  let careerDiv = career.value.$el as HTMLDivElement;
  window.scrollTo({
    top: careerDiv.offsetTop - 64,
    behavior: "smooth"
  })
  openNabToggle.value = false;
}
</script>

<style>
html, body {
  scroll-behavior: smooth
}
</style>

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
#xsHeader, #lgHeader {
  z-index: 2;
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
  cursor: pointer;
}
#homeNav:hover {
  color: white;
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
  #homeNav:hover {
    color: #f4623a;
  }
  .openNav{
    max-height: 196px;
  }
}
</style>
