<template>
  <div>
    <h3>{{ homeTitle }}</h3>
    <div>
      <router-link to="/signin">
        <button class="waves-effect waves-light btn-large" @click="register">
          Войти
        </button>
      </router-link>
      <h6>или</h6>
      <router-link to="/register">
        <button
          class="waves-effect waves-light btn-small disabled"
          @click="register"
        >
          Зарегистрироваться
        </button>
      </router-link>

      <router-view />

      <h6>Список товаров</h6>

      <!-- твой компонент не принимает никакие данных на вход -->
      <!-- <ShowcaseList :show-cases="ShowCaseS" />-->
      <!-- <ShowcaseList />-->
      <ShowCaseS />
    </div>
  </div>
</template>

<script>
// вот тут заимпортил компонент с названием ShowCaseS,
// а на верстке используешь ShowcaseList, объявил как  components: { ShowCaseS },
import ShowCaseS from "../components/ShowcaseList";
export default {
  components: { ShowCaseS },
  data: () => ({
    // camelCase
    homeTitle: "Добро пожаловать в онлайн витрину",
    count: 0,
    ShowCaseS: [],
  }),
};
</script>

<style scoped></style>
