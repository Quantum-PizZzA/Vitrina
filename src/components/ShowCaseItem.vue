//Обекты внутри | HTML сегмент |
<template>
  <div class="row item">
    <div class="col s1" align="left">{{ index + 1 }}</div>
    <div class="col s2">{{ ShowCase.timeIn.toUpperCase() }}</div>
    <div class="col s2">{{ ShowCase.timeOut.toUpperCase() }}</div>
    <div class="col s5" align="left">{{ ShowCase.title.toUpperCase() }}</div>
    <div class="col s2">
      {{ new Date(ShowCase.date.toUpperCase()).toLocaleDateString() }}
    </div>
    <div class="col s1">
      <button
        class="btn-floating btn-small waves-effect waves-teal btn-flat waves-light"
        @click="EditShowCase(ShowCase.id)"
        align="center"
      >
        EDIT
      </button>
    </div>
    <div class="col s1">
      <button
        class="btn-floating btn-small waves-effect waves-teal btn-flat waves-light"
        @click="handleDeleteShowCase(ShowCase.id)"
        align="center"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script>
import { ref, remove } from "firebase/database";
import { auth, database } from "@/firebase";

export default {
  props: {
    ShowCase: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    handleDeleteShowCase(id) {
      // удаление задачи
      remove(ref(database, "tasks/" + auth.currentUser.uid + "/" + id));
    },
  },
};
</script>

<style scoped>
div {
  /*margin: 4px 4px 4px 4px !important;*/
}
.item {
  display: flex;

  border-radius: 10em;
  justify-content: space-between; /* расположение по краям */
  padding: 0.5rem 2rem; /* Применяется для всех 4 сторон */
  margin-bottom: 1rem;
  align-items: center;
  font-size: 16px;

  background: var(--gray2);
}
</style>
