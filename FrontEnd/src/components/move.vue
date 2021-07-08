<template >
  <div>
    <b-form @submit.prevent="send">
      <h1>move</h1>
    <b-form-group id="input-group-2" label="enter were the item coming from" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.from"
          placeholder="from"
          required
          name="from"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="enter were u want to send the item" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.to"
          placeholder="to"
          required
          name="to"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"move",
    data(){
      return{
        form:{
          to:null,
          from:null,
        }
      }
    },
    mounted(){
    this.send();
  },
  methods: {
    send(){
      let use = this;
      axios.post('http://localhost:5050/move',this.form)
      .then((response) => {use.from = response.data})
      .catch(err => alert(err))
    }
  }
}
</script>