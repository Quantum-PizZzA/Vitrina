<template>
  <nav class="#0a3981 blue darken-4">
    <!-- Цвет Nav бара -->
    <div class="nav-wrapper">
      <!-- Левая часть -->
      <router-link to="/"><img src="../png/salesk.png" /></router-link>

      <!-- Правая часть -->
      <div class="routes">
        <!-- email авторизованого пользователя  -->
        <div class="email">{{ email }}</div>
        <router-link
          v-for="route in filteredRoutes"
          :key="route.path"
          :to="route.path"
          exact
          active-class="active"
          >{{ route.name }}</router-link
        >
        <!-- выход авторизованого пользователя  -->
        <button
          class="waves-effect waves-light btn"
          type="submit"
          v-if="isAuth"
          @click="logout"
        >
          Выйти
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { AUTH_ROUTES, NOT_AUTH_ROUTES } from "../router/routes";

export default {
  data: () => ({
    isAuth: false,
    email: "",
  }),
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isAuth = true;
        this.email = auth.currentUser.email;
      }
    });
  },
  computed: {
    filteredRoutes() {
      return this.isAuth ? AUTH_ROUTES : NOT_AUTH_ROUTES; //IF ELSE
    },
  },
  methods: {
    logout() {
      signOut(auth).then(() => {
        this.isAuth = false;
        this.$router.push("/");
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 40px;
  height: 40px;
  margin: 12px;
}
nav {
  padding: 0 3rem;
}
.nav-wrapper {
  display: flex;
  justify-content: space-between;
}
.routes {
  display: flex;
  gap: 20px;
}
.btn {
  top: 13px;
  background-color: white !important;
  color: #000;
}
.email {
  font-weight: bold !important;
}
</style>
