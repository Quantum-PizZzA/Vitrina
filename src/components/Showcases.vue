// Фильтр и навигация
<template>
  <div>
    <h5>Добавить товар</h5>
    <router-view />
    <ShowcaseAdd />

    <!-- Фильтр: -->
    <h6>Список товаров</h6>
    <div class="container">
<!--      <select class="select" v-model="filter">-->
<!--        <option value="completed">Завершенные</option>-->
<!--        <option value="not-completed">Не завершенные</option>-->
<!--      </select>-->
    </div>

    <ShowcaseList :todos="todos" />
  </div>
</template>

<script>
import ShowcaseList from "@/components/ShowcaseList.vue";
import ShowcaseAdd from "@/components/ShowcaseAdd.vue";

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
    ShowcaseList,
    ShowcaseAdd,
  },
};
</script>

<style>
.select {
  display: block;
}
</style>
