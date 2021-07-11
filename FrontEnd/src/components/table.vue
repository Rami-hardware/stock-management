<template>
  <div>
    <!--filter-->
    <b-row>
      <b-col lg="6" class="my-1">
        <b-form-group
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
    <!--filter-->
    <!--table-->
    <b-table
      id="my-table"
      :items="formartedItems"
      :per-page="perPage"
      :current-page="currentPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :field="formartedItems"
      small
      striped
      hover
      noCollapse
      outlined
      bordered
    ></b-table>
    <!--table-->
    <!--pagination-->
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
      <!--pagination-->
    </div>
  </div>
</template>

<script>
export default {
  name: "records",
  data() {
    return {
      //set how many page will apper in screen
      perPage: 5,
      //set the current page in table
      currentPage: 1,
      //filter from the field
      filter: null,
      //select the field u want to filter
      filterOn: [],
      //all record will seved here
      items: [],
    };
  },
  methods: {
    //get records from database
    get() {
      fetch("http://localhost:5050")
        .then((response) => response.json())
        .then((data) => (this.items = data));
    },
    // set Variant to row depending on color
    getVariant(status) {
      switch (status) {
        case 'yes':
          return "success";
        case 'no':
          return "danger";
        default:
          return "info";
      }
    },
  },
  mounted() {
    this.get();
    this.totalRows = this.items.length;
    this.getVariant()
  },
  computed: {
    //count the rows
    rows() {
      return this.items.length;
    },
    //get all the records and set Variant
    formartedItems() {
      if (!this.items) return [];
      return this.items.map((item) => {
        item._rowVariant = this.getVariant(item.IsActive);
        return item;
      });
    },
  },
};
</script>
