<template>
  <div class="root">
    <div class="projectRoot">
      <div class="Projects">
        <q-icon class="projectIcon" size="3rem" name="fa-solid fa-star">
        </q-icon>
        <div class="projectTitle">
          PROJECTS
        </div>
      </div>
      <div class="card">

        <WaferDefectDetector>

        </WaferDefectDetector>

        <PattenDefectAI style="margin-top: 16px">

        </PattenDefectAI>

        <BackWaferMapDefectProject style="margin-top: 16px">

        </BackWaferMapDefectProject>

        <CapaAI style="margin-top: 16px">

        </CapaAI>

        <EquipmentDataIntegrationPlatform style="margin-top: 16px">

        </EquipmentDataIntegrationPlatform>

        <EquipmentMonitor style="margin-top: 16px">

        </EquipmentMonitor>

        <EquipmentOEEAnalytics style="margin-top: 16px">

        </EquipmentOEEAnalytics>


        <LeadTimeManager style="margin-top: 16px">

        </LeadTimeManager>

        <SampleManager style="margin-top: 16px">

        </SampleManager>

        <PortOccupation style="margin-top: 16px">

        </PortOccupation>


        <GasRoom style="margin-top: 16px">

        </GasRoom>


        <ObjectCheck style="margin-top: 16px">

        </ObjectCheck>


        <YieldDash style="margin-top: 16px">

        </YieldDash>


        <Tenniswing style="margin-top: 16px">

        </Tenniswing>
        <Wecango style="margin-top: 16px">

        </Wecango>
        <Forutona style="margin-top: 16px">

        </Forutona>





      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WaferDefectDetector from "@/components/Project/WaferDefectDetector.vue"
import Tenniswing from "@/components/Project/Tenniswing.vue"
import Wecango from "@/components/Project/Wecango.vue"
import Forutona from "@/components/Project/Forutona.vue"
import BackWaferMapDefectProject from "@/components/Project/BackWaferMapDefectProject.vue"
import CapaAI from "@/components/Project/CapaAI.vue"
import PattenDefectAI from "@/components/Project/PattenDefectAI.vue"
import LeadTimeManager from "@/components/Project/LeadTimeManager.vue"
import EquipmentOEEAnalytics from "@/components/Project/EquipmentOEEAnalytics.vue"
import PortOccupation from "@/components/Project/PortOccupation.vue"
import GasRoom from "@/components/Project/GasRoom.vue"
import ObjectCheck from "@/components/Project/ObjectCheck.vue"
import YieldDash from "@/components/Project/YieldDash.vue"
import EquipmentDataIntegrationPlatform from "@/components/Project/EquipmentDataIntegrationPlatform.vue"
import EquipmentMonitor from "@/components/Project/EquipmentMonitor.vue"
import SampleManager from "@/components/Project/SampleManager.vue"
</script>

<style scoped>
.root {
  width: 100%;
  background-color: #1d809f;
  display: flex;
  justify-content: center;
}

.Projects {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0px
}

.projectIcon {
  cursor: pointer;
  opacity: .5;
}

.projectIcon:hover {
  opacity: unset;
}

.projectTitle {
  font-family: 'Black Han Sans';
  font-size: 3rem;
  margin-left: 32px;
  border-bottom: 1px solid white;
  color: white;
}

.projectRoot {
  width: 70vw;
  padding: 64px 32px;
}

@media screen and (max-width: 768px) {
  .projectTitle {
    font-size: 2.0rem;
  }

  .projectIcon {
    font-size: 2.3rem !important;
  }

  .projectRoot {
    width: 80vw;
    padding: 32px 0px;
  }
}

@media screen and (max-width: 480px) {
  .projectTitle {
    font-size: 2.0rem;
  }

  .projectIcon {
    font-size: 2.3rem !important;
  }

  .projectRoot {
    width: 90vw;
    padding: 32px 0px;
  }
}


</style>
