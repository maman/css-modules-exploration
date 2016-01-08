import angular from 'angular';
import styles from './actionButton.style.css';

angular.module('angularCssModules', [])
.directive('actionButton', function() {
  return {
    scope: {
      styles,
      type: '@'
    },
    template: require('./actionButton.template.html')
  };
});
