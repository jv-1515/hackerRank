function avaliarNota(nota) {
    if (nota <6){
        return "nota-baixa"
    } else {
        return "nota-alta"
    }
}

function calcularMediaProva(listaAlunos, prova){
    var somaNotas = 0;
    for (let i = 0; i < listaAlunos.length; i++){
        somaNotas += listaAlunos[i]["nota" + prova];
    }
    return somaNotas / listaAlunos.length;
}

function gerarAlunos(listaAlunos){
    var acumulado ="<h2>Alunos de ISW-008</h2>" 
                    + "<table><thead><tr><th> Nome </th>"
                    + "<th> RA </th>"
                    + "<th> Curso </th>"
                    + "<th> Idade </th>"
                    + "<th> Nota P1 </th>"
                    + "<th> Nota P2 </th>"
                    + "<th> Média </th>"
                    + "</tr>"
                    + "</thead>"
                    + "</tbody>";

    var aprovados = 0;
    var reprovados = 0;

    for (let i=0; i  < listaAlunos.length; i++){
        var media = (listaAlunos[i].notaP1 + listaAlunos[i].notaP2) / 2;

        if (media >= 6) {
            aprovados++;
        } else {
            reprovados++;
        }
        
        acumulado += "<tr><td>" + listaAlunos[i].nome + "</td>"
            + "<td class='centro'>" + listaAlunos[i].ra + "</td>"
            + "<td>" + listaAlunos[i].curso + "</td>"
            + "<td class='centro'>" + listaAlunos[i].idade + "</td>" 
            + "<td class='centro " + avaliarNota(listaAlunos[i].notaP1) + "'>" + listaAlunos[i].notaP1 + "</td>"
            + "<td class='centro " + avaliarNota(listaAlunos[i].notaP2) + "'>" + listaAlunos[i].notaP2 + "</td>"
            + "<td class='centro media " + avaliarNota(media) + "'>" + media.toFixed(1) + "</td>";            
        }

    acumulado += "</tbody></table>";

    document.getElementById("tabela-alunos").innerHTML = acumulado;

    var mediaP1 = calcularMediaProva(listaAlunos, "P1").toFixed(1);
    var mediaP2 = calcularMediaProva(listaAlunos, "P2").toFixed(1);
    
    var mediaP1Avaliada = avaliarNota(parseFloat(mediaP1));
    var mediaP2Avaliada = avaliarNota(parseFloat(mediaP2));
    
    document.getElementById("mediaP1").innerHTML = "<span class='" + mediaP1Avaliada + "'>" + mediaP1 + "</span>";
    document.getElementById("mediaP2").innerHTML = "<span class='" + mediaP2Avaliada + "'>" + mediaP2 + "</span>";

    document.getElementById("aprovados").innerText = aprovados;
    document.getElementById("reprovados").innerText = reprovados;
}
