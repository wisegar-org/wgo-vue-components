import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class MyButtom extends Vue {
  onButtonClick() {
    alert("I'm your Buttom!");
  }
}
