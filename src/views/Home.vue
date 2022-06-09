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
<!--        <ShowcaseItem></ShowcaseItem>-->
      </router-link>
    </div>
  </div>
</template>

<script>
import ShowcaseItem from "../components/ShowcaseItem";
export default {
  components: {ShowcaseItem},
  data: () => ({
    hometitle: "Добро пожаловать в онлайн витрину", //Добро пожаловать в онлайн витрину
    count: 0,
  }),
  created() {
    this.sum();
  },
  watch: {
    title(value) {
      console.log("new title: ", value);
    },
  },
  computed: {
    tasksLength() {
      return "Кол-во задач: " + this.count;
    },
  },
  methods: {
    sum() {},
    changeTitle() {
      this.hometitle += " Новый заголовок";
    },
    changeCount() {
      this.count++;
    },
  },
};
</script>

<style scoped></style>
