<template>
  <div class="container">
    <div>
      <form>
      <input v-model="EAN" type="text" placeholder="EAN" />
      <input v-model="INN" type="text" placeholder="INN" />
      <input v-model="Price" type="text" placeholder="Цена" />
        </form>
      <form>
        <input v-model="Name" type="text" placeholder="Название" />
        <input v-model="tele" type="text" placeholder="Телефон" />
        <input v-model="date" type="date" placeholder="Дата" />
        <form @submit.prevent="onSubmit">
          <button class="waves-effect waves-light btn" type="submit">
            Создать
            <i class="material-icons right">send</i>
          </button>
        </form>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, push } from "firebase/database";
import { auth, database } from "@/firebase";

export default {
  //начальое значение
  data() {
    return {
      EAN: "",
      INN: "",
      Price: "",
      Name: "",
      tele: "",
      date: "",
      completed: true,
    };
  },
  //передача данных в БД
  methods: {
    onSubmit() {
      push(ref(database, "db-showcase/" + auth.currentUser.uid), {
        EAN: this.EAN,
        INN: this.INN,
        INN: this.INN,
        Price: this.Price,
        Name: this.Name,
        tele: this.tele,
        date: this.date,
        completed: false,
      });
      //значение после ввода
      this.EAN = "";
      this.INN = "";
      this.Price = "";
      this. Name = "";
      this.tele = "";
      this.date = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex; /* расположение поля для создания */
}

button,
input {
  margin: 8px 8px 8px 8px !important; /* расположение данных ввода и кнопки */
}

input {
  width: 0;
}
</style>
