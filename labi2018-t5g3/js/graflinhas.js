function desenhaGrafico() {
$("#graflinhas").highcharts({
title: {
text: "Média de lançamentos de foguetões",
},
xAxis: {
categories: ["1960", "1965", "1970", "1975", "1980", "1985",
"1990", "1995", "2000", "2005", "2010"]
},
series: [{
name: "Lançamentos sucedidos",
data: [111, 119, 125, 117, 102, 86, 69, 58, 62, 78, 82]
},{
name: "Lançamentos falhados",
data: [13,14,3,3,7,3,4,1,5,6,2]
},{
name: "Lançamentos parcialmente falhados",
data: [7,1,3,6,1,2,4,0,0,0,1]
}]
});
};
