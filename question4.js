// print all number from 1 to 50 but skip the numbers fro m 20 to 30.


for(let i=1;i<=50;i++){
    if(20<i && 30>i){
        continue;
    }
    console.log(i);
}