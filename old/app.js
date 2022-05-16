const newtest = [{
        name: 'post 2025',
        description: 'something here',
        row1: {
            q1_2022: 'New Goal Submissions',
            q2_2022: '',
            q3_2022: 'New Goal Submissions',
            q4_2022: 'HLMD'
        },
        row2: {
            q1_2022: '',
            q2_2022: '',
            q3_2022: 'New Goal Submissions',
            q4_2022: 'HLMD'
        },
        row1: {
            q1_2022: '',
            q2_2022: '',
            q3_2022: '',
            q4_2022: 'TED'
        }
    },
    {
        name: 'climate',
        description: 'something here',
        row1: {
            q1_2022: '9.5 summary of HLMD',
            q2_2022: '',
            q3_2022: 'Final electronic reporting tools',
            q4_2022: 'NCQG Deliberation'
        },
        row2: {
            q1_2022: 'NCQG Deliberation',
            q2_2022: '',
            q3_2022: '9.5 summary of HLMD',
            q4_2022: 'HLMD'
        },
        
    }
]

buildTable(newtest);
function buildTable(data) {
    var table = document.getElementById('post_2025_climate')

    for (var i = 0; i < data.length; i++) {
        console.log(data[i].row1)

        var cell = `<td>${data[i]}</td>`
        table.innerHTML += cell;
    }
}




