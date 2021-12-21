import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class MyButton extends Vue {
  onButtonClick() {
    alert("I'm your ButtoN!");
  }
}
