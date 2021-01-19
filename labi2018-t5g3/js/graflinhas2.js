function desenhaGrafico() {

Highcharts.chart('graflinhas2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Astronautas e as suas Nacionalidades'
    },
    subtitle: {
        text: 'Source: <a href="https://pt.wikipedia.org/wiki/Lista_de_astronautas">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Astronautas(quantidade)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Astronautas: <b>{point.y:.1f} </b>'
    },
    series: [{
        name: 'Astronautas',
        data: [
            ['Estados Unidos', 338],
            ['União Soviética', 73],
            ['Rússia', 48],
            ['Alemanha', 11],
            ['Japão', 11],
            ['China', 11],
            ['França', 10],
            ['Canadá', 9],
            ['Itália', 7],
            ['Bulgária', 2],
            ['Países Baixos', 2],
            ['Bélgica', 2],
            ['Grã-Bretanha', 2],
            ['República Checa', 1],
            ['Polónia', 1],
            ['Hungria', 1],
            ['Vietnam', 1],
            ['Cuba', 1],
            ['Mongólia', 1],
            ['Roménia', 1],
            ['Índia', 1],
            ['Arábia Saudita', 1],
            ['México', 1],
            ['Síria', 1],
            ['Afeganistão', 1],
            ['Ucrânia', 1],
            ['Aústria', 1],
            ['Suíça', 1],
            ['Espanha', 1],
            ['Eslováquia', 1],
            ['África do Sul', 1],
            ['Israel', 1],
            ['Brasil', 1],
            ['Suécia', 1],
            ['Malásia', 1],
            ['Coreia do Sul', 1],
            ['Cazaquistão', 1],
            ['Dinamarca', 1]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
}
