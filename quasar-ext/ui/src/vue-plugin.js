import MyButton from "./components/MyButton.vue";

const version = "0.0.1";

function install(app) {
  app.component("my-button", MyButton);
}

export { version, MyButton, install };
