class Question {
    question: string;
    answers: any;
}

class Type {
    type: string;
    description: string;
    image?: string;
}

export const QUESTIONS: Question[] = [
    {
        question: 'Slaap...',
        answers: {
            a: 'I <3 it',
            b: 'Is nodig, maar heb er niet altijd even veel zin in',
            c: 'Zo nutteloos, ik doe liever iets anders!'
        }
    },
    {
        question: 'Lang uitslapen in het weekend...',
        answers: {
            a: 'Sowiesoooooo! Mij zie je voor 10u niet verschijnen!',
            b: 'Hoeft niet, ik word wakker op mijn vast uur.',
            c: 'Is voor mij niet later dan 9u-9u30'
        }
    },
    {
        question: 'Slaap jij makkelijk in?',
        answers: {
            a: 'Ik lig vaak nog lang te woelen en piekeren.',
            b: 'Ik slaap relatief snel in.',
            c: 'Ik slaap vrijwel meteen in.'
        }
    },
    {
        question: 'Ochtendmodus',
        answers: {
            a: 'Zombie',
            b: 'Fris als n\'n vis',
            c: 'Groggy maar gaat snel over'
        }
    },
    {
        question: 'Overdag',
        answers: {
            a: 'Blijf ik de hele dag door geeuwen.',
            b: 'Kom ik er tegen de middag wel door.',
            c: 'Word ik tegen de avond goed moe.'
        }
    },
    {
        question: 'Screen addict or angel?',
        answers: {
            a: 'Gaming / Netflix all night long!',
            b: 'Mijn gsm ligt in mijn kamer, maar ik gebruik hem niet meer of beperkt.',
            c: 'Mijn gsm komt mijn kamer niet in!'
        }
    },
];

export const TYPES: Type[] = [
    {
        type: 'Morning Person',
        description: 'Jij bent een echt ochtendmens! ’s ochtends sta je steeds lekker fris op en zou je de wereld kunnen verslaan!',
    },
    {
        type: 'Sleep Lover',
        description: 'Slapen is voor jouw het ultieme moment om te genieten. Sleep all day? Yes please!',
    },
    {
        type: 'Restless bat',
        description: 'Jij zou wel willen goed slapen, maar soms lukt het je echt niet… Je ligt nog lang wakker, te piekeren of te woelen.',
    },
    {
        type: 'Screen Addict',
        // tslint:disable-next-line:max-line-length
        description: '’s avonds uren gamen, netflixen of instagrammen? Dat ben jij! Doordat je ’s avonds niet weg te slaan bent van de schermen, verlies je soms kostbare uren slaap',
    },
    {
        type: 'Panda',
        // tslint:disable-next-line:max-line-length
        description: 'Geeuw… GEEEUWWW…. Geeuw… Moe in de klas? Moe in de zetel? Klinkt herkenbaar voor panda’s. Wat extra slaap kan je deugd doen!',
    },
    {
        type: 'Sleepyhead',
        description: 'Ochtenden zijn zo je ding niet… Magische truc om ochtenden draaglijker te maken? Vroeger in bed kruipen!',
    },
    {
        type: 'King / Queen of Sleep',
        description: 'Hé goed bezig! Jij vind slaap belangrijk en probeert dit zo goed mogelijk te doen. Keep it up!',
    },
];
