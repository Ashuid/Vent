export class QuestionsService {
    getQuestions(){
        return[
            {
                question: 'What can I change?',
                answer: 'You can change the temperature, humidity and light levels'
            },
            {
                question: 'Is it possible to save my preferred settings?',
                answer: 'You can save your preferred settings by clicking the save icon on the top bar.'
            },
            {
                question: 'Did you not find your question?',
                answer: 'If you have other questions than the ones listed before, please contact our support at support@ventvent.com or call 00000000'
            }];
    }
}
