<template>
  <div>
    <ul>
      <strong>
        <div class="row list">
          <div class="col s1" align="left">#</div>
          <div class="col s2">EAN</div>
          <div class="col s2">INN</div>
          <div class="col s2">Цена</div>
          <div class="col s2">Название</div>
          <div class="col s1">Дата</div>
          <div class="col s2">Кнопка</div>
        </div>
      </strong>
      <hr />
      <!-- Loader: -->
      <Loader class="loader" v-if="loading" />
      <div v-else-if="ShowCaseS.length">
        <ShowcaseItem
          v-for="(ShowCase, i) in ShowCaseS"
          :key="i"
          :index="i"
          :ShowCase="ShowCase"
        />
      </div>
      <p v-else>Нет задач</p>
      <hr />
    </ul>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import ShowcaseItem from "@/components/ShowcaseItem";
//firebase
import { auth, database } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";

export default {
  data() {
    return {
      loading: true,
      ShowCaseS: [],
    };
  },
  components: {
    ShowcaseItem,
    Loader,
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // this.fetchData(); //Данные текущего пользователя
        this.fetchAllData(); //Все данные
      }
    });
  },

  methods: {
    //получать Данные пользователя
    // fetchData() {
    //   this.loadind = true;
    //   const reference = ref(database, "db-showcase/" + auth.currentUser.uid);
    //   onValue(reference, (snapshot) => {
    //     this.ShowCaseS = [];
    //     snapshot.forEach((childSnapshot) => {
    //       const childKey = childSnapshot.key;
    //       const childData = childSnapshot.val();
    //       this.ShowCaseS.push({ id: childKey, ...childData });
    //     });
    //     this.loading = false;
    //   });
    // },
    //получать Все Данные
    fetchAllData() {
      this.loadind = true;
      const reference = ref(database, "db-showcase");
      onValue(reference, (snapshot) => {
        this.ShowCaseS = [];
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          this.ShowCaseS.push(
            ...Object.values(childData).map((item) => ({
              ...item,
            }))
          );
        });
        this.loading = false;
      });
    },
  },
};
</script>
<style scoped lang="scss">
div {
  margin: 5px 0 5px 0 !important;
}
.list {
  border-radius: 10em;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  align-items: center;

  background: var(--gray2);

  font-size: 9px;
  @media (min-width: 576px) {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 992px) {
    font-size: 16px;
  }
}
</style>
