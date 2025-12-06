//Initializing datatable
const dataTable = new simpleDatatables.DataTable('#datatable', {
    searchable: true,
    fixedHeight: true,
    data: {
        headings: ['id', 'title', 'year'],
    }
})

fetch('/api/movies')
.then(res=> res.json())
.then(data => {
    dataTable.rows().add(data.data)
})