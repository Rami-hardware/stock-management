<template >
  <div class="con">
    <!--the form to send new data to Database-->
    <b-form @submit.prevent="send">
      <h1>move</h1>
      <!--alert apper when u click to modify data-->
      <b-alert v-model="showAlert">item moved </b-alert>
      <!--alert apper when u click to modify data-->
      <!--id-->
      <b-form-group id="input-group-2" label="enter SID of item" label-for="input-2" class="spacing">
        <b-form-input
          id="input-2"
          v-model="form.SID"
          placeholder="enter SID number"
          required
          name="SID"
        ></b-form-input>
      </b-form-group>
      <!--id-->
      <!--from-->
    <b-form-group id="input-group-2" label="enter were the item coming from" label-for="input-2" class="spacing">
        <b-form-input
          id="input-2"
          v-model="form.from"
          placeholder="from"
          required
          name="from"
        ></b-form-input>
      </b-form-group>
      <!--from-->
      <!--to-->
      <b-form-group id="input-group-2" label="enter were u want to send the item" label-for="input-2" class="spacing">
        <b-form-input
          id="input-2"
          v-model="form.to"
          placeholder="to"
          required
          name="to"
        ></b-form-input>
      </b-form-group>
      <!--to-->
      <b-button type="submit" @click="showAlert=true" variant="primary" class="btn-move">move</b-button>
      </b-form>
  </div>
      <!--the form to send new data to Database-->
</template>

<script>
import axios from 'axios'
export default {
    name:"move",
    data(){
      return{
        //take data using v-model
        form:{
          SID:null,
          to:null,
          from:null,
        },
        //hide the alert 
        showAlert:false
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
      axios.post('http://localhost:5050/move',this.form)
      .then((response) => {use.from = response.data})
      .catch(err => alert(err))
    }
  },
}
</script>

<style lang="scss">

</style>