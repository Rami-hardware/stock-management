<template>
  <div>
      <b-row>
      
      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>


    </b-row>
    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      small
    ></b-table>
    <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
  </div>

  
</template>

<script>
export default{
name:"records",
data() {
      return {
        perPage: 3,
        currentPage: 1,
        filter: null,
        filterOn: [],
        items: []
      }
    },methods:{
      get(){
         fetch("http://localhost:5050").then(response => response.json()).then(data => (this.items = data))
      }
    },mounted(){
      this.get();
      this.totalRows = this.items.length;
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
}
</script>