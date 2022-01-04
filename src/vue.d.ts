import { Vue } from "vue-property-decorator";
import { QVueGlobals } from "quasar";

declare module "vue/types/vue" {
  interface Vue {
    $q: QVueGlobals;
  }
}
