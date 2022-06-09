<template>
  <div>
    <h3>{{ hometitle }}</h3>
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
    </div>
  </div>
</template>

<script>
import ShowcaseItem from "../components/ShowcaseItem";
export default {
  components: { ShowcaseItem },
  data: () => ({
    hometitle: "Добро пожаловать в онлайн витрину",
    count: 0,
  }),
};
</script>

<style scoped></style>
