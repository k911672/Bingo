'use strict'

{   
    //1-15,16-30,31-45,46-60,61-75整数値の準備、縦列の数値の準備
    function createColumn(col) {
        const source = [];
        for (let i = 0; i < 15; i++){
            source[i] = i + 1 + 15 * col;
        }
        const column = [];
        for(let i = 0; i < 5; i++){
            column[i] = source.splice(Math.floor(Math.random()*source.length),1)[0]
        }
        return column;
    }

    //縦列を並べた（横一列ずつになっているので、反転させてなければならない）
    function createColumns(){
        const columns = [];
        for (let i = 0; i < 5; i++){
            columns[i] = createColumn(i);
        }
        columns[2][2] = 'FREE';
        return columns;
    }

    //HTMLへの反映、横列を縦列に反転。
    function renderBingo(bingo){
        for(let row = 0; row < 5; row++){
            const tr = document.createElement('tr')
            for(let col = 0; col < 5; col++){
                const td = document.createElement('td');
                td.textContent = bingo[col][row];
                tr.appendChild(td);
            }
            document.querySelector('tbody').appendChild(tr);
        }
    }
    
    //それぞれの関数の継承と、出力。
    const columns = createColumns();
    renderBingo(columns);
}

