export default {
  /**
   * install function
   * @param  {Vue} Vue
   */
  install: function (Vue) {
    Vue.directive('stick-in-parent', {
      bind: function(el, binding) {
        window.jQuery = window.jQuery || require('jquery');
        require('sticky-kit/dist/sticky-kit.js');
        jQuery(document).ready(function () {
          var sticky = binding.value || {};
          var options = sticky.options || {};
          var events = sticky.on || {};
          jQuery(el).stick_in_parent(options);
          for(var i in events) {
            jQuery(el).on(i, events[i]);
          }
        });
      }
    })
  }
}

