// var myArray = [{
//         name: 'Post-2025 Climate Finance Goal',
//         other: '30',
//         row1: [{
//             q1: 'New Goal Submissions',
//             q2: 'TED',
//             q3: 'New Goal Submissions '
//         }],
//         row2: [{
//             q1: 'New Goal Submissions',
//             q2: 'TED',
//             q3: 'New Goal Submissions '
//         },]
//         row3: [{
//             q1: 'New Goal Submissions',
//             q2: 'TED',
//             q3: 'New Goal Submissions '
//         }]
//     },
// }
// ]

// buildTable(myArray)

// function buildTable(data) {
//     var table = document.getElementById('post_2025_climate')

//     for (var i = 0; i < data.length; i++) {

//         var row = `<tr>
// 					    <td>${data[i].name}</td>`
//         table.innerHTML += row;

//         for (var j = 0; j < data.length; j++) {
//             var cell = `<td>${data[i].row1[i]}</td> 
//             </tr>`
//             table.innerHTML += cell;
//         }


//     }
// }

const data = [{
        members: [
        {
            name: 'Post-2025 Climate Finance Goal',
            age: 39,
            secretIdentity: 'Jane Wilson',
            powers: ['Million tonne punch', 'Damage resistance', 'Superhuman reflexes']
        }]
    }
    //, {}
]

const table = document.getElementById('post_2025_climate');

data.forEach(squad => {
    squad.members.forEach(hero => {
        const tr = document.createElement("tr")
        const nameTd = document.createElement("td")
        nameTd.append(hero.name)
        const ageTd = document.createElement("td")
        ageTd.append(hero.age)
        const secretTd = document.createElement("td")
        secretTd.append(hero.secretIdentity)
        const powersTd = document.createElement("td")
        powersTd.append(hero.powers.join(', '))

        tr.append(nameTd)
        tr.append(ageTd)
        tr.append(secretTd)
        tr.append(powersTd)

        table.append(tr)
    })
})