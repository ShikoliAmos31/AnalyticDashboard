//Initializing datatable
const dataTable = new simpleDatatables.DataTable('#datatable', {
    searchable: true,
    fixedHeight: true,
    data: {
        headings: ['video title', 'Published Data', 'Views Count'],
    }
})


dataTable.rows.add([
    ["Top 10 vs shortcuts", "15-11-2022", '451234'],
    ["Django basics tutorial", "5-01-2021", '451234'],
    ["How to instaal python", "12-01-2020", '451234'],
    ["##############", "15-11-2022", '451234'],
    ["##############", "5-09-2021", '451234'],
    ["##############", "12-01-2020", '451234'],
    ["##############", "15-11-2022", '451234'],
    ["##############", "5-09-2021", '451234'],
    ["##############", "12-01-2022", '451234'],
    ["##############", "15-11-2022", '451234'],
    ["##############", "5-01-2020", '451234'],
])