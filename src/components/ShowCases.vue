// Фильтр и навигация
<template>
  <div>
    <h5>Добавить задачу</h5>
    <router-view />
    <ShowCaseAdd />

    <!-- Фильтр: -->
    <h6>Список задач</h6>
    <div class="container">
      <select class="select" v-model="filter">
        <option value="completed">Завершенные</option>
        <option value="not-completed">Не завершенные</option>
      </select>
    </div>

    <ShowCaseList :ShowCases="ShowCases" />
  </div>
</template>

<script>
import ShowCaseList from "@/components/ShowCaseList.vue";
import ShowCaseAdd from "@/components/ShowCaseAdd.vue";

export default {
  //значения по умолчанию:
  name: "App",
  data() {
    return {
      filter: "not-completed",
    };
  },
  //создание:

  components: {
    ShowCaseList,
    ShowCaseAdd,
  },
};
</script>

<style>
.select {
  display: block;
}
</style>
