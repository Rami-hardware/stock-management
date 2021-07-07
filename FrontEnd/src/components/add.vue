<template>
  <div>
    <b-form @submit="testMethod">
      <h1>add</h1>
      <b-form-group id="input-group-1" label="ID of item" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.SID"
          type="number"
          placeholder="Enter ID"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="item description"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.description"
          placeholder="Enter description"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="enter category"
        label-for="input-3"
      >
        <b-form-input
          id="input-2"
          v-model="form.category"
          placeholder="Enter category"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      form:{
      SID: "",
      description: "",
      category: "",
      }
 
    };
  },
  methods: {
    testMethod() {
      fetch('http://localhost:5050/add',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(this.form)
      })
    },
  },
};
</script>