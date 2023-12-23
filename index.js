var j=1;
	document.write("<div class='row container-fluid text-center'>")
	document.write("<div class='col-12 m-0 p-0'>");
	for(var i=1;i<=100;i++)
	{/*if for black dought */
	if(i==6 || i==11 || i==13 || i==15 || i==16 || i==18 || i==19|| i==21 || i==26  || i==31 || i==33 || i==35 || i==36 || i==38 || i==39 || i==41 || i==43 || i==44 || i==45 || i==50 || i==56 || i==58 || i==60 || i==62 || i==63 || i==64 || i==65 || i==66 || i==68 || i==70 || i==75 || i==82 || i==84 || i==86 || i==88 || i==89 || i==92 || i==94 || i==96 || i==98 || i==99){
			document.write("<input text='' class='col-1  border input-control m-0 p-0'  readonly disable  style='font-size:25px;background:black;' />")
				if(i%10==0) document.write("</div> \
					<div class='col-12 m-0 p-0'>")
				continue;
				}/*if for which number text you enter */
			if(i==1 || i==2  || i==4 || i==7  || i==10 || i==22  || i==27  || i==46 || i==49 || i==51  || i==71  || i==73|| i==76  || i==80  || i==85)
			{
				document.write("<span style='z-index:0;position:absolute;font-size:20px'>"+j+"</span><input text='' onkeyup='keyvalue("+(i-1)+")' class='col-1 input-control border m-0 p-0 ' style='font-size:25px;' />")
				j++;
				if(i%10==0) document.write("</div> \
					<div class='col-12 m-0 p-0'>")
				continue;
			}
			/*for input text */
		document.write("<input text='' onkeyup='keyvalue("+(i-1)+")' class='col-1 input-control  border m-0 p-0' style='font-size:25px;' />")
		if(i%10==0 ) document.write("</div> \
			<div class='col-12 m-0 p-0'>")
	}
		
document.write("<div class='row mt-3'>\
	<div class='col-12 text-start  col-lg-6'>\
		<p class='bg-warning text-danger border-info'>\
			<b class='text-success h3'> left to right</b></br>\
			1.a fruit name it color is red.(5)</br>\
			4.open with key.(4)</br>\
			6.beloing a time before the persent.(4)</br>\
			7.which float over the water for treavel human.(4)</br>\
			8.who provid enviormet oxyzen(4)</br>\
			10.a fruit its call king of fruits(5) </br>\
			11.smell orgens(4)</br>\
			13.south opposite(5) </br></br>\
		</P>\
	</div>\
	<div class='col-12 col-lg-6 text-start'>\
		<p  class='bg-dark text-light border-info'>\
			<b class='text-primary h3'> up to down </b> </br>\
			2.a fruit name it seeds similar to black pepper.(6) </br>\
			3.MISSING Synonyms(4) </br>\
			4.science an area way do the expriment(10) </br>\
			5.a paper follow with wind(4) </br>\
			9.to correct, revise, and prepare for publication(4) </br>\
			10.generally accepted as payment.medium of exchange(5) </br>\
			12.used as a polite way of speaking to a man.(3) </br>\
			14.cold opposite (3)</br> \
			15.off oppsoite(2) </br>\
		</p>\
	</div></div>\
</div></div>");
var keys={
a:[0,11,16,22,28,31,51,56,],
b:[26,],
c:[8,],
d:[58,],
e:[4,39,47,48,73,80],
g:[53,],
h:[79,88],
i:[19,68,82,91],
k:[9,],
l:[3,6,],
m:[50,],
n:[52,70,75,94],
o:[7,13,27,36,54,60,71,76,84,89],
p:[1,2,21,],
s:[23,72,],
t:[24,29,33,45,66,78,87,99],
y:[41,90,96,],
r:[46,77,86,92,],
}

function keyvalue(a) {
	var x = document.getElementsByTagName('input');
	text=x[a].value;
	text = text.slice(-1);
	x[a].value=text;
//console.log(x[a].value.length)//splice kar ke last value lini hai 
		l1:for(var i in keys)
		{
		if(x[a].value==i)
		{
			for(var j of keys[i])
			{
				if(a==j) 
				{  x[a].style.background="green";
					break l1;
				}
				else{
					x[a].style.background="red";
				}
			}
		}
		else{
			x[a].style.background="red";
		}
	}
}
