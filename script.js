//'Inglourious Bastards', 'Kill Bill', 'Pulp Fiction', 'Django', 'The Sinner', 'Gone Girl', 'Personal Life', 'The Rain'

//let filmes = ['Pulp Fiction', 'Kill Bill', 'Django', 'Gone Girl'] 



//for(let i = 0; i <= filmes.length; i++)//{ //i = tentativas
//  console.log(filmes[i])
//}


//filmes.push('Pulp Fiction')
//filmes.push('Kill Bill'
//filmes.push('Django', 'Gone Girl')


let listaDeFilmes = [
        {
        img: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg',
        link: 's7EdQ4FqbhY'
        },
        {
        img: 'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        link: 's8CZKbDzP1E'
        },
        {
         img: 'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg',
         link: 'KnrRy6kSFF0'
        },
        {
         img: 'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
         link: '7kSuas6mRpk'
        },
        {
        img: 'https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
          link: 'WTt8cCIvGYI'
        }
    ]

for (f of listaDeFilmes){
        
        link = `https://www.youtube.com/embed/${f.link}`
        img = f.img

        blocos.innerHTML += `
            <div >
                <img id="imagem_do_filme" src="${img}" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="setarFilme('${img}','${link}')">
            <div>
        `
    }

    function setarFilme(a,b){
        //titulo.innerHTML = a
        ifr.src = b
    }


//for (let i = 0; i < listaDeFilmes.length; i++){
  //document.write("<img src=" + listaDeFilmes[i] + ">")
//}