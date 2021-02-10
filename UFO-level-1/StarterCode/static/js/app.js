// from data.js
var tableData = data;

// YOUR CODE HERE!
const createTable=function(data){
    const table = document.createElement("table");
    const header = document.createElement("tr");
    const keys=Object.keys(data[0])
    console.log(keys)
    // for(const key of keys){
    //     const th=document.createElement("th");
    //     th.appendChild(document.createTextNode(key));
    //     header.appendChild(th);
    // }
    // table.appendChild(header);
    // const len=data.length
    for(const row of data) {
        const tr = document.createElement("tr");
        for(const key of keys){
            const td = document.createElement("td");
            const content=row[key] ||''
            td.appendChild(document.createTextNode(content));
            tr.appendChild(td);
            delete row[key]
        }
      /****
      you can omit next cycle if all object have the same structor or if the first element of collection have all fields
      ****/
        for(const key in  row){
            const th=document.createElement("th");
            th.appendChild(document.createTextNode(key))
            keys.push(key)
            header.appendChild(th);
            const td = document.createElement("td");
            const content=row[key] ||''
            td.appendChild(document.createTextNode(content));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table    
    
}


const table=createTable(data)
document.getElementById("table-area").appendChild(table);
//document.getElementsByClassName("").appendChild(table);
