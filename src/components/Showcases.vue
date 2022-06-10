// Фильтр и навигация
<template>
  <div>
    <h5>Добавить товар</h5>
    <router-view />
    <ShowcaseAdd />

    <!-- Фильтр: -->
    <h6>Список всех товаров</h6>

    <ShowcaseList :Showcase="Showcase" />
  </div>
</template>

<script>
import ShowcaseList from "@/components/ShowcaseList.vue";
import ShowcaseAdd from "@/components/ShowcaseAdd.vue";

export default {
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
