// Фильтр и навигация
<template>
  <div>
    <h5>Добавить товар</h5>
    <router-view />
    <ShowcaseAdd />

    <!-- Фильтр: -->
    <h6>Список моих товаров</h6>

    <MyList :Showcase="Showcase" />
  </div>
</template>

<script>
import MyList from "@/components/MyList.vue";
import ShowcaseAdd from "@/components/ShowcaseAdd.vue";

export default {
  components: {
    MyList,
    ShowcaseAdd,
  },
};
</script>

<style>
.select {
  display: block;
}
</style>
