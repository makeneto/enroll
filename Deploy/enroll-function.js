// Capturar o submit e Apresentar os dados do estudante
document.getElementById('enroll').addEventListener('submit', (e) => {
    e.preventDefault()

    // Verificar se há uma foto do estudante
    const fileInput = document.getElementById('studentPhoto');
    const alert = document.querySelector('.btn');

    if (!fileInput.files.length) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        alert.style.backgroundColor = 'hsl(0, 100%, 60%)'
        alert.style.transition = '.5s'

        setTimeout(() => {
            alert.style.backgroundColor = 'white'
        }, 2000);
    } else {
        //Obter o nome do estudante
    const nameStudent = document.querySelector('#iname').value
    const cardMobileName = document.querySelector('.studentName')
    const cardLargeName = document.querySelector('.nameCard')

    cardMobileName.textContent = nameStudent
    cardLargeName.textContent = nameStudent

    //Obter a residência do estudante
    const residencia = document.querySelector('#imora').value
    document.querySelector('.residCard').textContent = residencia

    // Aplicar efeito de desfoque para o container
    const container = document.querySelector('.container')
    container.style.filter = 'blur(5px)'

    // Aplicar antes de carregar o cartão de estudante
    const loader = document.querySelector('.loading')
    loader.style.display = 'flex'

    setTimeout(() => {
        loader.style.display = 'none'
        // Verificar se a janela é maior que 480px para mudar o cartão de estudante
        const windowWidth = window.innerWidth

        if (windowWidth > 480) {
            const cardPopUp = document.querySelector('.card')
            cardPopUp.style.display = 'block'
        }
        else {
            const sucessPopUp = document.querySelector('.success')
            sucessPopUp.style.display = 'block'
        }
    }, 3000)


    // Scroll para o topo da página
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // Se clicar fora do cartão ele desaparecerá junto com seus dados
    document.querySelector('.container').addEventListener('click', () => {
        location.reload()
    })
    }
})

// Selecionar Foto e Imprimir
function selectPhoto() {
    const studentPhoto = document.getElementById('studentPhoto')
    const profileImage = document.getElementById('profileImage')
    const cardPhoto = document.getElementById('cardPhoto')

    studentPhoto.addEventListener('change', (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = function (e) {
                const imageUrl = e.target.result

                // photo no smartphone
                profileImage.src = imageUrl
                profileImage.style.display = 'block'

                // photo no tablet ou pc
                cardPhoto.src = imageUrl
                cardPhoto.style.display = 'block'
            };

            reader.readAsDataURL(file)
        }
    });
}

selectPhoto()

// Alterar texto do botão de upload
document.getElementById('studentPhoto').addEventListener('click', (e) => {
    document.querySelector('.upload-photo').innerHTML = 'ALTERAR FOTO'
})

