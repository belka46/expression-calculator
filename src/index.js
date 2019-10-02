/*function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let bracketsConfig = [['(',')']];
    if(check(expr, bracketsConfig)) {
        arrExpr = findBrackets(expr);
        arrExpr = findMult(arrExpr);
        arrExpr = findDiv(arrExpr);
        arrExpr = findAdd(arrExpr);
        arrExpr = findSub(arrExpr);
        return Number(arrExpr);
    }
    return "ExpressionError: Brackets must be paired";
}

function findBrackets(expr) {
    let arrExpr = expr.split(' ');
    let res = [];
    for (let i = 0; i < arrExpr.length; i++){
        if (arrExpr[i] == '('){
            let arrReverse = arrExpr.reverse();
            for (let j = 0; j < arrReverse.length; j++){
                if (arrReverse[j] == ')'){
                    for (let k = i + 1; k < j; k++){
                        res += arrReverse[k];
                    }
                    findBrackets(res);
                }
            }
        } else res.push(arrExpr[i]);
    }
    return res;

}

function findMult(expr) {
    let res = [];
    for (let i = 0; i < arrExpr.length; i++){
        if (arrExpr[i] == '*'){
            arrExpr[i] = String(Number(arrExpr[i-1]) * Number(arrExpr[i+1]));
            arrExpr.splice(i-1,1);
            arrExpr.splice(i,1);
            res.pop();
            res.push(arrExpr[i-1]);
            i--
        }else res.push(arrExpr[i]);
    }
    return res;
}

function findDiv(expr) {
    let res = [];
    for (let i = 0; i < arrExpr.length; i++){
        if (arrExpr[i] == '/'){
            arrExpr[i] = String(Number(arrExpr[i-1]) / Number(arrExpr[i+1]));
            arrExpr.splice(i-1,1);
            arrExpr.splice(i,1);
            res.pop();
            res.push(arrExpr[i-1]);
            i--
        }else res.push(arrExpr[i]);
    }
    return res;
}

function findAdd(expr) {
    let res = [];
    for (let i = 0; i < arrExpr.length; i++){
        if (arrExpr[i] == '+'){
            arrExpr[i] = String(Number(arrExpr[i-1]) + Number(arrExpr[i+1]));
            arrExpr.splice(i-1,1);
            arrExpr.splice(i,1);
            res.pop();
            res.push(arrExpr[i-1]);
            i--
        }else res.push(arrExpr[i]);
    }
    return res;

}

function findSub(expr) {
    let res = [];
    for (let i = 0; i < arrExpr.length; i++){
        if (arrExpr[i] == '-'){
            arrExpr[i] = String(Number(arrExpr[i-1]) - Number(arrExpr[i+1]));
            arrExpr.splice(i-1,1);
            arrExpr.splice(i,1);
            res.pop();
            res.push(arrExpr[i-1]);
            i--
        }else res.push(arrExpr[i]);
    }
    return res;

}

function check(str, bracketsConfig) {
    let config = bracketsConfig.toString();
    config = config.replace(/,/g, "");
    let control = 0;
    for (let char of str) {
        let index = config.indexOf(char);
        let test = index % 2;
        if (index == -1) {
            continue;
        } else if (test != 0) {
            control -= 1;
        } else {
            control += 1;
        }
        if (control >= 0) {
            continue;
        } else {
            return false;
        }
    }
    if (control != 0) return false;
    return true;
}

module.exports = {
    expressionCalculator
}*/

function expressionCalculator(expr) {
    let bracketsConfig = [['(',')']];
    if(check(expr, bracketsConfig)) {
        arrExpr = findBrackets(expr);
        arrExpr = findMult(arrExpr);
        arrExpr = findDiv(arrExpr);
        arrExpr = findAdd(arrExpr);
        arrExpr = findSub(arrExpr);
        return Number(arrExpr);
    }
    return "ExpressionError: Brackets must be paired";
}

function findBrackets(expr) {
    let arrExpr = expr.split(' ');
    let res = [];
    for (let i = 0; i < arrExpr.length; i++){
        if (arrExpr[i] == '('){
            let arrReverse = arrExpr.reverse();
            for (let j = 0; j < arrReverse.length; j++){
                if (arrReverse[j] == ')'){
                    for (let k = i + 1; k < j; k++){
                        res += arrReverse[k];
                    }
                    findBrackets(res);
                }
            }
        } else res.push(arrExpr[i]);
    }
    return res;

}

function findMult(expr) {
    let res = [];
    for (let i = 0; i < arrExpr.length; i++){
        if (arrExpr[i] == '*'){
            arrExpr[i] = String(Number(arrExpr[i-1]) * Number(arrExpr[i+1]));
            arrExpr.splice(i-1,1);
            arrExpr.splice(i,1);
            res.pop();
            res.push(arrExpr[i-1]);
            i--
        }else res.push(arrExpr[i]);
    }
    return res;
}

function findDiv(expr) {
    let res = [];
    for (let i = 0; i < arrExpr.length; i++){
        if (arrExpr[i] == '/'){
            arrExpr[i] = String(Number(arrExpr[i-1]) / Number(arrExpr[i+1]));
            arrExpr.splice(i-1,1);
            arrExpr.splice(i,1);
            res.pop();
            res.push(arrExpr[i-1]);
            i--
        }else res.push(arrExpr[i]);
    }
    return res;
}

function findAdd(expr) {
    let res = [];
    for (let i = 0; i < arrExpr.length; i++){
        if (arrExpr[i] == '+'){
            arrExpr[i] = String(Number(arrExpr[i-1]) + Number(arrExpr[i+1]));
            arrExpr.splice(i-1,1);
            arrExpr.splice(i,1);
            res.pop();
            res.push(arrExpr[i-1]);
            i--
        }else res.push(arrExpr[i]);
    }
    return res;

}

function findSub(expr) {
    let res = [];
    for (let i = 0; i < arrExpr.length; i++){
        if (arrExpr[i] == '-'){
            arrExpr[i] = String(Number(arrExpr[i-1]) - Number(arrExpr[i+1]));
            arrExpr.splice(i-1,1);
            arrExpr.splice(i,1);
            res.pop();
            res.push(arrExpr[i-1]);
            i--
        }else res.push(arrExpr[i]);
    }
    return res;
    
}

function check(str, bracketsConfig) {
    let config = bracketsConfig.toString();
    config = config.replace(/,/g, "");
    let control = 0;
    for (let char of str) {
        let index = config.indexOf(char);
        let test = index % 2;
        if (index == -1) {
            continue;
        } else if (test != 0) {
            control -= 1;
        } else {
            control += 1;
        }
        if (control >= 0) {
            continue;
        } else {
            return false;
        }
    }
    if (control != 0) return false;
    return true;
}
expressionCalculator("2-2");