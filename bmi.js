
var height = 160.02 / 100;
var weight = 65;
var bmi = weight / (height ** 2);

console.log(bmi);  //bmi point

//bmi title

if (bmi < 18.5){
    console.log('you are under weight');
}
else if (bmi >= 18.5 && bmi <= 24.9){
    console.log( 'you are normal');
}
else if( bmi >= 25 && bmi <= 29.9){
    console.log('you are over weight')
}
else{
    console.log('you are obese')
}