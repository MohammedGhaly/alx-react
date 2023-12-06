import _ from 'lodash';
import $ from 'jquery';
import '../css/main.css';

// appending elements to the body
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

// updating the counter when a button is clicked
let conunt = 0;

function updateCounter() {
  count++;
  $("#count").html(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));
