/*!
 * Vue-Stickykit.js v1.0.2
 * (c) 2018 Imfaber <imfaberdev@gmail.com>
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueStickykit = factory());
}(this, (function () { 'use strict';

var index = {
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
          for (var i in events) {
            jQuery(el).on(i, events[i]);
          }
        });
      }
    });
  }
};

return index;

})));
