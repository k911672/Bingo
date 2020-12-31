'use strict'

{   
    function createColumn(col) {
        const source = [];
    
        for (let i = 0; i < 15; i++){
            //1...15
            // source[i] = i + 1 + 15 * 0;
            //16...30
            // source[i] = i + 1 + 15 * 1;
            //31...45
            // source[i] = i + 1 + 15 * 2;
            source[i] = i + 1 + 15 * col;
        }
        
        const column = [];
        

        for(let i = 0; i < 5; i++){
            //sourceから値を取り出し、bに入れている。spliceの返り値は配列で取り出されるため、[0]で返り値の配列から値を取り出している。
            column[i] = source.splice(Math.floor(Math.random()*source.length),1)[0]
        }
        
        //columns[i]に値を返さないといけないため
        return column;
    }

    
    function createColumns(){
        const columns = [];
        for (let i = 0; i < 5; i++){
            columns[i] = createColumn(i);
        }
        columns[2][2] = 'FREE';
        return columns;
    }

    // function createBingo(columns){
    //     const bingo = [];
    //     for (let row = 0; row < 5; row++){
    //         bingo [row] = [];
    //         for (let col = 0; col < 5; col++){
    //             //bingoとcolumnでcol,rowが反対になっている。⇨列と行が反転する。
    //             bingo[row][col] = columns[col][row];
    //         }
    //     }
    //     return bingo;
    // }
    //↓↓bingo[][]を[col][row]の順番にするだけで順番入れ替わるので上の記述は省略できる。

    function renderBingo(bingo){
        for(let row = 0; row < 5; row++){
            //動的なHTMLを書く場合、下記のように要素ごとJSで作成して、可変値を別で作る。
            const tr = document.createElement('tr')
            for(let col = 0; col < 5; col++){
                const td = document.createElement('td')
                // td.textContent = bingo[row][col];
                td.textContent = bingo[col][row];
                tr.appendChild(td);
            }
            document.querySelector('tbody').appendChild(tr);
        }
    }
    
    const columns = createColumns();
    // const bingo = createBingo(columns);
    // renderBingo(bingo);
    renderBingo(columns);
    

}


//まとめ、
//①最後はfunctionで役割ごとにまとめる方がわかりやすい。
//②いらない記述はけす。
//③複数の値から、選択した値を出力する場合splice()が使える。