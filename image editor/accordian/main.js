const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    const btn = question.querySelector('#show-btn');

    btn.addEventListener('click', () => {
        questions.forEach(item => {
            if(item !== question) {
                item.classList.remove('show-answer');
            }
        });

        question.classList.toggle('show-answer');
    });
});

