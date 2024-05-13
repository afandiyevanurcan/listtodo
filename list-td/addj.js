let btn = document.querySelector('.addBtn');
let inputList = document.querySelector('.input-list');
let input = document.querySelector('.input-text');
let ul = document.querySelector('.list');
let list = document.querySelector('.list');
let upDown = document.querySelector('.up-down');
let done = true;
  
  
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      let text = input.value.trim();

      if (input.value === ''){
        alert('Enter your text');
    }
      else {
        let li = document.createElement('li');
        li.textContent = text;
  
        let del = document.createElement('button');
        del.textContent = 'x';
        del.classList.add('delBtn');
        li.append(del);
  
        list.append(li);
        input.value = '';
      }
    });
  
    list.addEventListener('click', function (event) {
      if (event.target.classList.contains('delBtn')) {
        let li = event.target.closest('li');
        li.remove();
      }
    });

    upDown.addEventListener('click', function () {
      sortList();
    });
  
    function sortList() {
      let listItems = Array.from(list.getElementsByTagName('li'));
  
      listItems.sort((a, b) => {
        let a1 = a.textContent.trim().toLowerCase();
        let b1 = b.textContent.trim().toLowerCase();
        if (done) {
          return a1.localeCompare(b1);
        }
        else {
          return b1.localeCompare(a1);
        }
        
      });
      listItems.forEach(item => list.append(item));
      done = !done;
    }
