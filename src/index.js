export default {
  /**
   * install function
   * @param  {Vue} Vue
   */
  install: function (Vue) {
    Vue.directive('stick-in-parent', {
      bind (el, binding) {
        window.jQuery = require('jquery');
        require('sticky-kit/dist/sticky-kit.js');
        jQuery(document).ready(function () {
          jQuery(el).stick_in_parent(binding.value);
        });
      }
    })
  }
}

