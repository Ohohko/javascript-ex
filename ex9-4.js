const fun = (n) => {
    for(let i = 1; i <= n; i++){
        let step = "'";
        for(let j = 0; j < n; j++){
            if(j < i)
                step += "#";
            else
                step += " ";
        }
        step += "'";
        console.log(step);
    }
}

fun(4);