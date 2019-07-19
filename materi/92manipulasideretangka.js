
function deretAngka(n) {
    var hasilDeretAngka = ''
    for (var i = 1; i <= n; i++) {
      if (i % 3 === 0) {
        hasilDeretAngka += 'NIO '
      } else if (i % 5 === 0) {
        hasilDeretAngka += 'MIC '
      } else {
        hasilDeretAngka += i+' '
      }
    }
    return hasilDeretAngka
   }
   
   
   console.log(deretAngka(10))
   // 1 2 NIO 4 MIC NIO 7 8 NIO MIC
   console.log(deretAngka(20))
   // 1 2 NIO 4 MIC NIO 7 8 NIO MIC 11 NIO 13 14 NIO 16 17 NIO 19 MIC
   console.log(deretAngka(30))
   // 1 2 NIO 4 MIC NIO 7 8 NIO MIC 11 NIO 13 14 NIO 16 17 NIO 19 MIC NIO 22 23 NIO MIC 26 NIO 28 29 NIO


   