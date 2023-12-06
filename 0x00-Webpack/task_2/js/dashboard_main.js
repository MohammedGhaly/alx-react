import _ from 'lodash';
import $ from 'jquery';
import '../css/main.css';

// appending elements to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// updating the counter when a button is clicked
let conunt = 0;

function updateCounter() {
  count++;
  $("#count").html(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));
