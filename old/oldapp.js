myData = {
    row1: [{
        q122: '',
        q222: '',
        q322: 'New Goal Submissions',
        q422: 'HLMD',
        q123: '',
        q223: 'TED',
        q323: 'New Goal Submissions',
        q423: 'TED',
        q124: 'New Goal Submissions',
        q224: 'TED',
        q324: 'New Goal Submissions',
        q424: 'TED',
        q125: 'New Goal Submissions',
        q225: 'TED',
        q325: 'New Goal Submissions',
        q425: 'TED'
    }],
    row2: [{
        q122: '',
        q222: '',
        q322: 'New Goal Submissions',
        q422: 'HLMD',
        q123: '',
        q223: 'TED',
        q323: 'New Goal Submissions',
        q423: 'TED',
        q124: 'New Goal Submissions',
        q224: 'TED',
        q324: 'New Goal Submissions',
        q424: 'TED',
        q125: 'New Goal Submissions',
        q225: 'TED',
        q325: 'New Goal Submissions',
        q425: 'TED'
    }],
}

// table = document.getElementById('post_2025_climate');

// //rows
// for (i = 0; i < table.rows.length; i++) {
//     for (j = 0; j < table.rows[i].cells.length; j++) {
//         table.rows[i].cell[j].innerHTML = myData[i][j];
//     }
// }



// buildTable(myData);

// function buildTable(data) {
//     var table = document.getElementById('post_2025_climate')
//     for (var i = 0; i < data.length; i++) {
//         var row = `<tr>
//                         <td>${data[i]}</td>
//                     <tr>`
//         table.innerHTML += row;
//     }
}

buildTable();

function buildTable(data) {
    var table = document.getElementById('post_2025_climate')
    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
           <td rowspan=${data[i].rowspan}>${data[i].name}</td>
                        <td>${data[i].row1[i].q122}</td>
                        <td>${data[i].row1[i].q222}</td>
                        <td>${data[i].row1[i].q322}</td>
                        <td>${data[i].row1[i].q422}</td>
                        <td>${data[i].row1[i].q123}</td>
                        <td>${data[i].row1[i].q223}</td>
                        <td>${data[i].row1[i].q323}</td>
                        <td>${data[i].row1[i].q423}</td>
                        <td>${data[i].row1[i].q124}</td>
                        <td>${data[i].row1[i].q224}</td>
                        <td>${data[i].row1[i].q324}</td>
                        <td>${data[i].row1[i].q424}</td>
                        <td>${data[i].row1[i].q125}</td>
                        <td>${data[i].row1[i].q225}</td>
                        <td>${data[i].row1[i].q325}</td>
                        <td>${data[i].row1[i].q425}</td>
                    <tr>`
        table.innerHTML += row;
    }
}


// data = {
//     rowspan: 6,
//     name: 'Post-2025 Climate Finance Goal',
//     row1: [{
//         q322: 'New Goal Submissions',
//         q422: 'HLMD'
//     }],
//     row2: [{
//         q323: 'New Goal Submissions',
//         q423: 'TED',
//     }],
// }


// let result = '';
// for (x in data) {
//   if (x.indexOf('row')==0) {
//     result += `<tr>`
//     data[x].forEach(y => {
//       result += `<td>${y.data[x]}</td>`
//     }
//     result += `</tr>`
//       )}
// }
// document.getElementById('post_2025_climate').innerHTML = result;






// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//     return new bootstrap.Tooltip(tooltipTriggerEl)
// })

// const data = document.getElementsByTagName('td').;
// for (let td of data){
//     td.outerText = 'Test here'
// }



var myArray = [{
        rowspan: 6,
        name: 'Post-2025 Climate Finance Goal',
        row1: [{
            q122: '',
            q222: '',
            q322: 'New Goal Submissions',
            q422: 'HLMD',
            q123: '',
            q223: 'TED',
            q323: 'New Goal Submissions',
            q423: 'TED',
            q124: 'New Goal Submissions',
            q224: 'TED',
            q324: 'New Goal Submissions',
            q424: 'TED',
            q125: 'New Goal Submissions',
            q225: 'TED',
            q325: 'New Goal Submissions',
            q425: 'TED'
        }],
        row2: [{
            q122: 'TED',
            q222: '',
            q322: 'TED',
            q422: 'HLMD',
            q123: '',
            q223: 'TED',
            q323: 'New Goal Submissions',
            q423: 'TED',
            q124: 'New Goal Submissions',
            q224: 'TED',
            q324: 'New Goal Submissions',
            q424: 'TED',
            q125: 'New Goal Submissions',
            q225: 'TED',
            q325: 'New Goal Submissions',
            q425: 'TED'
        }]
    },

]




// document.querySelector('h1').innerText = array.data[name];


// categories: [
//         {
//           name: "Tenderness",
//           id: "tenderness",
//           description:
//             "Heirloom biodiesel quinoa mlkshk asymmetrical master cleanse affogato blog marfa chillwave semiotics gastropub",
//           imgUrl: "",
//           options: [
//             {
//               label: "Crunchy",
//               value: "crunchy",
//               imgUrl: "",
//             },
//             {
//               label: "Soft",
//               value: "soft",
//               imgUrl: "",
//             },
//           ],
//         }
//     ]

//  var array = [
//                 ["A1", "B1", "C1"],
//                 ["A2", "", "C2"],
//                 ["A3", "B3", "C3"],
//                 ["A4", "B4", "C4"],
//                 ["A5", "B5", "C5"],
//                 ["A1", "B1", "C1"],
//                 ["A2", "B2", "C2"],
//                 ["A3", "B3", "C3"],
//                 ["A4", "B4", "C4"],
//                 ["A5", "B5", "C5"]
//             ],
//             table = document.getElementById("table");

//         for (var i = 0; i < array.length; i++) {
//             // create a new row
//             var newRow = table.insertRow(table.length);
//             for (var j = 0; j < array[i].length; j++) {
//                 // create a new cell
//                 var cell = newRow.insertCell(j);

//                 // add value to the cell
//                 cell.innerHTML = array[i][j];
//             }
//         }