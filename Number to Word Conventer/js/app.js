function numberToEnglish( n ) {
        
    var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words, and = 'and';
    string = string.replace(/[, ]/g,"");
    if( parseInt( string ) === 0 ) {
        return 'sıfır';
    }
    
    units = [ '', 'bir', 'iki', 'üç', 'dörd', 'beş', 'altı', 'yeddi', 'səkkiz', 'doqquz', 'on','on bir','on iki','on üç','on dörd','on beş','on altı','on yeddi','on səkkiz','on doqquz'];
    tens = [ '', '', 'iyirmi', 'otuz', 'qırx', 'əlli', 'altmış', 'yetmiş', 'səksən', 'doxsan' ];
    scales = [ '', 'min', 'milyon', 'milyard', 'trilyon'];
    start = string.length;
    chunks = [];
    while( start > 0 ) {
        end = start;
        chunks.push( string.slice( ( start = Math.max( 0, start - 3 ) ), end ) );
    }
        chunksLen = chunks.length;
    if( chunksLen > scales.length ) {
        return '';
    }
        words = [];
    for( i = 0; i < chunksLen; i++ ) {  
        chunk = parseInt( chunks[i] );
        if( chunk ) { 
            ints = chunks[i].split( '' ).reverse().map( parseFloat );
            if( ints[1] === 1 ) {
                ints[0] += 10;
            }
            if( ( word = scales[i] ) ) {
                words.push( word );
            }
            if( ( word = units[ ints[0] ] ) ) {
                words.push( word );
            }
            if( ( word = tens[ ints[1] ] ) ) {
                words.push( word );
            }
            if( ints[0] || ints[1] ) {
            }
            if( ( word = units[ ints[2] ] ) ) {
                words.push( word + ' yüz' );
            }
        }
    }    return words.reverse().join( ' ' );
}

let input_value = document.querySelector("input");
let written_text = document.querySelector("h1");
let words = document.querySelector("h3");
input_value.addEventListener("keyup",() =>{
    written_text.innerHTML = input_value.value;
   words.innerHTML = numberToEnglish(Number(written_text.innerHTML));
    if(input_value.value.length >= 15 ){
        input_value.value = ""
    }
    if(input_value.value == "" ){
        document.querySelector("h3").innerHTML = ""
    }
})
input_value.addEventListener("change",() =>{
    written_text.innerHTML = input_value.value;
   words.innerHTML = numberToEnglish(Number(written_text.innerHTML));
    if(input_value.value.length >= 15 ){
        input_value.value = ""
    }
    if(input_value.value == "" ){
        document.querySelector("h3").innerHTML = ""
    }
})
document.querySelector(".increase").addEventListener("click",() => {input_value.value++; written_text.innerHTML = input_value.value;words.innerHTML = numberToEnglish(Number(written_text.innerHTML))})
document.querySelector(".decrease").addEventListener("click",() => {input_value.value--; written_text.innerHTML = input_value.value;words.innerHTML = numberToEnglish(Number(written_text.innerHTML))})
  
