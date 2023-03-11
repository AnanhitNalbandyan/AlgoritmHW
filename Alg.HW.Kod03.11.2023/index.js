function hanoiTauer(q,from,to,buf){
    if(q === 1){
        console.log(`Move disk 1 from ${from} to ${to} <br>`);

    }else{ 
        hanoiTauer(q-1,from, buf, to);
        console.log(`Move disk ${q} from ${from} to ${to} <br>`);
        hanoiTauer( q-1, buf, to, from);
    
    }
}
    hanoiTauer(6, 1,2,3,4);



