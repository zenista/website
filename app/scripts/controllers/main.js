'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.items = [
  		{
  			  title: 'ClarityScripts.com'
  			, slug: 'Online Transcription Service'
  			, img: '/images/showcase/clarityscripts.png'
  			, href: 'www.clarityscripts.com'
  		},
  		{
  			  title: 'Law Office of Douglas A. Goss'
  			, slug: 'Upgraded from ColdFusion to PHP'
  			, img: '/images/showcase/douggosslaw.png'
  			, href: 'www.douggosslaw.com'
  		},
  		{
  			  title: 'PunjabiDictionary.org'
  			, slug: 'Online Dictionary for Punjabi Language'
  			, img: '/images/showcase/punjabidictionary.png'
  			, href: 'www.punjabidictionary.org'
  		},
  		{
  			  title: 'PolarMarkers.com'
  			, slug: 'An E-Commerce Website for selling polarmarkers'
  			, img: '/images/showcase/polarmarkers.png'
  			, href: 'www.polarmarkers.com'
  		},
  		{
  			  title: 'Flash to HTML5'
  			, slug: 'A proof-of-concept for a Flash website, to demo HTML5 conversion.'
  			, img: '/images/showcase/flash-to-html5.png'
  			, href: 'www.kadoo.in/readfasteronline/'
  		},
  		{
  			  title: 'AasthaHomeStay.com'
  			, slug: 'Website for Travel & Tourism'
  			, img: '/images/showcase/aasthahomestay.png'
  			, href: 'www.aasthahomestay.com'
  		},
  		{
  			  title: 'ModernHomeStay.com'
  			, slug: 'Website for Travel & Tourism'
  			, img: '/images/showcase/modernhomestay.png'
  			, href: 'www.modernhomestay.com'
  		},
  		{
  			  title: 'The Guard'
  			, slug: 'A HTML5 Javascript Action Game'
  			, img: '/images/showcase/theguard.png'
  			, href: 'www.kadoo.in/the-guard/'
  		},
  		{
  			  title: 'Url Builder'
  			, slug: 'An AngularJs clone of Google\'s URL Builder'
  			, img: '/images/showcase/angularjs-url-builder.png'
  			, href: 'www.kadoo.in/webapp'
  		}
  	];
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
