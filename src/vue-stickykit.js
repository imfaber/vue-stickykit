import Vue from 'vue'
import $ from 'jquery'

export default {
  /**
   * install function
   * @param  {Vue} Vue
   */
  install (Vue) {
    Vue.directive('stick-in-parent', {
      bind (el, binding) {
        window.jQuery = $
        require('sticky-kit/dist/sticky-kit.js')
        $(document).ready(function() {
          $(el).stick_in_parent(binding.value)
        })
      }
    })
  }
}