// Adicionar ShortForm2 do curso e da classe, selecionar curso se o usuário frequentar uma class de ensino médio
document.addEventListener('DOMContentLoaded', () => {
    const classeSelect = document.querySelector('#classe')
    const courseSelect = document.querySelector('#curso')
    const courseLabel = document.querySelector('.courseList')
    const courseSucess = document.querySelector('.course-sucess')
    const courseCard = document.querySelector('.course-card')

    classeSelect.addEventListener('change', (event) => {
        const selectedClass = event.target.options[event.target.selectedIndex];
        const classeSelecionada = selectedClass.text;

        // Selecionar curso se a classe for do ensino médio
        if (classeSelecionada === '10ª Classe' || classeSelecionada === '11ª Classe' || classeSelecionada === '12ª Classe' || classeSelecionada === '13ª Classe') {
            courseLabel.style.display = 'flex'
            courseLabel.className = 'grade'
            courseSelect.setAttribute('required', 'required')
        }
        else {
            courseLabel.style.display = 'none'
            courseSelect.removeAttribute('required')
        }

        // Abreviação da classe
        let abbClass1 = document.querySelector('.classForm1')
        let abbClass2 = document.querySelector('.classForm2')

        if (classeSelecionada === 'Iniciação') {
            abbClass1.textContent = 'Iniciação '
            abbClass2.textContent = 'Iniciação '
            courseSucess.style.display = 'none'
            courseCard.style.display = 'none'
        }
        else if (classeSelecionada === '1ª Classe') {
            abbClass1.textContent = '1ª'
            abbClass2.textContent = '1ª'
            courseSucess.style.display = 'none'
            courseCard.style.display = 'none'
        }
        else if (classeSelecionada === '2ª Classe') {
            abbClass1.textContent = '2ª'
            abbClass2.textContent = '2ª'
            courseSucess.style.display = 'none'
            courseCard.style.display = 'none'
        }
        else if (classeSelecionada === '3ª Classe') {
            abbClass1.textContent = '3ª'
            abbClass2.textContent = '3ª'
            courseSucess.style.display = 'none'
            courseCard.style.display = 'none'
        }
        else if (classeSelecionada === '4ª Classe') {
            abbClass1.textContent = '4ª'
            abbClass2.textContent = '4ª'
            courseSucess.style.display = 'none'
            courseCard.style.display = 'none'
        }
        else if (classeSelecionada === '5ª Classe') {
            abbClass1.textContent = '5ª'
            abbClass2.textContent = '5ª'
            courseSucess.style.display = 'none'
            courseCard.style.display = 'none'
        }
        else if (classeSelecionada === '6ª Classe') {
            abbClass1.textContent = '6ª'
            abbClass2.textContent = '6ª'
            courseSucess.style.display = 'none'
            courseCard.style.display = 'none'
        }
        else if (classeSelecionada === '7ª Classe') {
            abbClass1textContent = '7ª'
            abbClass2.textContent = '7ª'
            courseSucess.style.display = 'none'
            courseCard.style.display = 'none'
        }
        else if (classeSelecionada === '8ª Classe') {
            abbClass1.textContent = '8ª'
            abbClass2.textContent = '8ª'
            courseSucess.style.display = 'none'
            courseCard.style.display = 'none'
        }
        else if (classeSelecionada === '9ª Classe') {
            abbClass1.textContent = '9ª'
            abbClass2.textContent = '9ª'
            courseSucess.style.display = 'none'
            courseCard.style.display = 'none'
        }
        else if (classeSelecionada === '10ª Classe') {
            abbClass1.textContent = '10'
            abbClass2.textContent = '10'
        }
        else if (classeSelecionada === '11ª Classe') {
            abbClass1.textContent = '11'
            abbClass2.textContent = '11'
        }
        else if (classeSelecionada === '12ª Classe') {
            abbClass1.textContent = '12'
            abbClass2.textContent = '12'
        }
        else if (classeSelecionada === '13ª Classe') {
            abbClass1.textContent = '13'
            abbClass2.textContent = '13'
        }
    });

    courseSelect.addEventListener('change', (event) => {
        const selectedCourse = event.target.options[event.target.selectedIndex];
        const cursoSelecionado = selectedCourse.text;

        let classStudent = document.querySelector('.classStudent')
        let courseStudent = document.querySelector('.courseCard')

        classStudent.textContent = cursoSelecionado
        courseStudent.textContent = cursoSelecionado

        // Abreviação da classe
        let abbCourse1 = document.querySelector('.shortForm1')
        let abbCourse2 = document.querySelector('.shortForm2')

        if (cursoSelecionado === 'Ciências Económicas e Jurídicas') {
            abbCourse1.textContent = 'CEJ'
            abbCourse2.textContent = 'CEJ'
        }
        else if (cursoSelecionado === 'Enfermagem') {
            abbCourse1.textContent = 'ENF'
            abbCourse2.textContent = 'ENF'
        }
        else if (cursoSelecionado === 'Finanças') {
            abbCourse1.textContent = 'FIN'
            abbCourse2.textContent = 'FIN'
        }
        else if (cursoSelecionado === 'Informática') {
            abbCourse1.textContent = 'INF'
            abbCourse2.textContent = 'INF'
        }
    });
});

// Gerar número de Matrícula aleatório
function gerarNumeroDeMatricula() {
    let min = 6000;
    let max = 9999;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    let numMatricula = document.querySelector('.num-matri')
    let numMatriculaCard = document.querySelector('.numMatriCard')
    numMatricula.textContent = numeroAleatorio;
    numMatriculaCard.textContent = numeroAleatorio;
}

gerarNumeroDeMatricula()

// Apresentar data da matrícula com 0 a esquerda se for preciso
function zero(num) {
    return num < 10 ? `0${num}` : num
}

function dateMatricula() {
    const now = new Date()
    const day = zero(now.getDate())
    const month = zero(now.getMonth() + 1)
    const year = zero(now.getFullYear())

    const dataMatriC1 = document.querySelector('.data-matri')
    const dataMatriC2 = document.querySelector('.dateMatriCard')

    dataMatriC1.textContent = `${day}/${month}/${year}`
    dataMatriC2.textContent = `${day}/${month}/${year}`

    // Colocar bordas mais carregada no mês atual
    const jan = document.getElementById('jan')
    const fev = document.getElementById('fev')
    const mar = document.getElementById('mar')
    const abr = document.getElementById('abr')
    const mai = document.getElementById('mai')
    const jun = document.getElementById('jun')
    const jul = document.getElementById('jul')
    const ago = document.getElementById('ago')
    const set = document.getElementById('set')
    const out = document.getElementById('out')
    const nov = document.getElementById('nov')
    const dez = document.getElementById('dez')

    if (month === `09`) {
        set.style.border = '2px solid black'
    } else if (month === 10) {
        out.style.border = '2px solid black'
    } else if (month === 11) {
        nov.style.border = '2px solid black'
    } else if (month === 12) {
        dez.style.border = '2px solid black'
    } else if (month === `01`) {
        jan.style.border = '2px solid black'
    } else if (month === `02`) {
        fev.style.border = '2px solid black'
    } else if (month === `03`) {
        mar.style.border = '2px solid black'
    } else if (month === `04`) {
        abr.style.border = '2px solid black'
    } else if (month === `05`) {
        mai.style.border = '2px solid black'
    } else if (month === `06`) {
        jun.style.border = '2px solid black'
    } else if (month === `07`) {
        jul.style.border = '2px solid black'
    } else if (month === `08`) {
        ago.style.border = '2px solid black'
    }
}

dateMatricula()

// Recarregar a página e apagar os dados se o usuário clicar em obrigado
document.querySelector('.success-button-main').addEventListener('click', () => {
    location.reload()
})