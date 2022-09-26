const lista = "lista de arquivos mp3: jazz.mp3, rock.mp3, podcast.mp3, blues.mp3, pop.mp3"
const regexMp3 = /\.mp3/g;
console.log(`Quantidade de arquivos com extensão .mp3: ${lista.match(regexMp3).length}.`)