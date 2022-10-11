'use strict'

// DataTable Imports
import 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';

//Mobile sidebar toggle
document.querySelector(".nav-toggle").addEventListener('click', () => {
  var element = document.getElementById("mainContainer");
  element.classList.toggle("isActive");
})

//Datatable
$(document).ready(function () {
  $('#searchResultTable').DataTable({
    "bPaginate": false,
    "bFilter": false,
    "bInfo": false
  });
});
