/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendConf(conf: any) {
  // make sure my-component boot file is registered
  conf.boot.push(
    "~@wisegar-org/quasar-app-extension-wgo-vue-components/src/boot/register.js"
  );

  // make sure boot & component files get transpiled
  conf.src.transpileDependencies.push(
    /@wisegar-org\/quasar-app-extension-wgo-vue-components[\\/]src/
  );

  // make sure my-component css goes through webpack to avoid ssr issues
  // conf.css.push(
  //   "~@wisegar-org/quasar-app-extension-wgo-vue-components/src/component/MyComponent.sass"
  // );
}

module.exports = function (api: any) {
  //
  // (Optional!)
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app" CLI
  api.compatibleWith("quasar", "^1.0.0");
  api.compatibleWith("@quasar/app", "^2.0.0");

  // Here we extend /quasar.conf.js, so we can add
  // a boot file which registers our new UI component;
  // "extendConf" will be defined below (keep reading the tutorial)
  api.extendQuasarConf(extendConf);
};
