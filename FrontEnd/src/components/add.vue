<template>
  <div>
    <b-form @submit.prevent="send">
      <h1>add</h1>
    <b-form-group id="input-group-2" label="enter the id of item" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.id"
          placeholder="Enter id"
          required
          type="number"
          name="id"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="enter description of item" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.description"
          placeholder="Enter description"
          required
          name="description"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="enter category of item" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.category"
          placeholder="Enter category"
          required
          name="category"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
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
      event.preventDefault();
      let use = this;
      axios.post('http://localhost:5050/add',this.form)
      .then((response) => {use.from = response.data})
      .catch(err => alert(err))
    }
  },
};
</script>