var forbes=(function(a){if(typeof a.initialized=="undefined"){a.initialized=false}a.bootstrap=(function(){var e=[];function c(){if(a.initialized){return false}for(var f=0;f<e.length;f++){e[f]()}a.initialized=true}function b(f){e.push(f)}function d(f){b(function(){$(f.selector).html(f.json)})}return{init:c,register:b,docwrite:d}}());return a}(forbes||{}));