<template>
  <div>
    <q-btn label="ALGO" @click="alertClick" />
  </div>
</template>

<script>
export default {
  name: "MyButton",
  methods: {
    alertClick() {
      alert("algo");
    },
  },
};
</script>
