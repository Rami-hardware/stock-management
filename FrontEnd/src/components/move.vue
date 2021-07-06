<template >
  <div class="accordion" role="tablist">
  <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">move</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
              <b-form-group
                id="input-group-1"
                label="item id"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  type="number"
                  placeholder="item id"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="name of items"
                label-for="input-1"
              >
                <b-form-input
                  label="name of item"
                  id="input-1"
                  type="text"
                  placeholder="name of the item"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="where to set"
                label-for="input-1"
              >
                <b-form-select
                  label="set were ?"
                  id="input-3"
                  required
                ></b-form-select>
              </b-form-group>
              <b-button type="submit" variant="success">add</b-button>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
    name:"move",
}
</script>