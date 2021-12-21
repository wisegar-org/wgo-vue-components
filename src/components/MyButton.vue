<template>
  <div>
    <q-btn label="BUTTON" @click="alertClick" />
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
