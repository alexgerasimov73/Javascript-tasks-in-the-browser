const listBlock = document.querySelector('.list-block');
const tasks = Array.from(document.querySelectorAll('input'));
const taskCounter = document.querySelector('output');

function taskCheck() {
  const checkAmount = tasks.filter(function(task) {
    return task.checked === true;
  });
  const taskCount = checkAmount.length;
  if (checkAmount.length === tasks.length) {
    listBlock.classList.add('complete');
  } else {
    listBlock.classList.remove('complete');
  }
  taskCounter.innerText = `${taskCount} из ${tasks.length}`;
}

for (const task of tasks) {
  task.addEventListener('click', taskCheck);
}
