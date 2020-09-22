
var data = [
  {
    "candidateName": "Alexandra Lúgaro",
    "candidateImage": "img/lugaro.jpg",
    "candidateInfo": ""
  },
  {
    "candidateName": "Juan Dalmau",
    "candidateImage": "img/dalmau.jpg",
    "candidateInfo": ""
  }
]

var container = $('#candidatos');

// $.getJSON('candidatos.json', function (data) {
//   $.each(data, function (i, doc) {

//     // Let's create the DOM
//     var item = $('<div>').addClass('item'),
//       title = $('<h1>'),
//       info = $('<p>'),
//       link = $('<a>');

//     // Add content to the DOM
//     link.attr('href', doc.candidateInfo)
//       .text(doc.candidateName)
//       .appendTo(title);

//     info.text(doc.candidateInfo);

//     // Append the infos to the item
//     item.append(title, info);

//     // Append the item to the container
//     item.appendTo(container);
//   });
// });