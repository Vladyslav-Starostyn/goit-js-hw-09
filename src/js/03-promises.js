import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

const childrens = [...formEl.children];
childrens.forEach(children => children.classList.add('input'));

formEl.addEventListener('submit', onSubmitCreatePromises);

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

function onSubmitCreatePromises(event) {
  event.preventDefault();
  const { delay, step, amount } = formEl;
  const firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  for (let i = 0; i < amount.value; i += 1) {
    createPromise(1 + i, firstDelay + i * delayStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
