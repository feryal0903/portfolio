const els = {
    welcomeScreen: null,
    questionScreen: null,
    endScreen: null,
    welcomeBtn: null,
    answers: null,
    endBtn: null,
    answersContainer: null
};

let questionIndex = 0;

const questions = [
    {
        question: 'Quelle hauteur préférez-vous lors de l\'escalade ?',
        answers: [
            { title: 'Les grandes voies qui travail la technique', type: 'La couenne' },
            { title: 'Les longues voies qui travail l\'endurance', type: 'La grande voie' },
            { title: 'Les voies courtes avec des mouvements explosifs', type: 'Le bloc classique' },
            { title: 'Les voies un peu plus longue pour avoir l\'endurance et les mouvements explosifs', type: 'Le highball' }
        ]
    },
    {
        question: 'Quel animal vous ressemble le plus ?',
        answers: [
            { title: 'Ours', type: 'La couenne' },
            { title: 'Chat', type: 'La grande voie' },
            { title: 'Ecureuil', type: 'Le bloc classique' },
            { title: 'Serpent', type: 'Le highball' }
        ]
    },
    {
        question: 'Quel type de mouvement préférez-vous ?',
        answers: [
            { title: 'Les mouvements techniques et précis', type: 'Le bloc classique' },
            { title: 'Les mouvements fluides et variés', type: 'La grande voie' },
            { title: 'Les mouvements puissants et dynamiques', type: 'La couenne' },
            { title: 'Les mouvements complexes et variés', type: 'Le highball' }
        ]
    },
    {
        question: 'Quel est votre niveau de tolérance à la hauteur ?',
        answers: [
            { title: 'À l\'aise à des hauteurs modérées, mais pas trop élevées', type: 'La couenne' },
            { title: 'Pas peur des hauteurs, aime les situations exposées', type: 'Le highball' },
            { title: 'La hauteur me dérange', type: 'Le bloc classique' },
            { title: 'À l\'aise avec des hauteurs importantes, surtout en haute altitude', type: 'La grande voie' }
        ]
    },
    {
        question: 'Quel est votre type de force physique ?',
        answers: [
            { title: 'Force explosive', type: 'Le bloc classique' },
            { title: 'Bonne endurance', type: 'La grande voie' },
            { title: 'Puissance', type: 'La couenne' },
            { title: 'Equilibre entre force et endurance', type: 'Le highball' }
        ]
    },
    {
        question: 'Où préférez-vous grimper ?',
        answers: [
            { title: 'En salle et en extérieur', types: ['Le bloc classique', 'La couenne'] },
            { title: 'Seulement en extérieur', types: ['Le highball', 'La grande voie'] }
        ]
    }
    
    
    // ... Ajoutez les quatre questions suivantes de manière similaire
];

const recordedAnswers = [];


const init = () => {
    console.log('Page has loaded');

    els.welcomeScreen = document.querySelector('.welcome-screen');
    els.questionScreen = document.querySelector('.question-screen');
    els.endScreen = document.querySelector('.end-screen');
    els.welcomeBtn = els.welcomeScreen.querySelector('button');
    els.endBtn = els.endScreen.querySelector('button');
    els.answersContainer = els.questionScreen.querySelector('ul');

    els.welcomeBtn.addEventListener('click', () => {
        displayScreen('question');
        displayQuestion(questionIndex);
    });
    els.endBtn.addEventListener('click', () => {
        displayScreen('welcome');
        questionIndex = 0;
    });

    els.answersContainer.addEventListener('click', ({ target }) => {
        if (target.tagName !== 'LI') {
            return;
        }
        const type = target.getAttribute('data-type');
        recordedAnswers.push(type);

        questionIndex++;

        if (questionIndex >= questions.length) {
            calculateScore();
            displayScreen('end');
        } else {
            displayQuestion(questionIndex);
        }
    });

};

const calculateScore = () => {
    const typeCount = recordedAnswers.reduce((count, type) => {
        count[type] = (count[type] || 0) + 1;
        return count;
    }, {});

    const maxType = Object.keys(typeCount).reduce((a, b) => typeCount[a] > typeCount[b] ? a : b);
    const maxTypeFrench = {
        'La couenne': 'La couenne',
        'La grande voie': 'La grande voie',
        'Le bloc classique': 'Le bloc classique',
        'Le highball': 'Le highball'
    };

    els.endScreen.querySelector('span').textContent = maxTypeFrench[maxType];
};

const displayQuestion = (index) => {
    const currentQuestion = questions[index];
    const questionEl = els.questionScreen.querySelector('h2');

    const answerEls = currentQuestion.answers.map((answer, i) => {
        const liEl = document.createElement('li');
        liEl.textContent = `${i + 1}. ${answer.title}`;
        liEl.setAttribute('data-type', answer.type);
        return liEl;
    });

    questionEl.textContent = currentQuestion.question;
    els.answersContainer.textContent = '';
    els.answersContainer.append(...answerEls);
};

const displayScreen = (screenName) => {
    els.welcomeScreen.style.display = 'none';
    els.questionScreen.style.display = 'none';
    els.endScreen.style.display = 'none';

    const screen = els[screenName + 'Screen'];
    screen.style.display = 'flex';
};

window.addEventListener('load', init);
