function checkCashRegister(price, cash, cid) {
  let change={
    status:"OPEN",
    change:[]
  };
  let vuelto=cash-price;
  var t_mon={
    "PENNY":0.01,
    "NICKEL":0.05,
    "DIME":0.1,
    "QUARTER":0.25,
    "ONE":1,
    "FIVE":5,
    "TEN":10,
    "TWENTY":20,
    "ONE HUNDRED":100
  };
  let tot_caja=0;
  for (let j=0;j<cid.length; j++){
    tot_caja+=cid[j][1];
  }
  if(tot_caja==vuelto){
    return {
      status:"CLOSED",
      change:cid
    };
  }
  for(let i=0;i<cid.length;i++){
    var monto=cid[cid.length-1-i][1];
    var valor=t_mon[cid[cid.length-1-i][0]];

    if (vuelto>=valor &&monto!==0){
      let c_cambio= Math.min(monto/valor, Math.trunc(vuelto/valor));
      change.change.push([cid[cid.length-1-i][0],c_cambio*valor]);
      vuelto= Math.round(100*(vuelto- c_cambio*valor))/100;
}
  }
  if(vuelto!=0){
    change.status="INSUFFICIENT_FUNDS";
    change.change=[];
  }
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);