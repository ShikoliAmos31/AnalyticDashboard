const totalViewChart = document.getElementById('total-views-chart');
const revenueChart = document.getElementById('revenue-chart');
const growthRateChart = document.getElementById('growth-rate-chart');
const subscriberCountChart = document.getElementById('subscriber-count');
const trafficSourcesElement = document.getElementById('traffic-sources')
const datatable = document.getElementById('datatable')


fetch('/api/total-views')
.then(res => res.json())
.then(data => {
    new Chart(totalViewChart,{
    type: 'line',
    data: {
        labels: data.labels,
        datasets: [{
        label: '# of votes',
        data: data.data,
        borderWidth: 1
    }]
},
options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
},
})

new Chart(revenueChart,{
    type: 'line',
    data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [{
        label: '# of votes',
        data: [255, 240, 290, 179, 512, 580],
        borderWidth: 1
    }]
},
options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
},
})
})




const subscriberCount = new Chart(subscriberCountChart,{
    type: 'line',
    data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [{
        label: '# of votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
    }]
},
options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
},
})


const trafficSourcesChart = new Chart(trafficSourcesElement,{
    type: 'pie',
    data: {
        labels: ['Youtube', 'Facebook', 'Snapchat', 'Google', 'Firefox', 'Opera'],
        datasets: [{
        label: '# of shares',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
    }]
},
options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
},
})


//Initializing datatable
const dataTable = new simpleDatatables.DataTable('#datatable', {
    searchable: true,
    fixedHeight: true,
    data: {
        headings: ['video title', 'Published Data', 'Views Count'],
    }
})

fetch('/api/datatable-api')
.then(res => res.json())
.then(data => {
    dataTable.rows.add(data.data)
})
