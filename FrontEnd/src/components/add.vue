<template>
  <div>
    <form @submit.prevent="send">
      <h1>add</h1>
      <input type="number"  v-model="form.id">
      <input type="number"  v-model="form.description">
      <input type="number"  v-model="form.category">
      <button type="submit">click</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "add",
  data() {
    return{
      form:{
        id: '',
        description:'',
        category:''
      }
    }
  },
  mounted(){
    this.send();
  },
  methods: {
    send(){
      let use = this;
      axios.post('http://localhost:5050/add',this.form)
      .then((response) => {use.from = response.data})
      .catch(err => alert(err))
    }
  },
};
</script>