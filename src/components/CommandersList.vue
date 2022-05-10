<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Mission Commander Inscritos </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(commander, index) in missioncommanders"
          :key="index"
          @click="setActiveCommanders(commander, index)"
        >
          {{ commander.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentCommander">
        <h4>Mission Commander</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentCommander.name}}
          <br><label><strong>Username:</strong></label> {{ currentCommander.username}}
          <br><label><strong>mainStack:</strong></label> {{ currentCommander.mainStack}}
          <br><label><strong>Current Enrollment:</strong></label> {{ currentCommander.currentEnrollment}}
          <br><label><strong>Has Azure Certification:</strong></label> {{ currentCommander.hasAzureCertification}}
        </div>
        <router-link :to="'/missioncommanders/' + currentCommander.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un mission commander.</p>
      </div>
    </div>
  </div>
</template>
<script>

import CommanderService from "../services/CommanderService";

export default {
  name: "missioncommander-list",
  data() {
    return {
      tutorials: [],
      missioncommanders: [],
      currentTutorial: null,
      currentCommander: null,
      currentIndex: -1,
      title: "",
      commanderId: ""
    };
  },
  methods: {
    getAllMissionCommanders(){
      CommanderService.getAll()
        .then(response => {
          this.missioncommanders = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveCommanders(commander, index) {
      this.currentCommander= commander;
      this.currentIndex = commander? index : -1;
    }
  },
  mounted() {
    this.getAllMissionCommanders();
  }
};
</script>
