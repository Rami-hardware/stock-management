<template>
  <div class="con">
    <!--the form to send new data to Database-->
    <b-form @submit.prevent="send">
      <h1>add</h1>
    <!--alert apper when u click to send data-->
      <b-alert v-model="showAlert">you have added your item</b-alert>
    <!--alert apper when u click to send data-->
    <!--id-->
    <b-form-group id="input-group-2" label="enter the id of item" label-for="input-2" class="spacing">
        <b-form-input
          id="input-2"
          v-model="form.id"
          placeholder="Enter id"
          type="number"
          name="id"
        ></b-form-input>
      </b-form-group>
      <!--id-->
      <!--description-->
      <b-form-group id="input-group-2" label="enter description of item" label-for="input-2" class="spacing">
        <b-form-input
          id="input-2"
          v-model="form.description"
          placeholder="Enter description"
          name="description"
        ></b-form-input>
      </b-form-group>
      <!--description-->
      <!--category-->
      <b-form-group id="input-group-2" label="enter category of item" label-for="input-2" class="spacing">
        <b-form-input
          id="input-2"
          v-model="form.category"
          placeholder="Enter category"
          name="category"
        ></b-form-input>
      </b-form-group>
      <!--category-->
      <!--button-->
      <b-button type="submit" @click="showAlert=true" class="btn-add"> 
        <span>add</span>
        </b-button>
        <!--button-->
      </b-form>
      <!--the form to send new data to Database-->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "add",
  data() {
    return{
      //take data using v-model
      form:{
        id: '',
        description:'',
        category:''
      },
      //hide alert
      showAlert: false
    }
  },
  mounted(){
    //create instance of send()
    this.send();
  },
  methods: {
    //endpoint to send data to Database
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
