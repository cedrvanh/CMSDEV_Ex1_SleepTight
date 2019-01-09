import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { QUESTIONS, TYPES } from '../../../models/quiz.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QuizQuestionsComponent implements OnInit, AfterViewInit {
  questions = QUESTIONS;
  types = TYPES;
  currentSlide = 0;
  output = [];
  id: number;
  userAnswers = [];
  userType: any;

  constructor(
    private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    this.initQuiz();
    this.userService.getCurrentUser()
      .subscribe(res => {
        this.id = res.id;
      });
  }

  ngAfterViewInit() {
    this.showSlide(0);
  }

  onSubmit() {
    this.filterType();

    const data = {
      fields: {
        sleep_type: this.userType
      },
    };

    this.userService.postFields(this.id, data)
      .subscribe(() => {
        this.router.navigate(['/profile']);
      });
  }

  initQuiz() {
    this.questions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (const num in currentQuestion.answers) {
        answers.push(
          `<label>
            <input type="radio" name="q${questionNumber}" value="${num}">
            ${currentQuestion.answers[num]}
          </label>`
        );
      }

      this.output.push(`<section class="quiz__section slide">
                      <div class="question">
                        <h2>Vraag ${questionNumber + 1}/${this.questions.length}</h2>
                        <h1>${currentQuestion.question}</h1>
                      </div>
                      <div class="answers">
                        ${answers.join('')}
                      </div>
                    </section>`);
    });
  }

  filterType() {
    this.getUserAnswers();

    switch (this.userType) {
      case this.userAnswers[0] === 'a':
        this.userType = this.types[1].type; // Sleep Lover
        break;
      case this.userAnswers[0] === 'c':
        this.userType = this.types[5].type; // Sleepy Head
        break;
      case this.userAnswers[1] === 'a':
        this.userType = this.types[5].type; // Sleepy Head
        break;
      case this.userAnswers[2] === 'a':
        this.userType = this.types[2].type; // Restless Bat
        break;
      case this.userAnswers[3] === 'a':
        this.userType = this.types[5].type; // Sleepy Head
        break;
      case this.userAnswers[3] === 'b':
        this.userType = this.types[0].type; // Morning Person
        break;
      case this.userAnswers[4] === 'a':
        this.userType = this.types[4].type; // Panda
        break;
      case this.userAnswers[5] === 'b':
        this.userType = this.types[3].type; // Screen Addict
        break;
      default:
        this.userType = this.types[6].type; // King / Queen of Sleep
        break;
    }
  }

  getUserAnswers() {
    this.questions.forEach((currentQuestion, questionNumber) => {
      this.userAnswers.push(
        document.querySelector<HTMLInputElement>(`input[name="q${questionNumber}"]:checked`).value
      );
    });
  }

  showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const submitButton = document.getElementById('submit');
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');

    slides[this.currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    this.currentSlide = n;

    if (this.currentSlide === 0) {
      previousButton.style.display = 'none';
    } else {
      previousButton.style.display = 'inline-block';
    }

    if (this.currentSlide === slides.length - 1) {
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    } else {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  nextSlide() {
    if (document.querySelector(`input[name="q${this.currentSlide}"]:checked`)) {
      this.showSlide(this.currentSlide + 1);
      document.querySelector('.error').innerHTML = '';
    } else {
      document.querySelector('.error').innerHTML = 'Selecteer een optie';
    }
  }

  previousSlide() {
    this.showSlide(this.currentSlide - 1);
    document.querySelector('.error').innerHTML = '';
  }
}
