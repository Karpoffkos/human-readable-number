module.exports = function toReadable (number) {
   

    let low20 = ["ziro", "one", "two","three","four","five","six","seven","eight","nine", 'ten', 'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let decade= [0, 0, "twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    let single = number%10;
    let hundred = Math.floor(number/100);
/*     console.log(single, low20[single], 8);
    console.log(hundred,  9); */
    if (number < 20){ 
    /*     console.log(11); */
        return low20[number] };
    if (number < 100){ 
       /*  console.log(14); */
        return single ? (decade[Math.floor(number/10)] + " " + low20[single])  : decade[Math.floor(number/10)]};
    if (number < 1000){ 
      /*   console.log(17); */
        return low20[hundred] + "hundred"+ toReadable(number%100)}; 
     
   
}
